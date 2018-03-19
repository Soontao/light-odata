import * as UrlSearchParam from "url-search-params"
import { concat, assign, map, join } from "lodash";
import { OData } from ".";

export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface PlainODataResponse {
  d?: {
    __count?: string,
    results: any[] | any
  }
  error?: {
    code: string,
    message: {
      lang: string,
      value: string
    }
  }
}

export interface Credential {
  username: string,
  password: string
}

export class FilterBase {

  protected filter: ODataFilter

  toString() {
    return this.filter.toString()
  }

  build() {
    return this.filter.build();
  }
}

export class FilterField extends FilterBase {

  constructor(filter: ODataFilter) {
    super()
    this.filter = filter;
  }

  field(name) {
    this.filter.field(name)
    return this.filter.FilterExpr
  }


}

export class FilterAndOr extends FilterBase {

  constructor(filter: ODataFilter) {
    super()
    this.filter = filter;
  }


  and(filter?: string) {
    this.filter.and(filter)
    return this.filter.FilterField
  }

  or(filter?: string) {
    this.filter.or(filter)
    return this.filter.FilterField
  }

}

export class FilterExpr extends FilterBase {

  constructor(filter: ODataFilter) {
    super()
    this.filter = filter;
  }

  eq(value: string) {
    this.filter.eq(value)
    return this.filter.FilterAndOr
  }

  ge(value: string) {
    this.filter.ge(value)
  }

  le(value: string) {
    this.filter.le(value)
  }

  lt(value: string) {
    this.filter.lt(value)
  }

}

export class ODataFilter {

  static newBuilder() {
    return new ODataFilter().FilterField
  }

  FilterField: FilterField = new FilterField(this)

  FilterAndOr: FilterAndOr = new FilterAndOr(this)

  FilterExpr: FilterExpr = new FilterExpr(this)

  private filterStr = "";

  build() {
    return this.filterStr;
  }

  search(fields: string[] = [], search: string = "") {
    const v = join(map(fields, (f => `${f} eq '*${search}*'`)), " or ");
    if (this.filterStr) {
      this.and(v)
    } else {
      this.filterStr = v
    }
    return this;
  }

  field(name: string) {
    this.filterStr += name;
    return this;
  }

  eq(value) {
    this.filterStr += ` eq ${value}`;
    return this;
  }

  ge(value) {
    this.filterStr += ` ge ${value}`;
    return this;
  }

  le(value) {
    this.filterStr += ` le ${value}`;
    return this;
  }

  lt(value) {
    this.filterStr += ` lt ${value}`;
    return this;
  }

  and(filter?: string) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) and (${filter})`;
    } else {
      this.filterStr += " and ";
    }
    return this;
  }

  or(filter?: string) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) or (${filter})`;
    } else {
      this.filterStr += " or ";
    }
    return this;
  }

  toString() {
    return this.build();
  }

}

/**
 * OData Param Object
 * 
 * ref https://github.com/SAP/C4CODATAAPIDEVGUIDE
 */
export class ODataQueryParam {

  static newParam() {
    return new ODataQueryParam()
  }

  private $skip = 0
  private $filter: string | FilterBase
  private $top = 0
  private $select: string[] = []
  private $orderby: string
  private $format: "json" | "xml" = "json"
  private $search: string
  private $inlinecount = "allpages"

  /**
   * with $inlinecount value
   */
  private inlinecount(inlinecount: boolean = false) {
    if (inlinecount) {
      this.$inlinecount = "allpages"
    } else {
      delete this.$inlinecount
    }
    return this;
  }

  /**
   * filter
   * @param filter 
   */
  filter(filter: string | FilterBase) {
    this.$filter = filter
    return this
  }

  /**
   * skip first records
   * @param skip 
   */
  skip(skip: number) {
    this.$skip = skip
    return this
  }


  /**
   * limit result max records
   * 
   * @param top 
   */
  top(top: number) {
    this.$top = top
    return this
  }


  /**
   * select viewed fields
   * 
   * @param selects 
   */
  select(selects: string | string[]) {
    this.$select = concat(this.$select, selects)
    return this
  }

  /**
   * set order sequence
   * @param field 
   * @param order 
   */
  orderby(field: string, order: "asc" | "desc" = "desc") {
    this.$orderby = `${field} ${order}`
    return this
  }

  /**
   * result format, please keep it as json
   * @param format 
   */
  format(format: "json" | "xml") {
    this.$format = format
    return this
  }

  /**
   * full text search
   * @param value 
   */
  search(value: string, fuzzy: boolean = true) {
    this.$search = fuzzy ? `%${value}%` : value
    return this
  }

  /**
   * expand navigation props
   * @param fields 
   */
  expand(fields: string | string[]) {
    this.$expand = concat(this.$expand, fields)
    return this
  }

  /**
   * @type {string[]}
   */
  private $expand: string[] = []

  toString(): string {
    let rt = new UrlSearchParam();
    if (this.$filter) { rt.append("$filter", this.$filter.toString()); }
    if (this.$format) { rt.append("$format", this.$format); }
    if (this.$orderby) { rt.append("$orderby", this.$orderby); }
    if (this.$search) { rt.append("$search", this.$search); }
    if (this.$select && this.$select.length > 0) { rt.append("$select", this.$select); }
    if (this.$skip) { rt.append("$skip", this.$skip); }
    if (this.$top && this.$top > 0) { rt.append("$top", this.$top); }
    if (this.$expand && this.$expand.length > 0) { rt.append("$expand", this.$expand.join(",")); }
    if (this.$inlinecount) { rt.append("$inlinecount", this.$inlinecount) }
    return rt.toString();
  }
}

export class C4CODataSingleResult<T> {

  d: { results: T } = { results: undefined }

  static fromPlainObject = function <E>(object: PlainODataResponse, type: { new(): E }) {
    const rt = new C4CODataSingleResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }
    rt.d.results = C4CEntity.fromPlainObject(object.d.results, type)
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
    if (object.d.__count) {
      rt.d.__count = object.d.__count
    }
    rt.d.results = object.d.results.map(e => C4CEntity.fromPlainObject(e, type))
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

export class DeferredNavigationProperty {
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