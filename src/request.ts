import attempt from "@newdash/newdash/attempt";
import { Mutex } from "@newdash/newdash/functional/Mutex";
import join from "@newdash/newdash/join";
import slice from "@newdash/newdash/slice";
import startsWith from "@newdash/newdash/startsWith";
import { JsonBatchResponseBundle } from "@odata/parser/lib/builder/batch";
import { RequestInit } from "node-fetch";
import { v4 } from "uuid";
import { ODataValueObject } from "./types";
import { BatchRequest, formatBatchRequest, formatBatchRequestForOData401, parseMultiPartContent } from "./batch";
import { EntitySet } from "./entityset";
import { FrameworkError, ODataServerError, ValidationError } from "./errors";
import { ODataFilter } from "./filter";
import { ClientCredentialsOAuthClient } from "./oauth";
import { ODataParam, ODataQueryParam } from "./params";
import {
  BatchRequestOptions, BatchRequests,
  BatchResponses, Credential, FetchProxy, HTTPMethod,
  ODataActionImportRequest,
  ODataActionRequest, ODataFunctionImportRequest, ODataFunctionRequest, ODataNewOptions,
  ODataQueryRequest, ODataReadIDRequest, ODataVariant, ODataWriteRequest, PlainODataMultiResponse,
  PlainODataResponse, PlainODataSingleResponse, SAPNetweaverOData
} from "./types";
import { ODataV4, ODataVersion } from "./types_v4";
import { GetAuthorizationPair } from "./util";
import { ODataKeyPredicate } from "./types";

const S_X_CSRF_TOKEN = "x-csrf-token";

const S_CONTENT_TYPE = "Content-Type";

