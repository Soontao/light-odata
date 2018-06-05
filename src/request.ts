import { ODataQueryParam, HTTPMethod, Credential, PlainODataResponse } from "./types";
import { split, slice, join } from "lodash";
import { GetAuthorizationPair, isJSONString } from "./util";
import { attempt } from "lodash";

export type AdvancedODataClientProxy = (url: string, init: RequestInit) => Promise<{
  /**
   * The Body Content
   */
  content: any,
  response: {
    headers?: Headers,
    status: number,
  }
}>

export interface ODataNewOptions {
  /**
   * metadata url
   */
  metadataUri: string;
  /**
   * basic credential pair
   */
  credential?: Credential;
  /**
   * fetch proxy of all request
   */
  fetchProxy?: AdvancedODataClientProxy,
  /**
   * auto process csrf token of c4c
   */
  processCsrfToken?: boolean;
}


const odataDefaultFetchProxy: AdvancedODataClientProxy = async (url: string, init: RequestInit) => {
  const res = await fetch(url, init)
  var content: any;
  if (res.status === 401) {
    throw new Error("401, Unauthorized, check your creadential !");
  }
  if (res.status === 403) {
    throw new Error("403, Forbidden, check your csrf token !");
  }
  if (res.status === 500) {
    throw new Error("500, internal error")
  }

  content = await res.text();
  // result process
  var jsonResult = attempt(JSON.parse, content);
  if (!(jsonResult instanceof Error)) {
    content = jsonResult;
    if (content.error) {
      throw new Error(content.error.message.value)
    }
  }

  return {
    content,
    response: {
      headers: res.headers,
      status: res.status
    }
  }

};

/**
 * OData Client
 */
export class OData {

  private metadataUri: string;
  /**
   * odata service path, like /sap/c4c/odata/v1/c4codata/
   */
  private odataEnd: string;
  /**
   * http basic credential
   */
  private credential: Credential;
  /**
   * internal csrf token
   */
  private csrfToken: string = "";
  private commonHeader: { [headerName: string]: string } = {
    "Accept": "application/json",
    "Accept-Language": "zh",
    "Content-Type": "application/json",
  };
  private requestUrlRewrite: (url: string) => string = (s) => s;
  private fetchProxy = odataDefaultFetchProxy;
  private processCsrfToken = true;

  /**
   * alternative constructor
   * 
   * @param options config options
   */
  static New(options: ODataNewOptions) {
    return new OData(
      options.metadataUri,
      options.credential,
      undefined,
      undefined,
      options.fetchProxy,
      options.processCsrfToken)
  }

  /**
   * OData
   */
  constructor(
    metadataUri: string,
    credential?: Credential,
    headers: any = {},
    urlRewrite?: (string) => string,
    fetchProxy?: AdvancedODataClientProxy,
    processCsrfToken: boolean = true
  ) {
    if (fetchProxy) {
      this.fetchProxy = fetchProxy
    }
    if (!metadataUri) {
      throw new Error("metadata url required !")
    } else {
      this.metadataUri = metadataUri;
      // e.g https://c4c-system/sap/c4c/odata/v1/c4codata/
      this.odataEnd = join(slice(split(this.metadataUri, "/"), 0, -1), "/") + "/";
      this.commonHeader = { ...this.commonHeader, ...headers }
      if (credential) {
        this.credential = credential;
      }
      if (urlRewrite) {
        this.requestUrlRewrite = urlRewrite;
      }
    }
    this.processCsrfToken = processCsrfToken;
  }

  /**
   * generate authorization header
   */
  private headers() {
    if (this.credential) {
      return {
        ...this.commonHeader,
        ...GetAuthorizationPair(this.credential.username, this.credential.password)
      }
    } else {
      return this.commonHeader
    }
  }

  /**
   * Set OData Client Http Basic credential
   * 
   * @param credential 
   */
  public setCredential(credential: Credential) {
    this.credential = credential;
  }

  /**
   * setODataEndPath
   * 
   * e.g. https://tenant.c4c.saphybriscloud.cn/sap/c4c/odata/v1/c4codata/
   */
  public setODataEndPath(odataEnd: string) {
    if (odataEnd) {
      this.odataEnd = odataEnd
    }
  }

  /**
   * 获取CSRF Token
   */
  public async getCsrfToken() {
    if (this.csrfToken) {
      return await this.csrfToken;
    }
    const { response: { headers } } = await this.fetchProxy(this.requestUrlRewrite(this.odataEnd), {
      method: "GET",
      headers: {
        "x-csrf-token": "fetch",
        ...this.headers()
      },
    });
    if (headers) {
      this.csrfToken = headers.get("x-csrf-token");
    } else {
      throw new Error("csrf token need the odata proxy give out headers!")
    }
    return this.csrfToken;
  }

  public cleanCsrfToken() {
    if (this.csrfToken) { delete this.csrfToken; }
  }

  /**
   * odata request uri
   * 
   * @param uri HTTP URI
   * @param queryParams odata query params
   * @param method HTTP method
   * @param body request content
   */
  public async requestUri(uri: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", body?: any): Promise<PlainODataResponse> {
    let final_uri = uri;
    if (queryParams) {
      final_uri = `${final_uri}?${queryParams.toString()}`;
    }
    let config: RequestInit = {
      method,
      headers: this.headers(),
    };
    if (this.processCsrfToken) {
      const token = await this.getCsrfToken();
      config = {
        method,
        headers: {
          "x-csrf-token": token,
          ...this.headers(),
        },
      };
    }
    if (method !== "GET" && body) {
      config.body = JSON.stringify(body);
    }
    // request & response
    var res = await this.fetchProxy(final_uri, config);

    if (this.processCsrfToken) {
      if (res.response.headers) {
        if (res.response.headers.get("x-csrf-token") == "Required") {
          // one time retry if csrf token time expired
          this.cleanCsrfToken();
          config.headers["x-csrf-token"] = await this.getCsrfToken();
          res = await this.fetchProxy(final_uri, config);
        }
      }
    }

    return res.content;
  }

  /**
   * odata request
   * 
   * @param collection CollectionName
   * @param id entity uuid
   * @param queryParams query param, not work for single entity uri
   * @param method request method
   * @param entity C4C Entity instance
   */
  public async request(collection: string, id?: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any) {
    let url = `${this.odataEnd}${collection}`;
    /**
     * System query options '$orderby,$skip,$top,$skiptoken,$inlinecount,' 
     * are not allowed in the requested URI
     */
    if (id) { url += `('${id}')`; }
    return this.requestUri(url, queryParams, method, entity);
  }

}
