import { ODataFilter } from './filter';

import concat from '@newdash/newdash/concat';
import join from '@newdash/newdash/join';
import isArray from '@newdash/newdash/isArray';
import uniq from '@newdash/newdash/uniq';

import { ODataVersion } from './types_v4';

class SearchParams {

  _store = new Map()

  append(key: string, value: string): void {
    this._store.set(key, value);
  }

  toString(): string {
    const coll = [];
    this._store.forEach((value, key) => {
      coll.push(`${key}=${value}`);
    });
    return coll.join('&');
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
  order?: 'asc' | 'desc';

}


/**
 * OData Param Object
 *
 * ref https://github.com/SAP/C4CODATAAPIDEVGUIDE
 */
export class ODataQueryParam {

  static newParam(): ODataQueryParam {
    return new ODataQueryParam();
  }

  private $skip = 0
  private $filter: string | ODataFilter
  private $top = 0
  private $select: string[] = []
  private $orderby: string
  private $format: 'json' | 'xml' = 'json'
  private $search: string
  private $inlinecount: string
  private $expand: string[] = []
  private $count = false

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
  filter(filter?: string | ODataFilter) {
    if (filter instanceof ODataFilter) {
      this.$filter = filter.build();
      return this;
    } else if (typeof filter === 'string') {
      this.$filter = filter;
      return this;
    }
    throw Error('ODataQueryParam.filter only accept string or ODataFilter type parameter');
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
  select(selects: string | string[]) {
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
    fieldOrOrders: string | ODataParamOrderField[],
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
  orderbyMulti(fields: ODataParamOrderField[] = []) {
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
      throw new Error('light-odata dont support xml response');
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
  expand(fields: string | string[], replace = false): this {
    if (replace) {
      if (typeof fields == 'string') {
        this.$expand = [fields];
      } else if (isArray(fields)) {
        this.$expand = fields;
      }
    } else {
      this.$expand = concat(this.$expand, fields as any);
    }
    return this;
  }


  toString(version: ODataVersion = 'v2'): string {
    const rt = new SearchParams();
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
}

export const ODataParam = ODataQueryParam;
