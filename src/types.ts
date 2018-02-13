import UrlSearchParam from "url-search-params"

export type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";


export class FilterBase {
  private filter: ODataFilter

  toString() {
    return this.filter.toString()
  }
}

export class FilterField {

  constructor(filter: ODataFilter) {
    this.filter = filter;
  }

  private filter: ODataFilter;

  field(name) {
    this.filter.field(name)
    return this.filter.FilterExpr
  }

  build() {
    return this.filter.build();
  }

}

export class FilterAndOr {
  constructor(filter: ODataFilter) {
    this.filter = filter;
  }

  private filter: ODataFilter


  and(filter?: string) {
    this.filter.and(filter)
    return this.filter.FilterField
  }

  or(filter?: string) {
    this.filter.or(filter)
    return this.filter.FilterField
  }

  build() {
    return this.filter.build();
  }

}

export class FilterExpr {

  constructor(filter: ODataFilter) {
    this.filter = filter;
  }

  private filter: ODataFilter

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

export class ODataQueryParam {

  $filter: string | ODataFilter

  /**
   * Skips the first entries and then returns the rest
  */
  $skip = 0

  /**
   * Top entries
   *
   */
  $top = 30

  /**
   * select attributes
   */
  $select: string[]

  /**
   * First performs an orderby on the Field
   */
  $orderby: string

  /**
   * entries in JSON format with server side paging
   *
   */
  $format: "json" | "xml" = "json"

  /**
   * @type {string}
   */
  $search: string

  /**
   * @type {string[]}
   */
  $expand: string[]

  toString() {
    let rt = new UrlSearchParam();
    if (this.$filter) { rt.append("$filter", this.$filter.toString()); }
    if (this.$format) { rt.append("$format", this.$format); }
    if (this.$orderby) { rt.append("$orderby", this.$orderby); }
    if (this.$search) { rt.append("$search", this.$search); }
    if (this.$select) { rt.append("$select", this.$select); }
    if (this.$skip) { rt.append("$skip", this.$skip); }
    if (this.$top) { rt.append("$top", this.$top); }
    if (this.$expand) { rt.append("$expand", this.$expand.join(",")); }
    return rt.toString();
  }
}

export class C4CODataResult<T> {
  d: { results: T[] }
}
