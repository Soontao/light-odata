/* eslint-disable max-len */
import { RequestInit } from "node-fetch";
import { BatchRequest, ParsedResponse } from "./batch";
import { TokenRetrieveType } from "./oauth";
import { SystemQueryOptions } from "./params";
import { FormatODataDateTimedate } from "./util";

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

export interface ODataNewOptionsOld {
  /**
   * metadata url
   *
   * @deprecated please try to use serviceEndpoint
   * @example `https://odata.org/V2/Northwind/Northwind.svc/$metadata`
   */
  metadataUri: string;
}

export interface ODataNewOptionsNew {
  /**
   *
   * odata service endpoint
   *
   * @example `https://odata.org/V2/Northwind/Northwind.svc/`
   */
  serviceEndpoint: string;
}

export interface ODataNewOptionsCommon {

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
   * common headers will be sent for each requests
   */
  commonHeaders?: { [headerName: string]: string };

  /**
   * the header key of csrf token
   *
   * @default 'x-csrf-token'
   */
  csrfTokenName?: string;

  /**
   * service variant, some behaviors will be changed by this option
   */
  variant?: ODataVariant;

  /**
   * odata version
   *
   * @default 'v2'
   */
  version?: ODataVersion;
}

export type ODataNewOptions = (ODataNewOptionsNew | ODataNewOptionsOld) & ODataNewOptionsCommon

export type ODataV4NewOptions = ODataNewOptions & {
  version: "v4"
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
   * OData system query options
   */
  params?: SystemQueryOptions;
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
   * the `entity set` name of data service
   */
  collection?: string,
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * PATCH for UPDATE
   * PUT for overrite
   * POST for CREATE
   * DELETE for delete
   */
  method?: HTTPMethod,
  params?: SystemQueryOptions,
}

export type ODataKeyPredicate = string | boolean | number | null | ODataValueObject | {
  [propertyKey: string]: ODataKeyPredicate
};

export interface ODataReadIDRequest extends ODataRequest {
  id: ODataKeyPredicate, /** object key in READ/UPDATE/DELETE */
  params?: SystemQueryOptions,
}

export interface ODataQueryRequest extends ODataRequest {
  params?: SystemQueryOptions, /** params in QUERY */
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

  /**
   * traget scope
   */
  scope?: string;
}

/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
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
export abstract class ODataValueObject<T = any> {

  protected rawValue: T;

  protected constructor(rawValue: T) {
    this.rawValue = rawValue;
  }

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
export class RawString extends ODataValueObject<string> {

  public static from(str: string) {
    return new RawString(str);
  }

  toString(): string {
    return this.rawValue;
  }

}

export const RawValue = RawString;

export abstract class ODataDateBase extends ODataValueObject {

  protected _uriEncoded: boolean;

  protected constructor(date: Date, uriEncoded = true) {
    if (date instanceof Date) {
      super(date);
    } else {
      super(new Date(date));
    }
    this._uriEncoded = uriEncoded;
  }

  public toJSONString(): string {
    return FormatODataDateTimedate(this.rawValue);

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
    let inner: string = this.rawValue.toISOString().substring(0, 19);
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
    let inner: string = this.rawValue.toISOString();
    if (this._uriEncoded) {
      inner = encodeURIComponent(inner);
    }
    return `datetimeoffset'${inner}'`;
  }

}

export class Guid extends RawValue { }

export class EdmString extends ODataValueObject<string> {

  public static from(str: string): EdmString {
    return new EdmString(str);
  }

  public toString(): string {
    return `'${this.rawValue}'`;
  }

  public toJSONString(): string {
    return this.rawValue;
  }

}

export const EdmV2 = {
  DateTime: ODataDateTime,
  DateTimeOffset: ODataDateTimeOffset,
  RawString,
  Guid,
  String: EdmString,
};
