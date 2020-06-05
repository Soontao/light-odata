import attempt from "@newdash/newdash-node/attempt";
import join from "@newdash/newdash-node/join";
import slice from "@newdash/newdash-node/slice";
import startsWith from "@newdash/newdash-node/startsWith";
import { v4 } from 'uuid';
import { BatchRequest, formatBatchRequest, ParsedResponse, parseMultiPartContent } from "./batch";
import { ODataFilter } from "./filter";
import { ODataParam, ODataQueryParam } from "./params";
import { Credential, HTTPMethod, PlainODataMultiResponse, PlainODataSingleResponse } from "./types";
import { GetAuthorizationPair } from "./util";
import { ODataVersion } from "./types_v4";

export type AdvancedODataClientProxy = (url: string, init: RequestInit) => Promise<{
  /**
   * The Body Content
   */
  content: any;
  response: {
    headers?: Headers;
    status: number;
  };
}>;

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
  fetchProxy?: AdvancedODataClientProxy;
  /**
   * auto process csrf token of c4c
   */
  processCsrfToken?: boolean;
  /**
   * for SAP OData
   */
  forSAP?: boolean;

  /**
   * odata version, default v2
   */
  version?: ODataVersion;
}

export interface BatchRequestOptions<T> {
  /**
   * Collection Name
   */
  collection: string;
  /**
   * OData Entity ObjectID
   */
  id?: any;
  /**
   * OData Param
   */
  params?: ODataQueryParam;
  method?: HTTPMethod;
  /**
   * OData Entity Object
   */
  entity?: T;
  /**
   * SAP OData need Content-Length but standard reject it
   */
  withContentLength?: boolean;
}

export interface ODataRequest<T = any> {
  collection: string, /** collection name */
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * PATCH for UPDATE
   * POST for CREATE
   * DELETE for delete
   */
  method?: HTTPMethod,
}


export interface ODataReadIDRequest<T> extends ODataRequest<T> {
  id?: any, /** object key in READ/UPDATE/DELETE */
}
export interface ODataQueryRequest<T> extends ODataRequest<T> {
  params?: ODataQueryParam, /** params in QUERY */
}

export interface ODataWriteRequest<T> extends ODataRequest<T> {
  entity?: T /** data object in CREATE/UPDATE */
}

