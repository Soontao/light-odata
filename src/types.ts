
import isObject from "@newdash/newdash-node/isObject";
import isArray from "@newdash/newdash-node/isArray";

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

export class LightODataSingleResult<T> {

  d: { results: T } = { results: undefined }

  static fromPlainObject = function <E>(object: PlainODataMultiResponse, type: { new(): E }) {
    const rt = new LightODataSingleResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }
    // c4c odata use d.results as response
    if (object.d && isObject(object.d.results)) {
      rt.d.results = LightODataEntity.fromPlainObject(object.d.results, type)
    }
    // standard odata use d as response entity
    else if (isObject(object.d)) {
      rt.d.results = LightODataEntity.fromPlainObject(object.d, type)
    }
    // throw erro fi
    else {
      throw new Error("Not acceptable response")
    }
    return rt;
  }

  static fromRequestResult = async function <T>(p: Promise<PlainODataMultiResponse>, t: { new(): T }) {
    return LightODataSingleResult.fromPlainObject(await p, t)
  }

}

export class LightODataResult<T> {

  d: { __count?: string; results: T[]; } = {
    results: []
  }

  static fromPlainObject = function <E>(object: PlainODataMultiResponse, type: { new(): E }) {
    const rt = new LightODataResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }

    if (object.d) {
      if (object.d.__count) {
        rt.d.__count = object.d.__count
      }
      if (isArray(object.d.results)) {
        rt.d.results = (object.d.results as Array<any>).map(
          e => LightODataEntity.fromPlainObject(e, type)
        )
      }
    } else {
      throw new Error("Not acceptable response")
    }

    return rt;
  }


  static fromRequestResult = async function <T>(p: Promise<PlainODataMultiResponse>, t: { new(): T }): Promise<LightODataResult<T>> {
    return LightODataResult.fromPlainObject(await p, t)
  }

}

export class LightODataEntity {

  __metadata: {
    uri: string,
    type: string,
    etag?: string
  }

  ObjectID: string

  ETag: Edm.DateTime

  ParentObjectID?: string

  /**
   * parse instance from plain object
   * @param o
   */
  static fromPlainObject = function <T>(o: any, t: { new(): T; }): T {
    return Object.assign(new t(), o);
  }

  static fromRequestResult = async function <T>(o: Promise<any>, t: { new(): T; }): Promise<T> {
    return LightODataEntity.fromPlainObject(await o, t)
  }

}

export interface DeferredNavigationProperty {
  __deferred: {
    uri: string
  }
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
