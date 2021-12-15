import { RequestInit, Response } from "node-fetch";
import { BatchRequest, ParsedResponse } from "./batch";
import { ODataQueryParam } from "./params";
import { ODataVersion } from "./types_v4";

export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";

export type ODataVariant = "default" | "c4c" | "byd" | "cap" | "cpi" | "@odata/server" | "sap-gateway"

export const SAPNetweaverOData: Readonly<Array<ODataVariant>> = ["c4c", "byd", "sap-gateway"] as const;

export type FetchProxy = (url: string, init: RequestInit) => Promise<{
  /**
   * parsed body content
   */
  content: any;
  /**
   * original response object
   */
  response: Response;
}>;

export interface ODataNewOptions {
  /**
   * metadata url
   */
  metadataUri: string;
  /**
   * credential configuration, basic/oauth (client credentials)
   */
  credential?: Credential;
  /**
   * fetch proxy of all request
   */
  fetchProxy?: FetchProxy;
  /**
   * auto process csrf token of c4c
   */
  processCsrfToken?: boolean;
  /**
   * for SAP OData
   * @deprecated
   */
  forSAP?: boolean;

  /**
   * service variant
   */
  variant?: ODataVariant;

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
  entity?: Partial<T>;
  /**
   * SAP OData need Content-Length but standard reject it
   */
  withContentLength?: boolean;
}

export interface ODataRequest {
  collection?: string, /** collection name */
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * PATCH for UPDATE
   * POST for CREATE
   * DELETE for delete
   */
  method?: HTTPMethod,
  params?: ODataQueryParam,
}


export interface ODataReadIDRequest extends ODataRequest {
  id: any, /** object key in READ/UPDATE/DELETE */
  params?: ODataQueryParam,
}

export interface ODataQueryRequest extends ODataRequest {
  params?: ODataQueryParam, /** params in QUERY */
}

export interface ODataWriteRequest<T> extends ODataRequest {
  entity?: Partial<T> /** data object in CREATE/UPDATE */
  id?: any;
  method: HTTPMethod
}

export interface ODataActionRequest extends ODataRequest {
  actionName: string;
  payload?: any;
  id: any;
}

export interface ODataFunctionRequest extends ODataRequest {
  functionName: string;
  payload?: any;
  id: any;
}

export interface ODataActionImportRequest extends ODataRequest {
  actionName: string;
  parameters?: { [key: string]: any };
}

export interface ODataFunctionImportRequest extends ODataRequest {
  functionName: string;
  parameters?: { [key: string]: any };
}


export interface PlainODataResponse {

  error?: { /** if error occured, node error will have value */
    code: string;
    message: {
      lang: string,
      value: string /** server error message */
    }
  }
  d?: any;

}

export type BatchPlainODataResponse<E = any> = PlainODataResponse & {
  d?: {
    __count?: string; /** $inlinecount values */
    results?: Array<E>;
  } & E;
}

export type PlainODataSingleResponse<E = any> = {

  /**
   * @version 2.0.0
   */
  d?: {
    __count?: string; /** $inlinecount values */
  } & E;

} & PlainODataResponse


export interface PlainODataMultiResponse<E = any> extends PlainODataResponse {

  d?: {
    __count?: string; /** $inlinecount values */
    results: Array<E>; /** result list/object */
  };

}

export interface Credential {
  username?: string;
  password?: string;
  /**
   * oauth client id
   */
  clientId?: string;
  /**
   * oauth client secret
   */
  clientSecret?: string;
  /**
   * oauth token url
   */
  tokenUrl?: string;
}

/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
export type DeepPartial<T> = {
  [P in keyof T]?:
  T[P] extends Array<infer U> ?
    Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ?
      ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};

/**
 * unwrap Promise Type
 */
export type UnwrapPromise<T> = T extends PromiseLike<infer U> ? U : T

/**
 * unwrap batch request
 */
export type UnwrapBatchRequest<T> = T extends BatchRequest<infer U> ? U : T


/**
 * unwrap batch request
 */
export type UnwrapParsedResponse<T> = T extends ParsedResponse<infer U> ? U : T


export type BatchRequests = Array<Promise<BatchRequest>>

export type BatchResponses<T> = Promise<{ [K in keyof T]: ParsedResponse<UnwrapBatchRequest<UnwrapPromise<T[K]>>> }>
