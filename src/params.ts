import concat from "@newdash/newdash/concat";
import isArray from "@newdash/newdash/isArray";
import join from "@newdash/newdash/join";
import uniq from "@newdash/newdash/uniq";
import { Transformation } from "./tranformation";
import { ValidationError } from "./errors";
import { ODataFilter, ParamBoundedFilter } from "./filter";
import type { ODataVariant, ODataVersion } from "./types";
import { SearchParams } from "./util";


export interface ODataParamOrderField<T = any> {

  /**
   * field name
   */
  field: keyof T;

  /**
   * order asc or desc
   */
  order?: "asc" | "desc";

}


/**
 * OData System Query Options
 *
 * like `$filter`, `$format`, `$top` ....
 *
 */
export class SystemQueryOptions<T = any> {

  /**
   * @deprecated
   * @returns
   */
  public static newParam<T = any>() {
    return new SystemQueryOptions<T>();
  }

  public static newOptions<T = any>() {
    return new SystemQueryOptions<T>();
  }

  constructor() {
    this.#customParams = new SearchParams();
  }

  private $skip: number;

  private $filter: string | ODataFilter;

  private $top: number;

  private $select: string[] = [];

  private $orderby: string;

  private $format: "json" | "xml";

  private $search: string;

  private $inlinecount: string;

  private $expand: string[] = [];

  private $count = false;

  private $apply: string;

  #customParams: SearchParams;

  /**
   * with $inlinecount value
   *
   * @version 2.0.0
   */
  public inlinecount(inlinecount = false) {
    if (inlinecount) {
      this.$inlinecount = "allpages";
    } else {
      delete this.$inlinecount;
    }
    return this;
  }

  /**
   *
   * count items in odata v4
   *
   * @param count
   *
   * @version 4.0.0
   */
  public count(count = true) {
    this.$count = count;
    return this;
  }

  /**
   * apply filter for query
   *
   * @param filter
   */

  public filter(): ParamBoundedFilter;

  public filter(filter: string | ODataFilter): this;

  public filter(filter?: any): any {
    if (filter === undefined) {
      return new ParamBoundedFilter(this);
    }
    if (filter instanceof ODataFilter) {
      this.$filter = filter.build();
      return this;
    } else if (typeof filter === "string") {
      this.$filter = filter;
      return this;
    }

    throw new ValidationError("ODataQueryParam.filter only accept string or ODataFilter type parameter");
  }

  /**
   * skip first records
   *
   * @param skip
   */
  public skip(skip: number) {
    this.$skip = skip;
    return this;
  }


  /**
   * limit result max records
   *
   * @param top
   */
  public top(top: number) {
    this.$top = top;
    return this;
  }


  /**
   * select viewed fields
   *
   * @param selects
   */
  public select(selects: keyof T | Array<keyof T>) {
    this.$select = concat(this.$select, selects as any);
    return this;
  }

  /**
   * set order sequence
   *
   * @param fieldOrOrders
   * @param order default desc, disabled when first params is array
   */
  public orderby(
    fieldOrOrders: keyof T | ODataParamOrderField<T>[],
    order: "asc" | "desc" = "desc"
  ) {
    if (isArray(fieldOrOrders)) {
      return this.orderbyMulti(fieldOrOrders);
    }
    this.$orderby = `${String(fieldOrOrders)} ${order}`;
    return this;

  }

  /**
   * set order by multi field
   *
   * @param fields
   */
  public orderbyMulti(fields: ODataParamOrderField<T>[] = []) {
    this.$orderby = join(fields.map((f) => `${String(f.field)} ${f.order || "desc"}`), ",");
    return this;
  }

  /**
   * result format, please keep it as json
   *
   * @param format deafult json
   */
  public format(format: "json" | "xml") {
    if (format === "json") {
      this.$format = format;
    } else {
      throw new ValidationError("light-odata doesnt support xml response");
    }
    return this;
  }

  /**
   * full text search
   *
   * default with fuzzy search, SAP system or OData V4 only
   *
   * @param value
   * @version 4.0.0
   */
  public search(value: string, fuzzy = true): this {
    this.$search = fuzzy ? `%${value}%` : value;
    return this;
  }

  /**
   * apply data aggregation
   *
   * @experimental
   *
   * @see [OData Extension for Data Aggregation Version 4.0](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html)
   * @param expression
   * @returns
   */
  public apply(expression: Array<Transformation>): this;

  public apply(expression: Transformation): this;

  public apply(expression: Array<string>): this;

  public apply(expression: string): this;

  public apply(expression: any): this {
    if (isArray(expression)) {
      this.$apply = expression
        .map(exp => exp instanceof Transformation ? exp.toString() : String(exp))
        .join("/"); // Transformation Sequences
    }
    else {
      if (expression instanceof Transformation) {
        this.$apply = expression.toString();
      }
      else {
        // fallback, support complex customize scenario
        this.$apply = expression;
      }
    }
    return this;
  }

  /**
   * expand navigation props
   *
   * @param fields
   * @param replace
   */
  public expand(fields: keyof T | Array<keyof T>, replace = false): this {
    if (replace) {
      if (typeof fields == "string") {
        this.$expand = [fields];
      } else if (isArray(fields)) {
        // @ts-ignore
        this.$expand = fields;
      }
    } else {
      this.$expand = concat(this.$expand, fields as any);
    }
    return this;
  }

  /**
   * add addtional custom properties in final url query
   *
   * @param key addtional url query parameter key
   * @param value value
   * @returns
   *
   * @example
   *
   * ```ts
   * OData.newParam().
   * ```
   */
  public custom(key: any, value: any) {
    this.#customParams.append(key, value);
    return this;
  }


  /**
   * convert param object to query string
   *
   * @param version
   * @param variant
   * @returns
   */
  public toString(version: ODataVersion = "v2", variant: ODataVariant = "default"): string {

    const params = new SearchParams();
    params.putAll(this.#customParams);

    if (this.$format) { params.append("$format", this.$format); }
    if (this.$filter) { params.append("$filter", this.$filter.toString()); }
    if (this.$orderby) { params.append("$orderby", this.$orderby); }

    if (this.$select && this.$select.length > 0) { params.append("$select", join(uniq(this.$select), ",")); }
    if (this.$skip) { params.append("$skip", this.$skip.toString()); }
    if (this.$top && this.$top > 0) { params.append("$top", this.$top.toString()); }
    if (this.$expand && this.$expand.length > 0) { params.append("$expand", this.$expand.join(",")); }

    switch (version) {
      case "v2":
        if (this.$inlinecount) { params.append("$inlinecount", this.$inlinecount); }
        break;
      case "v4":
        if (this.$count) { params.append("$count", "true"); }
        if (this.$apply) { params.append("$apply", this.$apply); }
        break;
      default:
        break;
    }

    if (this.$search) {

      switch (variant) {
        case "sap-gateway":
          params.append("search", this.$search);
          break;
        default:
          params.append("$search", this.$search);
          break;
      }

    }

    return params.toString();
  }

}

export const ODataParam = SystemQueryOptions;

/**
 * odata system query options
 */
export const ODataQueryParam = SystemQueryOptions;

/**
 *
 * @deprecated
 * @returns
 */
export function param() {
  return ODataParam.newParam();
}

/**
 * create new system options
 *
 * @returns
 */
export function systemOptions() {
  return SystemQueryOptions.newOptions();
}
