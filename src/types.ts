
import { isObject, assign, isArray } from "lodash";

export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface PlainODataResponse {
  d?: {
    __count?: string; /** $inlinecount values */
    results: any | Array<any>; /** result list/object */
    [key: string]: any;
  };
  error?: { /** if error occured, node error will have value */
    code: string;
    message: {
      lang: string,
      value: string /** server error message */
    }
  }
}

export interface Credential {
  username: string,
  password: string
}

export class C4CODataSingleResult<T> {

  d: { results: T } = { results: undefined }

  static fromPlainObject = function <E>(object: PlainODataResponse, type: { new(): E }) {
    const rt = new C4CODataSingleResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }
    // c4c odata use d.results as response
    if (object.d && isObject(object.d.results)) {
      rt.d.results = C4CEntity.fromPlainObject(object.d.results, type)
    }
    // standard odata use d as response entity
    else if (isObject(object.d)) {
      rt.d.results = C4CEntity.fromPlainObject(object.d, type)
    }
    // throw erro fi 
    else {
      throw new Error("Not acceptable response")
    }
    return rt;
  }

  static fromRequestResult = async function <T>(p: Promise<PlainODataResponse>, t: { new(): T }) {
    return C4CODataSingleResult.fromPlainObject(await p, t)
  }

}

export class C4CODataResult<T> {

  d: { __count?: string; results: T[]; } = {
    results: []
  }

  static fromPlainObject = function <E>(object: PlainODataResponse, type: { new(): E }) {
    const rt = new C4CODataResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }

    if (object.d) {
      if (object.d.__count) {
        rt.d.__count = object.d.__count
      }
      if (isArray(object.d.results)) {
        rt.d.results = (object.d.results as Array<any>).map(
          e => C4CEntity.fromPlainObject(e, type)
        )
      }
    } else {
      throw new Error("Not acceptable response")
    }

    return rt;
  }


  static fromRequestResult = async function <T>(p: Promise<PlainODataResponse>, t: { new(): T }): Promise<C4CODataResult<T>> {
    return C4CODataResult.fromPlainObject(await p, t)
  }

}

export class C4CEntity {

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
    return assign(new t(), o);
  }

  static fromRequestResult = async function <T>(o: Promise<any>, t: { new(): T; }): Promise<T> {
    return C4CEntity.fromPlainObject(await o, t)
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