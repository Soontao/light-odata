import { ODataFilter } from "./filter";

import { isString, map, isArray, join, concat } from "lodash";

import UrlSearchParam from "@ungap/url-search-params";

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
   * @param fieldOrOrders 
   * @param order default desc, disabled when first params is array
   */
  orderby(
    fieldOrOrders: string | ODataParamOrderField[],
    order: "asc" | "desc" = "desc"
  ) {
    if (isArray(fieldOrOrders)) {
      return this.orderbyMulti(fieldOrOrders)
    } else {
      this.$orderby = `${fieldOrOrders} ${order}`
      return this
    }
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
    if (this.$select && this.$select.length > 0) { rt.append("$select", join(this.$select, ",")); }
    if (this.$skip) { rt.append("$skip", this.$skip); }
    if (this.$top && this.$top > 0) { rt.append("$top", this.$top); }
    if (this.$expand && this.$expand.length > 0) { rt.append("$expand", this.$expand.join(",")); }
    if (this.$inlinecount) { rt.append("$inlinecount", this.$inlinecount) }
    return rt.toString();
  }
}

export const ODataParam = ODataQueryParam;