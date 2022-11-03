import { Mutex } from "@newdash/newdash/functional/Mutex";
import { JsonBatchResponseBundle } from "@odata/parser/lib/builder/batch";
import { RequestInit } from "node-fetch";
import { v4 } from "uuid";
import { BatchRequest, formatBatchRequest, formatBatchRequestForOData401, parseMultiPartContent } from "./batch";
import { EntitySet } from "./entityset";
import { FrameworkError, ODataServerError, ValidationError } from "./errors";
import { ODataFilter } from "./filter";
import { ClientCredentialsOAuthClient } from "./oauth";
import { ODataParam, SystemQueryOptions } from "./params";
import { Transformation } from "./tranformation";
import {
  BatchRequestOptions, BatchRequests,
  BatchResponses, Credential, FetchProxy, HTTPMethod,
  ODataActionImportRequest,
  ODataActionRequest, ODataFunctionImportRequest, ODataFunctionRequest, ODataKeyPredicate, ODataNewOptions,
  ODataQueryRequest, ODataReadIDRequest, ODataVariant, ODataVersion, ODataWriteRequest, PlainODataMultiResponse,
  PlainODataResponse, PlainODataSingleResponse
} from "./types";
import { ODataV4NewOptions, ODataValueJSONReplacer, SAPNetweaverOData } from "./types";
import { ODataV4 } from "./types_v4";
import { formatId, GetAuthorizationPair } from "./util";
import { DEFULAT_HEADERS, defaultProxy, S_X_CSRF_TOKEN, S_CONTENT_TYPE } from "./request";

/**
 * OData Client
 */
export class OData {

  /**
   * odata service path, like /sap/c4c/odata/v1/c4codata/
   */
  private serviceEndpoint: string;

  /**
   * http basic credential
   */
  private credential: Credential;

  /**
   * oauth client for client credential flow
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
  private commonHeader: { [headerName: string]: string; } = DEFULAT_HEADERS;

  private fetchProxy = defaultProxy;

  private processCsrfToken = false;

  private csrfTokenName: string = S_X_CSRF_TOKEN;

  private variant: ODataVariant = "default";

  private version: ODataVersion = "v2";

  private lock: Mutex = new Mutex();

  /**
   * OData client builder
   *
   * @param options config options
   */
  public static New(options: ODataV4NewOptions): ODataV4;

  public static New(options: ODataNewOptions): OData;

