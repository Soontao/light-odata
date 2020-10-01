import { BatchRequestV4, ParsedResponseV4 } from './batch';
import { EntitySet } from './entityset';
import { ODataFilter } from './filter';
import { ODataQueryParam } from './params';
import {
  BatchRequestOptions,
  Credential, ODataActionRequest, ODataFunctionRequest,
  ODataQueryRequest, ODataReadIDRequest, ODataWriteRequest, UnwrapBatchRequest, UnwrapPromise
} from './types';

export type ODataVersion = 'v2' | 'v4';

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
  '@odata.context'?: string;

  /**
   * total count
   */
  '@odata.count'?: number;

  '@odata.id'?: string;

  '@odata.etag'?: string;

  '@odata.editLink'?: string;

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

export interface ODataV4 {

  /**
   * get Entity Set by entityset name
   *
   * @param entitySetName the name of entity set, you can get it from metadata
   *
   */
  getEntitySet<T = any>(entitySetName: string): EntitySet<T>;

  /**
   * Set OData Client Http Basic credential
   *
   * @param credential
   */
  setCredential(credential: Credential): void;

  /**
   * setODataEndPath
   *
   * e.g. https://tenant.c4c.saphybriscloud.cn/sap/c4c/odata/v1/c4codata/
   */
  setODataEndPath(odataEnd: string): void;

  /**
   * get odata version
   */
  getVersion(): ODataVersion;

  /**
   * new odata http request
   */
  newRequest<T>(options: ODataQueryRequest<T>): Promise<PlainODataMultiResponseV4<T>>;
  newRequest<T>(options: ODataWriteRequest<T>): Promise<PlainODataSingleResponseV4<T>>;
  newRequest<T>(options: ODataReadIDRequest<T>): Promise<PlainODataSingleResponseV4<T>>;
  newRequest(options: ODataFunctionRequest): Promise<PlainODataResponseV4>;
  newRequest(options: ODataActionRequest): Promise<PlainODataResponseV4>;

  /**
   * create new filter
   *
   * @alias OData.newFilter
   */
  newFilter(): ODataFilter

  /**
   * create new param
   *
   * @alias OData.newParam
   */
  newParam(): ODataQueryParam


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
