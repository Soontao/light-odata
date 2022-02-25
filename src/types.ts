import { RequestInit, Response } from "node-fetch";
import { FormatODataDateTimedate } from "./util";
import { BatchRequest, ParsedResponse } from "./batch";
import { TokenRetrieveType } from "./oauth";
import { ODataQueryParam } from "./params";

export type ODataVersion = "v2" | "v4";

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
   * the header key of csrf token, default value is 'x-csrf-token'
   */
  csrfTokenName?: string;
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
  /**
   * the entity set name of data service
   */
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

export type ODataKeyPredicate = string | boolean | number | null | ODataValueObject | {
  [propertyKey: string]: ODataKeyPredicate
};

export interface ODataReadIDRequest extends ODataRequest {
  id: ODataKeyPredicate, /** object key in READ/UPDATE/DELETE */
  params?: ODataQueryParam,
}

export interface ODataQueryRequest extends ODataRequest {
  params?: ODataQueryParam, /** params in QUERY */
}

export interface ODataWriteRequest<T> extends ODataRequest {
  entity?: Partial<T> /** data object in CREATE/UPDATE */
  id?: ODataKeyPredicate;
  method: HTTPMethod
}

export interface ODataActionRequest extends ODataRequest {
  actionName: string;
  payload?: any;
  id: ODataKeyPredicate;
}

export interface ODataFunctionRequest extends ODataRequest {
  functionName: string;
  payload?: any;
  id: ODataKeyPredicate;
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
  /**
   * basic auth user name
   */
  username?: string;
  /**
   * basic password
   */
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
  /**
   * oauth token retrieve type
   */
  tokenRetrieveType?: TokenRetrieveType;
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

/**
 * Edm value
 */
export abstract class ODataValueObject {
  /**
   * to OData Uri string
   */
  abstract toString(): string;

  /**
   * to OData Json format value string
   *
   * @returns
   */
  public toJSONString(): string {
    return this.toString();
  }

}

export const ODataValueJSONReplacer = (key, value) => {
  if (value instanceof ODataValueObject) {
    return value.toJSONString();
  }
  return value;
};

/**
 * RawString
 */
export class RawString extends ODataValueObject {

  private str: string;

  private constructor(str: string) {
    super();
    this.str = str;
  }

  public static from(str: string) {
    return new RawString(str);
  }

  toString(): string {
    return this.str;
  }

}

export abstract class ODataDateBase extends ODataValueObject {

  protected _date: Date;

  protected _uriEncoded: boolean;

  protected constructor(date: Date, uriEncoded = true) {
    super();
    if (date instanceof Date) {
      this._date = date;
    } else {
      this._date = new Date(date);
    }
    this._uriEncoded = uriEncoded;
  }

  public toJSONString(): string {
    return FormatODataDateTimedate(this._date);
  }

}

/**
 * Edm.DateTime
 */
export class ODataDateTime extends ODataDateBase {

  /**
   *
   * @param date date object
   * @param uriEncoded encode date string with `encodeURIComponent`, default is `true`
   * @returns
   */
  public static from(date: Date, uriEncoded?: boolean): ODataDateTime {
    return new ODataDateTime(date, uriEncoded);
  }

  public toString(): string {
    let inner: string = this._date.toISOString().substring(0, 19);
    if (this._uriEncoded) {
      inner = encodeURIComponent(inner);
    }
    return `datetime'${inner}'`;
  }


}

/**
 * Edm.DateTimeOffset
 */
export class ODataDateTimeOffset extends ODataDateBase {

  /**
   *
   * @param date date object
   * @param uriEncoded encode date string with `encodeURIComponent`, use it if you requires
   * @returns
   */
  public static from(date: Date, uriEncoded?: boolean): ODataDateTimeOffset {
    return new ODataDateTimeOffset(date, uriEncoded);
  }

  public toString(): string {
    let inner: string = this._date.toISOString();
    if (this._uriEncoded) {
      inner = encodeURIComponent(inner);
    }
    return `datetimeoffset'${inner}'`;
  }

}

export const EdmV2 = {
  DateTime: ODataDateTime,
  DateTimeOffset: ODataDateTimeOffset,
  RawString,
};
