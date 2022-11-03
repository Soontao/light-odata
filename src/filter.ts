/* eslint-disable max-len */
import { join } from "@newdash/newdash/join";
import { FrameworkError, ValidationError } from "./errors";
import { SystemQueryOptions } from "./params";
import { ODataDateTime, ODataDateTimeOffset, ODataValueObject } from "./types";


export type FilterValue = number | string | ODataValueObject | null | boolean | Symbol | object

export enum ExprOperator {
  eq = "eq",
  ne = "ne",
  gt = "gt",
  lt = "lt",
  ge = "ge",
  le = "le",
}

type FieldExpr = {
  op: ExprOperator;
  value: FilterValue;
}

type FieldExprMappings = {
  [key: string]: FieldExpr[]
}

/**
 * odata property filter expression
 * @private
 * @internal
 */
class ODataPropertyExpr<T extends ODataFilter> {

  constructor(filter: T, fieldName: string, mapping: FieldExprMappings) {
    this._exprMappings = mapping;
    this._fieldName = fieldName;
    this._filter = filter;
    // initilize
    if (this._getFieldExprs() == undefined) {
      this._exprMappings[this._fieldName] = [];
    }
  }

  private _filter: T;

  private _fieldName: string;

  private _exprMappings: FieldExprMappings;

  private _getFieldExprs() {
    return this._exprMappings[this._fieldName];
  }

  private _addExpr(op: ExprOperator, value: FilterValue) {

    switch (typeof value) {
      case "number": case "boolean":
        this._getFieldExprs().push({ op, value: `${value}` });
        break;
      case "string":
        if (value.startsWith("'") || value.startsWith("datetime")) {
          this._getFieldExprs().push({ op, value });
        } else {
          this._getFieldExprs().push({ op, value: `'${value}'` });
        }
        break;
      case "object":
        if (value instanceof ODataValueObject) {
          this._getFieldExprs().push({ op, value: value.toString() });
        } else if (value === null) {
          this._getFieldExprs().push({ op, value: null });
        } else {
          throw new FrameworkError(`Not support object ${value?.["constructor"]?.["name"] || typeof value} in odata filter eq/ne/gt/ge/ne/nt ...`);
        }
        break;
      case "undefined":
        throw new ValidationError(`You must set value in odata filter eq/ne/gt/ge/ne/nt ...`);
      default:
        throw new FrameworkError(`Not support typeof ${typeof value}: ${value} in odata filter eq/ne/gt/ge/ne/nt ...`);
    }

  }

  /**
   * equal
   * @param value
   */
  eq(value: FilterValue): T {
    this._addExpr(ExprOperator.eq, value);
    return this._filter;
  }

  /**
   * not equal
   * @param value
   */
  ne(value: FilterValue): T {
    this._addExpr(ExprOperator.ne, value);
    return this._filter;
  }

  /**
   * @deprecated use `filter.eq("value")` instead
   * @param value
   * @returns
   */
  eqString(value: string): T {
    this._addExpr(ExprOperator.eq, `'${value}'`);
    return this._filter;
  }

  /**
   * @deprecated use `filter.ne("value")` instead
   * @param value
   * @returns
   */
  neString(value: string): T {
    this._addExpr(ExprOperator.ne, `'${value}'`);
    return this._filter;
  }

  /**
   * greater or equal
   * @param value
   */
  ge(value: FilterValue): T {
    this._addExpr(ExprOperator.ge, value);
    return this._filter;
  }

  /**
   * greater than
   * @param value
   */
  gt(value: FilterValue): T {
    this._addExpr(ExprOperator.gt, value);
    return this._filter;
  }

  /**
   * less or equal
   * @param value
   */
  le(value: FilterValue): T {
    this._addExpr(ExprOperator.le, value);
    return this._filter;
  }

  /**
   * less than
   * @param value
   */
  lt(value: FilterValue): T {
    this._addExpr(ExprOperator.lt, value);
    return this._filter;
  }

  /**
   * match any value in an array
   *
   * @param values
   */
  in(values: FilterValue[] = []): T {
    if (values.length > 0) {
      values.forEach((value) => {
        this.eq(value);
      });
    }
    return this._filter;
  }

  /**
   * filter by value range
   *
   * @param low
   * @param max
   * @param includeBoundary
   */
  between(low: FilterValue, max: FilterValue, includeBoundary = true): T {
    if (low == undefined || max == undefined) {
      throw new ValidationError("You must give out the start and end value");
    }
    if (includeBoundary) {
      this.ge(low);
      this.le(max);
    } else {
      this.gt(low);
      this.lt(max);
    }
    return this._filter;
  }

  /**
   *
   * @deprecated please use filter.between(ODataDateTime.from(date), ODataDateTime.from(date))
   * @param start
   * @param end
   * @param includeBoundary
   * @returns
   */
  betweenDateTime(start?: Date, end?: Date, includeBoundary = true): T {
    if (start == undefined && end == undefined) {
      throw new ValidationError("You must give out the start or end date");
    }
    if (start instanceof Date) {
      if (includeBoundary) {
        this.ge(ODataDateTime.from(start));
      } else {
        this.gt(ODataDateTime.from(start));
      }
    }
    if (end instanceof Date) {
      if (includeBoundary) {
        this.le(ODataDateTime.from(end));
      } else {
        this.lt(ODataDateTime.from(end));
      }
    }
    return this._filter;
  }