// @ts-ignore
const defaultProxy: FetchProxy = async (url: string, init?: RequestInit) => {
  // @ts-ignore
  const res = await fetch(url, init);

  let content: any = await res.text();

  if (res.headers.has(S_CONTENT_TYPE) && startsWith(res.headers.get(S_CONTENT_TYPE), "application/json")) {
    const jsonResult = attempt(JSON.parse, content);
    // supress error
    if (!(jsonResult instanceof Error)) {
      content = jsonResult;
    }
  }

  return {
    content,
    response: res
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
  private serviceRoot: string;

  /**
   * http basic credential
   */
  private credential: Credential;

  /**
   * oauth client
   */
  private oauthClient: ClientCredentialsOAuthClient;

  /**
   * internal csrf token
   */
  private csrfToken = "";

  /**
   * dont direct use this object
   *
   * use client.getHeaders()
   *
   */
  private commonHeader: { [headerName: string]: string } = {
    "Accept": "application/json",
    [S_CONTENT_TYPE]: "application/json"
  };

  private fetchProxy = defaultProxy;

  private processCsrfToken = false;

  private csrfTokenName: string = S_X_CSRF_TOKEN;

  private variant: ODataVariant = "default";

  private version: ODataVersion = "v2";

  private lock: Mutex = new Mutex();

  /**
   * alternative constructor
   *
   * @param options config options
   */
  public static New(options: ODataNewOptions): OData {
    const rt = new OData(
      options.metadataUri,
      options.credential,
      undefined,
      undefined,
      options.fetchProxy,
      options.processCsrfToken
    );
    rt.version = options.version ?? "v2";
    rt.variant = options.variant ?? "default";
    // force process csrf token
    if (SAPNetweaverOData.includes(rt.variant)) {
      rt.processCsrfToken = true;
      // ref https://cxwiki.sap.com/pages/viewpage.action?pageId=511350333
      // use compatibility mode for c4c/byd
      rt.commonHeader["odata-v2-strict-json-format"] = "true";
    }
    rt.csrfTokenName = options.csrfTokenName ?? S_X_CSRF_TOKEN;
    return rt;
  }

  /**
   * create odata client instance for odata v4
   *
   * @param options
   */
  static New4(options: ODataNewOptions): ODataV4 {
    options.version = "v4";
    // @ts-ignore
    return OData.New(options);
  }

  /**
   * new odata query param
   */
  static newParam(): ODataQueryParam {
    return ODataParam.newParam();
  }

  /**
   * new filter
   */
  static newFilter(): ODataFilter {
    return ODataFilter.newFilter();
  }

  /**
   * OData
   *
   * @deprecated please use static method create instance
   * @private
   */
  private constructor(
    metadataUri: string,
    credential?: Credential,
    headers: any = {},
    /**
     * deprecated, DO NOT use it
     */
    urlRewrite?: (string) => string,
    fetchProxy?: FetchProxy,
    /**
     * auto fetch csrf token before broken operation
     */
    processCsrfToken = false
  ) {
    if (fetchProxy) {
      this.fetchProxy = fetchProxy;
    }
    if (metadataUri === undefined) {
      throw new ValidationError("metadata url required !");
    } else {
      this.metadataUri = metadataUri;
      // e.g https://c4c-system/sap/c4c/odata/v1/c4codata/
      this.serviceRoot =
        `${join(slice(this.metadataUri.split("/"), 0, -1), "/")}/`;
      if (credential) {
        this.credential = credential;
        if (credential.tokenUrl && credential.clientId && credential.clientSecret) {
          this.oauthClient = new ClientCredentialsOAuthClient(
            credential.tokenUrl,
            credential.clientId,
            credential.clientSecret,
          );
        }
      }
    }
    this.commonHeader = { ...this.commonHeader, ...headers };
    this.processCsrfToken = processCsrfToken;
  }

  /**
   * generate dynamic header
   */
  private async getHeaders() {
    let rt = { ...this.commonHeader };
    if (this.credential) {

      if (this.credential.username !== undefined) {
        rt = {
          ...rt,
          ...GetAuthorizationPair(this.credential.username, this.credential.password)
        };
      } else if (this.oauthClient) {
        rt = {
          ...rt,
          ... (await this.oauthClient.getHeader())
        };
      }

    }
    if (this.processCsrfToken) {
      rt[this.csrfTokenName] = await this.getCsrfToken();
    }
    return rt;
  }

  /**
   * getEntitySet
   *
   * @param entitySetName the name of entity set, you can get it from metadata
   *
   */
  public getEntitySet<T = any>(entitySetName: string): EntitySet<T> {
    return new EntitySet(entitySetName, this);
  }

  /**
   * Set OData Client Http Basic credential
   *
   * @param credential
   */
  public setCredential(credential: Credential): void {
    this.credential = credential;
  }

  /**
   * setODataEndPath
   *
   * e.g. https://tenant.c4c.saphybriscloud.cn/sap/c4c/odata/v1/c4codata/
   */
  public setODataEndPath(odataEnd: string): void {
    if (odataEnd !== undefined) {
      this.serviceRoot = odataEnd;
      if (!this.serviceRoot.endsWith("/")) {
        this.serviceRoot += "/";
      }
    }
  }

  public getVersion(): ODataVersion {
    return this.version;
  }

  /**
   * fetch CSRF Token
   *
   * @param withCache set to `false` if you want to force to retrieve the refresh csrf token
   * @returns
   */
  public async getCsrfToken(withCache = true) {
    return this.lock.use(async () => {

      if (withCache && this.csrfToken !== undefined && this.csrfToken !== null && this.csrfToken?.length > 0) {
        return this.csrfToken;
      }

      const config: RequestInit = {
        method: "GET",
        headers: { [this.csrfTokenName]: "fetch" }
      };

      if (this.credential) {
        config.headers = {
          ...config.headers,
          ...GetAuthorizationPair(this.credential.username, this.credential.password)
        };
      }

      const { response: { headers } } = await this.fetchProxy(this.serviceRoot, config);
      if (headers) {
        this.csrfToken = headers.get(this.csrfTokenName);
      } else {
        throw new FrameworkError("csrf token need the odata proxy give out headers!");
      }
      return this.csrfToken;
    });
  }

  public cleanCsrfToken(): void {
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
  private async requestUri<T = any>(
    uri: string,
    queryParams?: ODataQueryParam,
    method: HTTPMethod = "GET",
    body?: any
  ): Promise<PlainODataMultiResponse<T>> {
    const finalUri = uri;
    const config: RequestInit = { method, headers: await this.getHeaders() };

    // format body
    if (method !== "GET" && body) {
      if (typeof body !== "string") {
        config.body = JSON.stringify(body);
      } else {
        config.body = body;
      }
    }

    // request & response
    let res = await this.fetchProxy(finalUri, config);

    // one time retry if csrf token time expired
    if (this.processCsrfToken === true) {
      if (res?.response?.headers?.get?.(this.csrfTokenName)?.toUpperCase() === "Required".toUpperCase()) {
        config.headers[this.csrfTokenName] = await this.getCsrfToken(false); // force refresh
        res = await this.fetchProxy(finalUri, config);
      }
    }

    const { content } = res;

    return content;

  }

  /**
   * odata request
   *
   * @param collection CollectionName
   * @param id entity uuid or compound key
   * @param queryParams query param, not work for single entity uri
   * @param method request method
   * @param entity odata Entity instance
   */
  private async _executeDataOperation<T = any>(
    collection: string,
    id?: any,
    queryParams?: ODataQueryParam,
    method: HTTPMethod = "GET",
    entity?: any
  ) {
    let url = `${this.serviceRoot}${collection}`;
    if (id) {
      url += this.formatIdString(id);
    }
    const query = queryParams?.toString?.(this.version);
    if (query !== undefined && query.length > 0) {
      url = `${url}?${query}`;
    }
    return this.requestUri<T>(url, queryParams, method, entity);
  }

  async actionImport(actionName: string, parameters?: any, params: ODataQueryParam = this.newParam()) {
    return this.newRequest({
      method: "POST",
      params,
      parameters,
      actionName
    });
  }

  async functionImport(functionName: string, parameters?: any, params: ODataQueryParam = this.newParam()) {

    return await this.newRequest({
      parameters,
      params,
      method: "GET",
      functionName
    });
  }

  /**
   * convert the odata key predicate object/value to string
   *
   * @param key
   *
   * @example
   *
   * ```ts
   * this.formatIdString(1) // => String('(1)')
   * this.formatIdString({UUID:'xxx'}) // => String('(UUID='xxx')')
   * ```
   */
  private formatIdString(key: ODataKeyPredicate): string {
    let rt = "";
    switch (typeof key) {
      // for compound key like
      // Alphabetical_list_of_products(CategoryName='Beverages',Discontinued=false,ProductID=1,ProductName='Chai')
      case "object":
        if (key instanceof ODataValueObject) {
          return key.toString();
        }
        // for plain object
        const compoundId = Object.entries(key).map((kv) => {
          const k = kv[0];
          const v = kv[1];
          switch (typeof v) {
            case "string":
              return `${k}='${v}'`;
            case "number":
              return `${k}=${v}`;
            case "boolean":
              return `${k}=${v}`;
            default:
              if (v === null) {
                return `${k}=null`;
              }
              if (v instanceof ODataValueObject) {
                return `${k}=${v.toString()}`;
              }
              // other type will be removed
              return "";
          }
        }).filter((v) => v).join(",");
        rt = `(${compoundId})`;
        break;
      case "number":
        rt = `(${key})`;
        break;
      case "string":
        if (this.variant === "cap") {
          rt = `(${key})`; // for cap framework, id string should remove singlequote
        } else {
          rt = `('${key}')`;
        }
        break;
      case "undefined":
        break;
      default:
        throw new FrameworkError(`Not supported ObjectID type ${typeof key} for request`);
    }
    return rt;
  }

  /**
   * new odata http request
   */
  public async newRequest<T = any>(options: ODataQueryRequest): Promise<PlainODataMultiResponse<T>>;

  public async newRequest<T = any>(options: ODataWriteRequest<T>): Promise<PlainODataSingleResponse<T>>;

  public async newRequest<T = any>(options: ODataReadIDRequest): Promise<PlainODataSingleResponse<T>>;

  public async newRequest(options: ODataFunctionRequest): Promise<PlainODataResponse>;

  public async newRequest(options: ODataActionRequest): Promise<PlainODataResponse>;

  public async newRequest(options: ODataFunctionImportRequest): Promise<PlainODataResponse>;

  public async newRequest(options: ODataActionImportRequest): Promise<PlainODataResponse>;

  public async newRequest(options: any): Promise<any> {
    if (options.actionName || options.functionName) {
      return this._executeActionOrFunction(options);
    }
    return this._executeDataOperation(options.collection, options.id, options.params, options.method, options.entity);
  }


  private async _executeActionOrFunction(options: ODataActionRequest)

  private async _executeActionOrFunction(options: ODataFunctionRequest)

  private async _executeActionOrFunction(options: ODataFunctionImportRequest)

  private async _executeActionOrFunction(options: ODataActionImportRequest)

  private async _executeActionOrFunction(options: any) {

    let url = `${this.serviceRoot}`; // create new string
    let method: HTTPMethod = "GET";

    options.params = options.params ?? this.newParam();

    /**
     * is bounded operation, means the operation maybe affected to a specific instance
     */
    const isBoundedOperation = ((options.collection !== undefined) && (options.id !== undefined));

    const actionName = options["actionName"];
    const functionName = options["functionName"];

    const isAction = (typeof actionName === "string");
    const isFunction = (typeof functionName === "string");

    if (isAction && isFunction) {
      throw new ValidationError(`'actionName' and 'functionName' can not be fillled in same time.`);
    }

    if (!isAction && !isFunction) {
      throw new ValidationError(`must provide 'actionName' or 'functionName'.`);
    }

    // if is bound operation, add the collection and key here
    if (isBoundedOperation) {
      url += `${options.collection}`;
      url += this.formatIdString(options.id);
    }

    if (!url.endsWith("/")) { url += "/"; }

    if (isFunction) {
      url += `${functionName}`;
      method = "GET";

      switch (this.version) {
        case "v2":
          if (options.parameters !== undefined) {
            // convert function parameters to params custom params
            options.params = options.params ?? this.newParam();
            Object
              .entries(options.parameters)
              .forEach(([key, value]) => {
                options.params.custom(key, value);
              });
          }
          break;
        case "v4":
          if (options.parameters !== undefined) {
            url += this.formatIdString(options.parameters);
          } else {
            url += "()";
          }
          break;
        default:
          break;

      }
    }

    if (isAction) {
      url += `${actionName}`;
      method = "POST";
    }

    // append query to uru
    const query = options?.params?.toString?.(this.version);

    if (query !== undefined && query.length > 0) {
      url += `?${query}`;
    }

    if (isAction) {
      // action with payload
      return this.requestUri(url, undefined, method, options.parameters ?? {});
    }

    if (isFunction) {
      return this.requestUri(url, undefined, method);
    }

  }

  /**
   * format batch request parameter
   */
  private async formatBatchRequests(requests: Array<Promise<BatchRequest>>) {
    const url = `${this.serviceRoot}$batch`;

    const req: RequestInit = {
      method: "POST",
      headers: await this.getHeaders()
    };

    // format promised requests
    const r = await Promise.all(requests.map(async (aBatchR) => await aBatchR));
    const requestBoundaryString = v4();
    req.headers["Content-Type"] = `multipart/mixed; boundary=${requestBoundaryString}`;
    req.body = formatBatchRequest(r, requestBoundaryString);
    return { url, req };
  }

  /**
   * execute batch requests and get response
   *
   * @param requests batch request
   */
  public async execBatchRequests(requests: BatchRequests): BatchResponses<BatchRequests> {
    const { url, req } = await this.formatBatchRequests(requests);
    const { content, response: { headers } } = await this.fetchProxy(url, req);
    const responseBoundaryString = headers.get("Content-Type").split("=").pop();
    if (responseBoundaryString.length == 0) {
      // if boundary string empty, error here
    }
    // @ts-ignore
    return await parseMultiPartContent(content, responseBoundaryString);
  }

  /**
   * execute batch requests in OData V4.01 Json format, and get response
   *
   * @param requests
   */
  public async execBatchRequestsJson<T extends BatchRequests = any>(requests: T): BatchResponses<T> {

    // TO DO, verify odata version here

    const reqs = await Promise.all(requests);
    const body = formatBatchRequestForOData401(reqs);
    const url = `${this.serviceRoot}$batch`;
    const headers = await this.getHeaders();
    const response = await this.fetchProxy(url, { method: "POST", body: JSON.stringify(body), headers });
    const responseBody: JsonBatchResponseBundle = response.content;
    if (responseBody["error"]) {
      throw new ODataServerError(responseBody["error"]["message"] || "Unknown server error");
    }
    const rt = [];

    responseBody.responses?.forEach((responseItem) => {
      rt.push({
        json: async () => responseItem.body,
        text: async () => JSON.stringify(responseItem.body),
        headers: responseItem.headers,
        status: responseItem.status,
        statusText: undefined,
        raw: responseItem
      });
    });

    // @ts-ignore
    return rt;

  }

  /**
   * create new filter
   *
   * @alias OData.newFilter
   */
  public newFilter() {
    return OData.newFilter();
  }

  /**
   * create new param
   *
   * @alias OData.newParam
   */
  public newParam() {
    return OData.newParam();
  }

  public async newBatchRequest<T>(options: BatchRequestOptions<T>) {
    let { withContentLength = false } = options;
    const { collection, method = "GET", id, params, entity } = options;
    if (SAPNetweaverOData.includes(this.variant)) {
      // for SAP NetWeaver Platform OData, need content length header
      withContentLength = true;
    }
    let url = collection;
    const headers = Object.assign({}, this.commonHeader); // clone
    const rt: BatchRequest<T> = { url, init: { method, headers, body: "" } };

    if (id) {
      url += this.formatIdString(id);
    }

    // READ OPERATION
    if (method === "GET" || method === "DELETE") {
      delete headers["Content-Type"];
      // other request don't need param
      if (params) {
        url = `${url}?${params.toString(this.version)}`;
      }
    }
    // WRITE OPERATION
    else {

      rt.init.body = entity;

      if (withContentLength) {
        rt.init.headers["Content-Length"] = encodeURI(rt.init.body.toString()).length;
      }

    }

    rt.init.headers = headers;
    rt.url = url;
    rt.options = options;
    return rt;
  }

}
