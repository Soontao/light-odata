import "isomorphic-fetch"
import { ODataQueryParam, HTTPMethod } from "./types";
import { split, slice, join } from "lodash";
import { GetAuthorizationPair } from "./util";


export class OData {

  private metadataUri: string
  private requestPrefix: string
  private credential: { username: string, password: string };
  private csrfToken: string
  private commonHeader: any = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "zh"
  }

  constructor(metadataUri: string, credential?: { username: string, password: string }, headers?: any) {
    if (!metadataUri || !metadataUri.endsWith("$metadata")) {
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
    }
  }

  async getCsrfToken() {
    const res = await fetch(this.requestPrefix, {
      method: "HEAD",
      headers: {
        "x-csrf-token": "fetch",
        ...this.commonHeader
      }
    });
    this.csrfToken = res.headers.get("x-csrf-token");
    return this.csrfToken;
  }

  async request(collection: string, id?: string, queryParams?: ODataQueryParam, method: HTTPMethod = "GET", entity?: any): Promise<Object> {
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
      url = `${url}('${id}')`
    }
    if (method !== "GET" && entity) {
      config.body = entity;
    }
    if (queryParams) { url += `?${queryParams.toString()}`; }
    const res = await fetch(url, config);
    const resBody = await res.json();
    return resBody;
  }

}
