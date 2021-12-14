import concat from '@newdash/newdash/concat';
import isArray from '@newdash/newdash/isArray';
import join from '@newdash/newdash/join';
import uniq from '@newdash/newdash/uniq';
import { ValidationError } from './errors';
import { ODataFilter } from './filter';
import { ODataVersion } from './types_v4';
import { SearchParams } from './util';


export interface ODataParamOrderField<T = any> {

  /**
   * field name
   */
  field: keyof T;

  /**
   * order asc or desc
   */
  order?: 'asc' | 'desc';

}


/**
 * OData Param Object
 *
 * ref https://github.com/SAP/C4CODATAAPIDEVGUIDE
 */
export class ODataQueryParam<T = any> {

  static newParam(): ODataQueryParam {
    return new ODataQueryParam();
  }

  constructor() {
    this._customParams = new SearchParams();
  }

  private $skip: number;
  private $filter: string | ODataFilter;
  private $top: number;
  private $select: string[] = [];
  private $orderby: string;
  private $format: 'json' | 'xml';
  private $search: string;
  private $inlinecount: string;
  private $expand: string[] = [];
  private $count = false;

  private _customParams: SearchParams;


  /**
   * with $inlinecount value
   *
   * @version 2.0.0
   */
  inlinecount(inlinecount = false): ODataQueryParam {
    if (inlinecount) {
      this.$inlinecount = 'allpages';
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
  count(count = true): ODataQueryParam {
    this.$count = count;
    return this;
  }

  /**
   * apply filter for query
   *
   * @param filter
   */
  filter(filter: string | ODataFilter) {
    if (filter instanceof ODataFilter) {
      this.$filter = filter.build();
      return this;
    } else if (typeof filter === 'string') {
      this.$filter = filter;
      return this;
    }
    throw new ValidationError('ODataQueryParam.filter only accept string or ODataFilter type parameter');
  }

  /**
   * skip first records
   *
   * @param skip
   */
  skip(skip: number) {
    this.$skip = skip;
    return this;
  }


  /**
   * limit result max records
   *
   * @param top
   */
  top(top: number) {
    this.$top = top;
    return this;
  }


  /**
   * select viewed fields
   *
   * @param selects
   */
  select(selects: keyof T | Array<keyof T>) {
    this.$select = concat(this.$select, selects as any);
    return this;
  }

  /**
   * set order sequence
   *
   * @param fieldOrOrders
   * @param order default desc, disabled when first params is array
   */
  orderby(
    fieldOrOrders: keyof T | ODataParamOrderField<T>[],
    order: 'asc' | 'desc' = 'desc'
  ) {
    if (isArray(fieldOrOrders)) {
      return this.orderbyMulti(fieldOrOrders);
    }
    this.$orderby = `${fieldOrOrders} ${order}`;
    return this;

  }

  /**
   * set order by multi field
   *
   * @param fields
   */
  orderbyMulti(fields: ODataParamOrderField<T>[] = []) {
    this.$orderby = join(fields.map((f) => `${f.field} ${f.order || 'desc'}`), ',');
    return this;
  }

  /**
   * result format, please keep it as json
   *
   * @param format deafult json
   */
  format(format: 'json' | 'xml') {
    if (format === 'json') {
      this.$format = format;
    } else {
      throw new ValidationError('light-odata doesnt support xml response');
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
  search(value: string, fuzzy = true): this {
    this.$search = fuzzy ? `%${value}%` : value;
    return this;
  }

  /**
   * expand navigation props
   *
   * @param fields
   * @param replace
   */
  expand(fields: keyof T | Array<keyof T>, replace = false): this {
    if (replace) {
      if (typeof fields == 'string') {
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
  custom(key: any, value: any) {
    this._customParams.append(key, value);
    return this;
  }


  toString(version: ODataVersion = 'v2'): string {
    const rt = new SearchParams();
    rt.putAll(this._customParams);
    if (this.$format) { rt.append('$format', this.$format); }
    if (this.$filter) { rt.append('$filter', this.$filter.toString()); }
    if (this.$orderby) { rt.append('$orderby', this.$orderby); }
    if (this.$search) { rt.append('$search', this.$search); }
    if (this.$select && this.$select.length > 0) { rt.append('$select', join(uniq(this.$select), ',')); }
    if (this.$skip) { rt.append('$skip', this.$skip.toString()); }
    if (this.$top && this.$top > 0) { rt.append('$top', this.$top.toString()); }
    if (this.$expand && this.$expand.length > 0) { rt.append('$expand', this.$expand.join(',')); }

    switch (version) {
      case 'v2':
        if (this.$inlinecount) { rt.append('$inlinecount', this.$inlinecount); }
        break;
      case 'v4':
        if (this.$count) { rt.append('$count', 'true'); }
        break;
      default:
        break;
    }
    return rt.toString();
  }

  /**
   * get the serialized param string value
   */
  get string() {
    return this.toString();
  }

}

export const ODataParam = ODataQueryParam;

export function param() {
  return ODataParam.newParam();
}
