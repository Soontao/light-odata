import { ODataQueryParam, HTTPMethod, C4CODataResult, Credential, PlainODataResponse } from "./types";
import { split, slice, join } from "lodash";
import { GetAuthorizationPair } from "./util";


export class OData {

  private metadataUri: string
  private odataEnd: string
  private credential: Credential
  private csrfToken: string = ""
  private commonHeader: { [headerName: string]: string } = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "zh"
  }
  private requestUrlRewrite: (url: string) => string = s => s

  constructor(metadataUri: string, credential?: Credential, headers?: any, urlRewrite?: (string) => string) {
    if (!metadataUri) {
      throw new Error("metadataUrl losted")
    } else {
      this.metadataUri = metadataUri;
      this.odataEnd = join(slice(split(this.metadataUri, "/"), 0, -1), "/");
      this.commonHeader = { ...this.commonHeader, ...headers }
      if (credential) {
        this.credential = credential;
        this.commonHeader = {
          ...this.commonHeader,
          ...GetAuthorizationPair(this.credential.username, this.credential.password)
        }
      }
      if (urlRewrite) {
        this.requestUrlRewrite = urlRewrite
      }
    }
  }


  setCredential(credential: Credential) {
    this.credential = credential;
  }

  async getCsrfToken() {
    if (this.csrfToken) {
      return await this.csrfToken
    }
    const res = await fetch(this.requestUrlRewrite(this.odataEnd), {
      method: "HEAD",
      headers: {
        "x-csrf-token": "fetch",
        ...this.commonHeader
      }
    });
    this.csrfToken = res.headers.get("x-csrf-token");
    return this.csrfToken;
  }

  cleanCsrfToken() {
    if (this.csrfToken) delete this.csrfToken
  }

  async requestUri(uri: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", body?: any): Promise<PlainODataResponse> {
    const token = await this.getCsrfToken();
    let final_uri = uri
    if (queryParams) {
      final_uri += queryParams.toString()
    }
    let config: RequestInit = {
      method,
      headers: {
        "x-csrf-token": token,
        ...this.commonHeader
      }
    };
    if (method !== "GET" && body) {
      config.body = body;
    }
    const res = await fetch(this.requestUrlRewrite(final_uri), config)
    if (res.status == 401) {
      throw new Error("401, Unauthorized, check your creadential !")
    }
    if (res.json) {
      return res.json()
    } else {
      throw new Error("C4C client not receied json respose !")
    }
  }

  async request(collection: string, id?: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any) {
    let url = `${this.odataEnd}/${collection}`
    let token = await this.getCsrfToken();
    if (id) { url += `('${id}')` }
    return this.requestUri(url, queryParams, method, entity)
  }

}
