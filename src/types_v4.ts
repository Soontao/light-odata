import type { BatchRequestV4, ParsedResponseV4 } from "./batch";
import type { SystemQueryOptions } from "./params";
import { OData } from "./odata";
import type {
  BatchRequestOptions, ODataActionImportRequest,
  ODataActionRequest, ODataFunctionImportRequest, ODataFunctionRequest,
  ODataQueryRequest, ODataReadIDRequest,
  ODataWriteRequest,
  UnwrapBatchRequest, UnwrapPromise
} from "./types";
import { EdmString, Guid, ODataValueObject, RawString } from "./types";


export interface PlainODataResponseV4 {

  error?: { /** if error occured, node error will have value */
    code: string;
    message: {
      lang: string,
      value: string /** server error message */
    } & string
  }

  /**
   * context string
   */
  "@odata.context"?: string;

  /**
   * total count
   */
  "@odata.count"?: number;

  "@odata.id"?: string;

  "@odata.etag"?: string;

  "@odata.editLink"?: string;

}

export type BatchPlainODataResponseV4<E = any> = PlainODataResponseV4 & {

  value?: Array<E>

} & E

export type PlainODataSingleResponseV4<E = any> = E & PlainODataResponseV4


export type PlainODataMultiResponseV4<E = any> = PlainODataResponseV4 & {

  /**
   * values result list
   */
  value?: Array<E>;

}

export interface ODataV4 extends OData {

  /**
   * get odata version
   */
  getVersion(): "v4";

  /**
   * create new odata http request
   */
  newRequest<T>(options: ODataQueryRequest): Promise<PlainODataMultiResponseV4<T>>;
  /**
   * create new odata http request
   */
  newRequest<T>(options: ODataWriteRequest<T>): Promise<PlainODataSingleResponseV4<T>>;
  /**
   * create new odata http request
   */
  newRequest<T>(options: ODataReadIDRequest): Promise<PlainODataSingleResponseV4<T>>;
  /**
   * create new odata http request
   */
  newRequest(options: ODataFunctionRequest): Promise<PlainODataResponseV4>;
  /**
   * create new odata http request
   */
  newRequest(options: ODataActionRequest): Promise<PlainODataResponseV4>;
  /**
   * create new odata http request
   */
  newRequest(options: ODataFunctionImportRequest): Promise<PlainODataResponseV4>;
  /**
   * create new odata http request
   */
  newRequest(options: ODataActionImportRequest): Promise<PlainODataResponseV4>;

  functionImport(functionName: string, parameters?: any, params?: SystemQueryOptions): Promise<PlainODataResponseV4>;
  actionImport(actionName: string, parameters?: any, params?: SystemQueryOptions): Promise<PlainODataResponseV4>;

  /**
   * create batch request (will not perform)
   *
   * @param options
   */
  newBatchRequest<T>(options: BatchRequestOptionsV4<T>): Promise<BatchRequestV4>;

  /**
   * execute batch requests and get response
   *
   * @param requests batch request
   *
   */
  execBatchRequests<T extends BatchRequestsV4 = any>(requests: T): BatchResponsesV4<T>


  /**
   * execute batch requests in OData `V4.01` JSON format, and get the response
   *
   * @param requests
   */
  execBatchRequestsJson<T extends BatchRequestsV4 = any>(requests: T): BatchResponsesV4<T>

}

export type BatchRequestsV4 = Array<Promise<BatchRequestV4>>

export type BatchResponsesV4<T> = Promise<{ [K in keyof T]: ParsedResponseV4<UnwrapBatchRequest<UnwrapPromise<T[K]>>> }>

export interface BatchRequestOptionsV4<T> extends BatchRequestOptions<T> {
  /**
  * odata-json-format-v4.01
  * request id
  */
  requestId?: string;
  /**
   * odata-json-format-v4.01
   * atomicityGroup
   */
  atomicityGroup?: string;
  /**
   * odata-json-format-v4.01
   * inner headers
   */
  headers?: Record<string, string>;
  /**
   * odata-json-format-v4.01
   * dependsOn
   */
  dependsOn?: Array<string>;
}

/**
 * date object for odata v4
 *
 * @version 4.0
 */
export abstract class ODataDateBase extends ODataValueObject {

  protected constructor(date: Date | string | number) {
    if (date instanceof Date) {
      super(date);
    }
    else {
      super(new Date(date));
    }
  }

}

/**
 * Edm.DateTime
 *
 * @version 4.0
 */
export class ODataDateTimeOffset extends ODataDateBase {

  public static from(date: Date): ODataDateTimeOffset {
    return new ODataDateTimeOffset(date);
  }

  public toString(): string {
    return this.rawValue.toISOString();
  }

}

/**
 * @version 4.0
 */
export class ODataDate extends ODataDateBase {

  public static from(date: Date): ODataDate {
    return new ODataDate(date);
  }

  toString(): string {
    return this.rawValue.toISOString().split("T")[0];
  }

}


export const EdmV4 = {
  RawString,
  DateTimeOffset: ODataDateTimeOffset,
  Date: ODataDate,
  Guid,
  String: EdmString,
};
