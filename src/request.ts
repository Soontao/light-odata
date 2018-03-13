import { ODataQueryParam, HTTPMethod, Credential, PlainODataResponse } from "./types";
import { split, slice, join } from "lodash";
import { GetAuthorizationPair } from "./util";

/**
 * OData Client
 */
export class OData {

  private metadataUri: string;
  private odataEnd: string;
  private credential: Credential;
  private csrfToken: string = "";
  private commonHeader: { [headerName: string]: string } = {
    "Accept": "application/json",
    "Accept-Language": "zh",
    "Content-Type": "application/json",
  };
  private requestUrlRewrite: (url: string) => string = (s) => s;

  constructor(metadataUri: string, credential?: Credential, headers?: any, urlRewrite?: (string) => string) {
    if (!metadataUri) {
      throw new Error("metadataUrl losted")
    } else {
      this.metadataUri = metadataUri;
      // e.g https://c4c-system/sap/c4c/odata/v1/c4codata/
      this.odataEnd = join(slice(split(this.metadataUri, "/"), 0, -1), "/") + "/";
      this.commonHeader = { ...this.commonHeader, ...headers }
      if (credential) {
        this.credential = credential;
        this.commonHeader = {
          ...this.commonHeader,
          ...GetAuthorizationPair(this.credential.username, this.credential.password)
        }
      }
      if (urlRewrite) {
        this.requestUrlRewrite = urlRewrite;
      }
    }
  }

  private headers() {
    return {
      ...this.commonHeader,
      ...GetAuthorizationPair(this.credential.username, this.credential.password)
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

  public async getCsrfToken() {
    if (this.csrfToken) {
      return await this.csrfToken;
    }
    const res = await fetch(this.requestUrlRewrite(this.odataEnd), {
      method: "HEAD",
      headers: {
        "x-csrf-token": "fetch",
        ...this.headers()
      },
    });
    this.csrfToken = res.headers.get("x-csrf-token");
    return this.csrfToken;
  }

  public cleanCsrfToken() {
    if (this.csrfToken) { delete this.csrfToken; }
  }

  public async requestUri(uri: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", body?: any): Promise<PlainODataResponse> {
    const token = await this.getCsrfToken();
    let final_uri = uri;
    if (queryParams) {
      final_uri = `${final_uri}?${queryParams.toString()}`;
    }
    const config: RequestInit = {
      method,
      headers: {
        "x-csrf-token": token,
        ...this.headers(),
      },
    };
    if (method !== "GET" && body) {
      config.body = body;
    }
    const res = await fetch(this.requestUrlRewrite(final_uri), config);
    if (res.status === 401) {
      throw new Error("401, Unauthorized, check your creadential !");
    }
    if (res.json) {
      return res.json();
    } else {
      throw new Error("C4C client not receied json respose !");
    }
  }

  public async request(collection: string, id?: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any) {
    let url = `${this.odataEnd}${collection}`;
    if (id) { url += `('${id}')`; }
    return this.requestUri(url, queryParams, method, entity);
  }

}