const odataDefaultFetchProxy: AdvancedODataClientProxy = async (url: string, init: RequestInit) => {
  const res = await fetch(url, init);
  var content: any = "";
  if (res.status === 401) {
    throw new Error("401, Unauthorized, check your creadential !");
  }
  if (res.status === 403) {
    throw new Error("403, Forbidden, check your csrf token !");
  }
  if (res.status === 500) {
    throw new Error("500, internal error");
  }

  const contentType = res.headers.get("Content-Type");

  content = await res.text();

  if (startsWith(contentType, "application/json")) { // result process
    var jsonResult = attempt(JSON.parse, content);
    if (!(jsonResult instanceof Error)) {
      content = jsonResult;
      // if (content.error) {
      //   throw new Error(content.error.message.value);
      // }
    }
  }

  return {
    content,
    response: { headers: res.headers, status: res.status }
  };
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
  /**
   * dont direct use this object
   */
  private commonHeader: { [headerName: string]: string } = {
    "Accept": "application/json",
    "Accept-Language": "zh",
    "Content-Type": "application/json"
  };
  private fetchProxy = odataDefaultFetchProxy;
  private processCsrfToken = true;
  private forSAP = false;

  private version: ODataVersion = "v2"

  /**
   * alternative constructor
   *
   * @param options config options
   */
  static New(options: ODataNewOptions) {
    const rt = new OData(
      options.metadataUri,
      options.credential,
      undefined,
      undefined,
      options.fetchProxy,
      options.processCsrfToken
    );
    rt.forSAP = options.forSAP || false;
    rt.version = options.version || "v2";
    return rt;
  }

  /**
   * new odata query param
   */
  static newParam() {
    return ODataParam.newParam();
  }

  /**
   * new filter
   */
  static newFilter() {
    return ODataFilter.newFilter();
  }

  /**
   * OData
   * @private
   */
  private constructor(
    metadataUri: string,
    credential?: Credential,
    headers: any = {},
    /**
     * deprecated, not use now
     */
    urlRewrite?: (string) => string,
    fetchProxy?: AdvancedODataClientProxy,
    /**
     * auto fetch csrf token before broken operation
     */
    processCsrfToken: boolean = true
  ) {
    if (fetchProxy) {
      this.fetchProxy = fetchProxy;
    }
    if (!metadataUri) {
      throw new Error("metadata url required !");
    } else {
      this.metadataUri = metadataUri;
      // e.g https://c4c-system/sap/c4c/odata/v1/c4codata/
      this.odataEnd =
        join(slice(this.metadataUri.split("/"), 0, -1), "/") + "/";
      if (credential) {
        this.credential = credential;
      }
    }
    this.commonHeader = { ...this.commonHeader, ...headers };
    this.processCsrfToken = processCsrfToken;
  }

  /**
   * generate dynamic header
   */
  private async getHeaders() {
    var rt = { ...this.commonHeader };
    if (this.credential) {
      rt = {
        ...rt,
        ...GetAuthorizationPair(
          this.credential.username,
          this.credential.password
        )
      };
    }
    if (this.processCsrfToken) {
      rt["x-csrf-token"] = await this.getCsrfToken();
    }
    return rt;
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
      this.odataEnd = odataEnd;
    }
  }

  /**
   * fetch CSRF Token
   */
  private async getCsrfToken() {
    if (this.csrfToken) { return await this.csrfToken; }

    var config: RequestInit = {
      method: "GET",
      headers: { "x-csrf-token": "fetch" }
    };

    if (this.credential) {
      config.headers = {
        ...config.headers,
        ...GetAuthorizationPair(this.credential.username, this.credential.password)
      };
    }

    const { response: { headers } } = await this.fetchProxy(this.odataEnd, config);
    if (headers) {
      this.csrfToken = headers.get("x-csrf-token");
    } else {
      throw new Error("csrf token need the odata proxy give out headers!");
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
  private async requestUri<T = any>(uri: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", body?: any): Promise<PlainODataMultiResponse<T>> {
    let final_uri = uri;
    let config: RequestInit = { method, headers: await this.getHeaders() };

    // format body
    if (method !== "GET" && body) {
      if (typeof body !== "string") {
        config.body = JSON.stringify(body);
      } else {
        config.body = body;
      }
    }

    // request & response
    var res = await this.fetchProxy(final_uri, config);

    // one time retry if csrf token time expired
    if (this.processCsrfToken) {
      if (res.response.headers) {
        if (res.response.headers.get("x-csrf-token") === "Required") {
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
   * @param id entity uuid or compound key
   * @param queryParams query param, not work for single entity uri
   * @param method request method
   * @param entity C4C Entity instance
   */
  private async request<T = any>(
    collection: string, id?: any,
    queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any
  ) {
    let url = `${this.odataEnd}${collection}`;
    if (id) {
      url += this.formatIdString(id)

    }
    if (queryParams) {
      url = `${url}?${queryParams.toString()}`;
    }
    return this.requestUri<T>(url, queryParams, method, entity);
  }

  /**
   * format id part of url
   *
   * @param id
   */
  private formatIdString(id: any): string {
    var rt = ""
    switch (typeof id) {
      // for compound key like
      // Alphabetical_list_of_products(CategoryName='Beverages',Discontinued=false,ProductID=1,ProductName='Chai')
      case "object":
        const compoundId = Object.entries(id).map(kv => {
          const k = kv[0]
          const v = kv[1]
          switch (typeof v) {
            case "string":
              return `${k}='${v}'`
            case "number":
              return `${k}=${v}`
            case "boolean":
              return `${k}=${v}`
            default:
              // other type will be removed
              return ""
          }
        }).filter(v => v).join(",")
        rt = `(${compoundId})`
        break
      case "number":
        rt = `(${id})`
        break;
      case "string":
        rt = `('${id}')`
        break;
      case "undefined":
        break;
      default:
        throw new Error(`Not supported ObjectID type ${typeof id} for request`)
    }
    return rt
  }

  /**
   * new odata http request
   */
  public async newRequest<T>(options: ODataQueryRequest<T>): Promise<PlainODataMultiResponse<T>>;
  public async newRequest<T>(options: ODataWriteRequest<T>): Promise<PlainODataSingleResponse<T>>;
  public async newRequest<T>(options: ODataReadIDRequest<T>): Promise<PlainODataSingleResponse<T>>;
  public async newRequest(options: any) {
    return this.request(options.collection, options.id, options.params, options.method, options.entity)
  }

  /**
   * format batch request parameter
   */
  private async formatBatchRequests(requests: Array<Promise<BatchRequest>>) {
    const url = `${this.odataEnd}$batch`;

    const req: RequestInit = {
      method: "POST",
      headers: await this.getHeaders()
    };

    // format promised requests
    const r = await Promise.all(requests.map(async aBatchR => await aBatchR));
    const requestBoundaryString = v4();
    req.headers["Content-Type"] = `multipart/mixed; boundary=${requestBoundaryString}`;
    req.body = formatBatchRequest(r, requestBoundaryString);
    return { url, req }
  }

  /**
   * execute batch requests and get response
   *
   * @param requests batch request
   */
  public async execBatchRequests(requests: Array<Promise<BatchRequest>>): Promise<Array<ParsedResponse<PlainODataMultiResponse>>> {
    const { url, req } = await this.formatBatchRequests(requests);
    const { content, response: { headers } } = await this.fetchProxy(url, req);
    const responseBoundaryString = headers.get("Content-Type").split("=").pop();
    if (responseBoundaryString.length == 0) {
      // if boundary string empty, error here
    }
    return await parseMultiPartContent(content, responseBoundaryString);
  }

  public async newBatchRequest<T>(options: BatchRequestOptions<T>) {
    var { collection, method = "GET", id, withContentLength = false, params, entity } = options;
    if (this.forSAP) {
      // for SAP NetWeaver Platform OData, need content length header
      withContentLength = true;
    }
    var url = collection;
    var headers = Object.assign({}, this.commonHeader); // clone
    var rt: BatchRequest = { url, init: { method, headers, body: "" } };

    if (id) {
      url += this.formatIdString(id)
    }

    // READ OPERATION
    if (method === "GET" || method === "DELETE") {
      delete headers["Content-Type"];
      // other request don't need param
      if (params) {
        url = `${url}?${params.toString()}`;
      }
    }
    // WRITE OPERATION
    else {
      switch (typeof entity) {
        case "string":
          rt.init.body = entity;
          break;
        case "object":
          rt.init.body = JSON.stringify(entity);
          break;
        default:
          break;
      }

      if (withContentLength) {
        rt.init.headers["Content-Length"] = encodeURI(rt.init.body.toString()).length;
      }

    }

    rt.init.headers = headers;
    rt.url = url;

    return rt;
  }

}
