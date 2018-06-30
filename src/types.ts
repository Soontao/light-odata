import { concat, assign, map, join, isArray, isString, forEach } from "lodash";
const UrlSearchParam = require("url-search-params")

export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface PlainODataResponse {
  d?: {
    __count?: string;
    results: any[] | any;
  };
  error?: {
    code: string;
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

/**
 * OData filter builder
 */
export class ODataFilter {

  static newBuilder() {
    return new ODataFilter()
  }

  static newFilter() {
    return new ODataFilter()
  }

  private filterStr = "";

  /**
   * @param name filed name
   */
  field(name: string) {
    this.filterStr += name;
    return this;
  }

  fieldIn(name: string, values: string[]) {
    if (values) {
      forEach(values, (value, index, arr) => {
        this.field(name).eqString(value)
        if (index < (arr.length - 1)) {
          this.or()
        }
      });
    }
    return this;
  }

  eq(value) {
    this.filterStr += ` eq ${value}`;
    return this;
  }

  eqString(value: string) {
    this.filterStr += ` eq '${value}'`;
    return this;
  }

  ge(value) {
    this.filterStr += ` ge ${value}`;
    return this;
  }

  gt(value) {
    this.filterStr += ` gt ${value}`;
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

  /**
   * DEPRECATED
   * 
   * dont use this function
   * 
   * @param name 
   * @param start 
   * @param end 
   */
  inPeriod(name: string, start: Date, end: Date) {
    this.group(
      ODataFilter.newFilter()
        .gtDateTime(name, start)
        .and()
        .ltDateTime(name, end)
    )
    return this;
  }

  betweenDateTime(name: string, start: Date, end: Date) {
    if (start && end) {
      this.group(
        ODataFilter.newFilter()
          .gtDateTime(name, start)
          .and()
          .ltDateTime(name, end)
      )
    } else {
      throw new Error("You must give out the start and end date")
    }

    return this;
  }

  betweenDateTimeOffset(name: string, start: Date, end: Date) {
    if (start && end) {
      this.group(
        ODataFilter.newFilter()
          .gtDateTimeOffset(name, start)
          .and()
          .ltDateTimeOffset(name, end)
      )
    } else {
      throw new Error("You must give out the start and end date")
    }
    return this;
  }

  gtDateTime(name: string, date: Date) {
    this.field(name).gt(`datetime'${date.toISOString()}'`)
    return this
  }

  gtDateTimeOffset(name: string, date: Date) {
    this.field(name).gt(`datetimeoffset'${date.toISOString()}'`)
    return this
  }

  ltDateTime(name: string, date: Date) {
    this.field(name).lt(`datetime'${date.toISOString()}'`)
    return this
  }

  ltDateTimeOffset(name: string, date: Date) {
    this.field(name).lt(`datetimeoffset'${date.toISOString()}'`)
    return this
  }

  /**
   * AND expr
   * 
   * filter.field("A").eq("'a'").and().field("B").eq("'b").build() == "A eq 'a' and B eq 'b'"
   * 
   * filter.field("A").eq("'a'").and("B eq 'b'").build() == "A eq 'a' and (B eq 'b')"
   * 
   * @param filter 
   */
  and(filter?: string | ODataFilter) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) and (${filter.toString()})`;
    } else {
      this.filterStr += " and ";
    }
    return this;
  }

  or(filter?: string | ODataFilter) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) or (${filter.toString()})`;
    } else {
      this.filterStr += " or ";
    }
    return this;
  }

  group(filter: string | ODataFilter) {
    this.filterStr += `(${filter.toString()})`;
    return this;
  }

  toString() {
    return this.build();
  }

  build() {
    return this.filterStr;
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
  private $filter: string | ODataFilter
  private $top = 0
  private $select: string[] = []
  private $orderby: string
  private $format: "json" | "xml" = "json"
  private $search: string
  private $inlinecount: string
  private $expand: string[] = []

  /**
   * with $inlinecount value
   */
  inlinecount(inlinecount: boolean = false) {
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
  filter(filter: string | ODataFilter) {
    if (filter instanceof ODataFilter) {
      this.$filter = filter.build()
      return this
    } else if (typeof filter === "string") {
      this.$filter = filter
      return this
    } else {
      throw Error("ODataQueryParam.filter only accept string or ODataFilter type parameter")
    }

  }

  /**
   * skip first records
   * 
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
   * 
   * @param field 
   * @param order default desc
   */
  orderby(field: string, order: "asc" | "desc" = "desc") {
    this.$orderby = `${field} ${order}`
    return this
  }

  /**
   * set order by multi field
   * 
   * @param fields 
   */
  orderbyMulti(fields: ODataParamOrderField[]) {
    this.$orderby = join(map(fields, f => `${f.field} ${f.order || "desc"}`), ",")
    return this;
  }

  /**
   * result format, please keep it as json
   * 
   * @param format deafult json
   */
  format(format: "json" | "xml") {
    if (format === "json") {
      this.$format = format
    } else {
      throw new Error("c4codata dont support xml response")
    }
    return this
  }

  /**
   * full text search
   * 
   * default with fuzzy search
   * 
   * @param value 
   */
  search(value: string, fuzzy: boolean = true) {
    this.$search = fuzzy ? `%${value}%` : value
    return this
  }

  /**
   * expand navigation props
   * 
   * @param fields 
   * @param replace
   */
  expand(fields: string | string[], replace = false) {
    if (replace) {
      if (isString(fields)) {
        this.$expand = [fields]
      }
      if (isArray(fields)) {
        this.$expand = fields;
      }
    } else {
      this.$expand = concat(this.$expand, fields)
    }
    return this
  }


  toString(): string {
    let rt = new UrlSearchParam();
    if (this.$format) { rt.append("$format", this.$format); }
    if (this.$filter) { rt.append("$filter", this.$filter.toString()); }
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

export const ODataParam = ODataQueryParam;

export class C4CODataSingleResult<T> {

  d: { results: T } = { results: undefined }

  static fromPlainObject = function <E>(object: PlainODataResponse, type: { new(): E }) {
    const rt = new C4CODataSingleResult<E>()
    if (object.error) {
      throw new Error(object.error.message.value)
    }
    if (object.d && object.d.results) {
      rt.d.results = C4CEntity.fromPlainObject(object.d.results, type)
    } else {
      throw new Error("not accepted odata reseponse object")
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
      rt.d.results = object.d.results.map(e => C4CEntity.fromPlainObject(e, type))
    } else {
      throw new Error("not accepted odata reseponse object")
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

export interface ODataParamOrderField {
  /**
   * field name
   */
  field: string;

  /**
   * order asc or desc
   */
  order?: "asc" | "desc";
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