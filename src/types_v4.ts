import { BatchRequest, ParsedResponse } from './batch';
import { EntitySet } from './entityset';
import { ODataQueryParam } from './params';
import { BatchRequestOptions, ODataQueryRequest, ODataReadIDRequest, ODataWriteRequest } from './types';

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

export type BatchPlainODataResponse<E = any> = PlainODataResponseV4 & {

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

  /**
   * create new param
   *
   * @alias OData.newParam
   */
  newParam(): ODataQueryParam;


  /**
   * create batch request (will not perform)
   *
   * @param options
   */
  newBatchRequest<T>(options: BatchRequestOptions<T>): Promise<BatchRequest>;

  /**
   * execute batch requests and get response
   *
   * @param requests batch request
   *
   */
  execBatchRequests(requests: Array<Promise<BatchRequest>>): Promise<Array<ParsedResponse<PlainODataResponseV4>>>

}