  /**
   *  @deprecated please use filter.between(ODataDateTimeOffset.from(date), ODataDateTimeOffset.from(date))
   * @param start
   * @param end
   * @param includeBoundary
   * @returns
   */
  betweenDateTimeOffset(start?: Date, end?: Date, includeBoundary = true): T {
    if (start == undefined && end == undefined) {
      throw new ValidationError("You must give out the start or end date");
    }
    if (start instanceof Date) {
      if (includeBoundary) {
        this.ge(ODataDateTimeOffset.from(start));
      } else {
        this.gt(ODataDateTimeOffset.from(start));
      }
    }
    if (end instanceof Date) {
      if (includeBoundary) {
        this.le(ODataDateTimeOffset.from(end));
      } else {
        this.lt(ODataDateTimeOffset.from(end));
      }
    }
    return this._filter;
  }

}


/**
 * OData filter builder
 *
 */
export class ODataFilter<T = any> {

  static newBuilder<T = any>() {
    return new ODataFilter<T>();
  }

  /**
   * construct a new filter
   */
  static newFilter<T = any>() {
    return new ODataFilter<T>();
  }

  private _fieldExprMappings: FieldExprMappings = {};

  /**
   * getExprMapping
   *
   * @internal
   * @private
   */
  private getExprMapping(): FieldExprMappings {
    return this._fieldExprMappings;
  }

  /**
   * filter property
   * @see property
   * @param name field name or function expression
   */
  field(name: keyof T): ODataPropertyExpr<this> {
    return this.property(name);
  }

  /**
   * filter property
   *
   * @param name property name
   */
  property(name: keyof T): ODataPropertyExpr<this> {
    // @ts-ignore
    return new ODataPropertyExpr(this, name, this.getExprMapping());
  }

  /**
   * The value of a field matches any value in the list.
   *
   * @deprecated please use filter.field().in()
   * @param name
   * @param values
   */
  fieldIn(name: keyof T, values: string[]): this {
    // @ts-ignore
    return this.fieldValueMatchArray(name, values);
  }

  /**
   * The value of a field matches any value in the list.
   *
   * @deprecated please use filter.field().in()
   * @param name
   * @param values
   */
  fieldValueMatchArray(name: keyof T, values: string[] = []): this {
    if (values) {
      values.forEach((value) => {
        this.field(name).eqString(value);
      });
    }
    return this;
  }

  /**
   * DEPRECATED
   *
   * please use betweenDateTime/betweenDateTimeOffset
   *
   * @deprecated
   * @param name
   * @param start
   * @param end
   */
  inPeriod(name: keyof T, start: Date, end: Date): this {
    return this.betweenDateTime(name, start, end);
  }

  /**
   * @deprecated
   * @param name
   * @param start
   * @param end
   */
  betweenDateTime(name: keyof T, start: Date, end: Date): this {
    if (start && end) {
      return this.gtDateTime(name, start).ltDateTime(name, end);
    }
    throw new ValidationError("You must give out the start and end date");

  }

  /**
   * @deprecated
   * @param name
   * @param start
   * @param end
   */
  betweenDateTimeOffset(name: keyof T, start: Date, end: Date): ODataFilter {
    if (start && end) {
      return this.gtDateTimeOffset(name, start).ltDateTimeOffset(name, end);
    }
    throw new ValidationError("You must give out the start and end date");
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  gtDateTime(name: keyof T, date: Date): this {
    return this.field(name).gt(ODataDateTime.from(date));
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  gtDateTimeOffset(name: keyof T, date: Date): this {
    return this.field(name).gt(ODataDateTimeOffset.from(date));
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  ltDateTime(name: keyof T, date: Date): this {
    return this.field(name).lt(ODataDateTime.from(date));
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  ltDateTimeOffset(name: keyof T, date: Date): this {
    return this.field(name).lt(ODataDateTimeOffset.from(date));
  }

  /**
   * @deprecated c4codata will auto group exprs
   * @param filter
   */
  group(filter: ODataFilter): this {
    this._fieldExprMappings = Object.assign(this._fieldExprMappings, filter.getExprMapping());
    return this;
  }

  toString(): string {
    return this.build();
  }

  protected _buildFieldExprString(field: string): string {
    const exprs = this.getExprMapping()[field];
    if (exprs.length > 0) {
      if (exprs.filter((expr) => expr.op == ExprOperator.eq).length == 0) {
        return `(${join(
          exprs.map(({ op, value }) => `${field} ${op} ${value}`),
          " and "
        )})`;
      }
      return `(${join(
        exprs.map(({ op, value }) => `${field} ${op} ${value}`),
        " or "
      )})`;

    }
    return "";


  }

  /**
   * build filter to string
   */
  build(): string {
    let _rt = "";
    _rt = join(
      // join all fields exprs string
      Object.entries(this.getExprMapping()).map(
        ([fieldName, exprs]) => {
          switch (exprs.length) {
            // if one field expr mapping array is empty
            case 0:
              return "";
            // only have one expr
            case 1:
              const { op, value } = exprs[0];
              return `${fieldName} ${op} ${value}`;
            default:
              // multi exprs
              return this._buildFieldExprString(fieldName);
          }

        }
      ),
      " and "
    );
    return _rt;
  }

}

export class ParamBoundedFilter<T = any> extends ODataFilter<T> {

  #params: SystemQueryOptions;

  constructor(params: SystemQueryOptions) {
    super();
    this.#params = params;
  }

  /**
   * the filter is ended, return the param object
   *
   * @returns the param
   */
  public filterEnd(): SystemQueryOptions {
    return this.#params.filter(this);
  }

}

export function filter() {
  return ODataFilter.newFilter();
}
