export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";

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

declare global {
  module Edm {
    type String = string
    type Guid = string
    type DateTime = string
    type DateTimeOffset = string
    type Boolean = boolean
    type Decimal = number
    /**
     * base64 string
     */
    type Binary = string
  }
}
