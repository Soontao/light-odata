import { ODataQueryParam } from './params';
import { ODataVersion } from './types_v4';

export type HTTPMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type ODataVariant = 'default' | 'c4c' | 'byd' | 'cap' | 'cpi'

export type AdvancedODataClientProxy = (url: string, init: RequestInit) => Promise<{
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
   * basic credential pair
   */
  credential?: Credential;
  /**
   * fetch proxy of all request
   */
  fetchProxy?: AdvancedODataClientProxy;
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

export interface ODataRequest<T = any> {
  collection: string, /** collection name */
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * PATCH for UPDATE
   * POST for CREATE
   * DELETE for delete
   */
  method?: HTTPMethod,
}


export interface ODataReadIDRequest<T> extends ODataRequest<T> {
  id?: any, /** object key in READ/UPDATE/DELETE */
}

export interface ODataQueryRequest<T> extends ODataRequest<T> {
  params?: ODataQueryParam, /** params in QUERY */
}

export interface ODataWriteRequest<T> extends ODataRequest<T> {
  entity?: Partial<T> /** data object in CREATE/UPDATE */
  id?: any;
}


export interface PlainODataResponse<E = any> {

  error?: { /** if error occured, node error will have value */
    code: string;
    message: {
      lang: string,
      value: string /** server error message */
    } & string
  }

  /**
   * context string
   *
   * @version 4.0.0
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

export type PlainODataSingleResponse<E = any> = {
  /**
   * @version 2.0.0
   */
  d?: {
    __count?: string; /** $inlinecount values */
    results: E;
    [key: string]: any;
  } & E;
} & E & PlainODataResponse<E>


export interface PlainODataMultiResponse<E = any> extends PlainODataResponse<E> {

  /**
   * @version 2.0.0
   */
  d?: {
    __count?: string; /** $inlinecount values */
    results: Array<E>; /** result list/object */
    [key: string]: any;
  };


  /**
   * values result
   *
   * @version 4.0.0
   */
  value?: Array<E>;

}

export interface Credential {
  username: string,
  password: string
}
