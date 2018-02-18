import "isomorphic-fetch"
import { ODataQueryParam, HTTPMethod, C4CODataResult } from "./types";
import { split, slice, join } from "lodash";
import { GetAuthorizationPair } from "./util";


export class OData {

  private metadataUri: string
  private requestPrefix: string
  private credential: { username: string, password: string };
  private csrfToken: string = ""
  private commonHeader: any = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "zh"
  }
  private requestUrlRewrite: (url: string) => string = s => s

  constructor(metadataUri: string, credential?: { username: string, password: string }, headers?: any, urlRewrite?: (string) => string) {
    if (!metadataUri) {
      throw new Error("metadataUrl losted")
    } else {
      this.metadataUri = metadataUri;
      this.requestPrefix = join(slice(split(this.metadataUri, "/"), 0, -1), "/");
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

  async getCsrfToken() {
    const res = await fetch(this.requestUrlRewrite(this.requestPrefix), {
      method: "HEAD",
      headers: {
        "x-csrf-token": "fetch",
        ...this.commonHeader
      }
    });
    this.csrfToken = res.headers.get("x-csrf-token");
    return this.csrfToken;
  }

  async requestUri(uri: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", body?: any): Promise<any | string> {
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
    if (res.json) {
      return res.json()
    } else {
      return res.text()
    }
  }

  async request(collection: string, id?: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any): Promise<Object | string> {
    let url = `${this.requestPrefix}/${collection}`
    let token = await this.getCsrfToken();
    let config: RequestInit = {
      method,
      headers: {
        "x-csrf-token": token,
        ...this.commonHeader
      }
    };
    if (id) {
      url += `('${id}')`
    }
    if (method !== "GET" && entity) {
      config.body = entity;
    }
    if (queryParams) { url += `?${queryParams.toString()}`; }
    url = this.requestUrlRewrite(url)
    const res = await fetch(url, config);
    const content: any | string = await res.json ? res.json() : res.text()
    return content;
  }

}