  public static New(options: any): any {
    const rt = new OData(
      options.serviceEndpoint ?? options.metadataUri,
      options.credential,
      options.commonHeaders,
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
   * new odata query options
   *
   * @deprecated
   */
  static newParam<T = any>(): SystemQueryOptions {
    return ODataParam.newParam<T>();
  }

  /**
   * new odata query options
   */
  static newOptions<T = any>() {
    return ODataParam.newOptions<T>();
  }

  /**
   * new filter
   */
  static newFilter<T = any>(): ODataFilter {
    return ODataFilter.newFilter<T>();
  }

  /**
   * new transformation
   *
   * @returns
   */
  static newTransformation() {
    return Transformation.newTransformation();
  }

  /**
   * OData
   *
   * @deprecated please use static method `OData.New` to create instance
   * @private
   */
  private constructor(
    serviceEndpoint: string,
    credential?: Credential,
    headers: any = {},
    fetchProxy?: FetchProxy,
    /**
     * auto fetch csrf token before broken operation
     */
    processCsrfToken = false
  ) {
    if (fetchProxy) {
      this.fetchProxy = fetchProxy;
    }
    if (serviceEndpoint === undefined) {
      throw new ValidationError("metadata url required !");
    }

    if (serviceEndpoint.endsWith("$metadata")) {
      serviceEndpoint = serviceEndpoint.slice(0, serviceEndpoint.length - 9);
    }

    // e.g https://c4c-system/sap/c4c/odata/v1/c4codata/
    this.serviceEndpoint = serviceEndpoint;

    if (credential !== undefined) {
      this.credential = credential;
      if (credential.tokenUrl !== undefined &&
        credential.clientId !== undefined &&
        credential.clientSecret !== undefined) {
        this.oauthClient = new ClientCredentialsOAuthClient(
          credential.tokenUrl,
          credential.clientId,
          credential.clientSecret,
          credential.tokenRetrieveType,
          credential.scope
        );
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
          ...(await this.oauthClient.getHeader())
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
  public setODataEndPath(odataEndpoint: string): void {
    if (odataEndpoint !== undefined) {
      this.serviceEndpoint = odataEndpoint;
      if (!this.serviceEndpoint.endsWith("/")) {
        this.serviceEndpoint += "/";
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

      const { response: { headers } } = await this.fetchProxy(this.serviceEndpoint, config);
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
   * @param systemOptions odata query params
   * @param method HTTP method
   * @param body request content
   */
  private async requestUri<T = any>(
    uri: string,
    systemOptions?: SystemQueryOptions,
    method: HTTPMethod = "GET",
    body?: any
  ): Promise<PlainODataMultiResponse<T>> {
    const finalUri = uri;
    const config: RequestInit = { method, headers: await this.getHeaders() };

    // format body
    if (method !== "GET" && body) {
      if (typeof body !== "string") {
        config.body = JSON.stringify(body, ODataValueJSONReplacer);
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
   * @param systemOptions query param, not work for single entity uri
   * @param method request method
   * @param entity odata Entity instance
   */
  private async _executeDataOperation<T = any>(
    collection: string,
    id?: any,
    systemOptions?: SystemQueryOptions,
    method: HTTPMethod = "GET",
    entity?: any
  ) {
    let url = `${this.serviceEndpoint}${collection}`;
    if (id) {
      url += this.formatIdString(id);
    }
    const query = systemOptions?.toString?.(this.version);
    if (query !== undefined && query.length > 0) {
      url = `${url}?${query}`;
    }
    return this.requestUri<T>(url, systemOptions, method, entity);
  }

  async actionImport(actionName: string, parameters?: any, params: SystemQueryOptions = this.newParam()) {
    return this.newRequest({
      method: "POST",
      params,
      parameters,
      actionName
    });
  }

  async functionImport(functionName: string, parameters?: any, params: SystemQueryOptions = this.newParam()) {

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
    return formatId(key);
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


  private async _executeActionOrFunction(options: ODataActionRequest);

  private async _executeActionOrFunction(options: ODataFunctionRequest);

  private async _executeActionOrFunction(options: ODataFunctionImportRequest);

  private async _executeActionOrFunction(options: ODataActionImportRequest);

  private async _executeActionOrFunction(options: any) {

    let url = `${this.serviceEndpoint}`; // create new string
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
    const url = `${this.serviceEndpoint}$batch`;

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
   * execute batch requests in OData `V4.01` Json format, and get response
   *
   * this feature is experimental, use it on your own risk.
   *
   * @experimental
   * @param requests
   */
  public async execBatchRequestsJson<T extends BatchRequests = any>(requests: T): BatchResponses<T> {
    // TODO: verify odata version here

    const reqs = await Promise.all(requests);
    const body = formatBatchRequestForOData401(reqs);
    const url = `${this.serviceEndpoint}$batch`;
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
  public newFilter<T = any>() {
    return OData.newFilter<T>();
  }

  /**
   * create new system query options
   *
   * @deprecated
   * @alias OData.newParam
   */
  public newParam<T = any>() {
    return OData.newParam<T>();
  }

  /**
   * create new system query options
   *
   * @returns
   */
  public newOptions<T = any>() {
    return OData.newOptions<T>();
  }

  public newTransformation() {
    return Transformation.newTransformation();
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
      delete headers[S_CONTENT_TYPE];
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
