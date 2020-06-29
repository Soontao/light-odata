import join from '@newdash/newdash/join';
import { ValidationError, FrameworkError } from './errors';

export abstract class ODataDataObject {
  abstract toString(): string;
}

export class ODataDateTime extends ODataDataObject {

  private constructor(date: Date) {
    super();
    this._date = date;
  }

  static from(date: Date): ODataDateTime {
    const rt = new ODataDateTime(date);
    return rt;
  }

  private _date: Date

  public toString(): string {
    return `datetime'${this._date.toISOString()}'`;
  }

}

export class ODataDateTimeOffset extends ODataDataObject {

  private constructor(date: Date) {
    super();
    this._date = date;
  }

  static from(date: Date): ODataDateTimeOffset {
    const rt = new ODataDateTimeOffset(date);
    return rt;
  }

  private _date: Date

  public toString(): string {
    return `datetimeoffset'${this._date.toISOString()}'`;
  }

}

export enum ExprOperator {
  eq = 'eq',
  ne = 'ne',
  gt = 'gt',
  lt = 'lt',
  ge = 'ge',
  le = 'le',
}

type FieldExpr = {
  op: ExprOperator;
  value: string;
}

type FieldExprMappings = {
  [key: string]: FieldExpr[]
}

/**
 * @private
 * @internal
 */
class ODataFieldExpr {

  constructor(filter: ODataFilter, fieldName: string, mapping: FieldExprMappings) {
    this._exprMappings = mapping;
    this._fieldName = fieldName;
    this._filter = filter;
    // initilize
    if (this._getFieldExprs() == undefined) {
      this._exprMappings[this._fieldName] = [];
    }
  }

  private _filter: ODataFilter;

  private _fieldName: string;

  private _exprMappings: FieldExprMappings

  private _getFieldExprs() {
    return this._exprMappings[this._fieldName];
  }

  private _addExpr(op: ExprOperator, value: any) {

    switch (typeof value) {
      case 'number':
        this._getFieldExprs().push({ op, value: `${value}` });
        break;
      case 'string':
        if (value.startsWith("'") || value.startsWith('datetime')) {
          this._getFieldExprs().push({ op, value });
        } else {
          this._getFieldExprs().push({ op, value: `'${value}'` });
        }
        break;
      case 'object':
        if (value instanceof ODataDataObject) {
          this._getFieldExprs().push({ op, value: value.toString() });
        } else {
          throw new FrameworkError(`Not support object ${value?.constructor?.name || typeof value} in odata filter eq/ne/gt/ge/ne/nt ...`);
        }
        break;
      case 'undefined':
        throw new ValidationError(`You must set value in odata filter eq/ne/gt/ge/ne/nt ...`);
      default:
        throw new FrameworkError(`Not support typeof ${typeof value}: ${value} in odata filter eq/ne/gt/ge/ne/nt ...`);
    }

  }

  /**
   * equal
   * @param value
   */
  eq(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.eq, value);
    return this._filter;
  }

  /**
   * not equal
   * @param value
   */
  ne(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.ne, value);
    return this._filter;
  }

  eqString(value: string): ODataFilter {
    this._addExpr(ExprOperator.eq, `'${value}'`);
    return this._filter;
  }

  neString(value: string): ODataFilter {
    this._addExpr(ExprOperator.ne, `'${value}'`);
    return this._filter;
  }

  /**
   * greater or equal
   * @param value
   */
  ge(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.ge, value);
    return this._filter;
  }

  /**
   * greater than
   * @param value
   */
  gt(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.gt, value);
    return this._filter;
  }

  /**
   * less or equal
   * @param value
   */
  le(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.le, value);
    return this._filter;
  }

  /**
   * less than
   * @param value
   */
  lt(value: number | string | ODataDataObject): ODataFilter {
    this._addExpr(ExprOperator.lt, value);
    return this._filter;
  }

  /**
   * match any value in an array
   *
   * @param values
   */
  in(values: string[] = []): ODataFilter {
    if (values.length > 0) {
      values.forEach((value) => {
        this.eqString(value);
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
  between(low: any, max: any, includeBoundary = true): ODataFilter {
    if (low == undefined || max == undefined) {
      throw new ValidationError('You must give out the start and end value');
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

  betweenDateTime(start?: Date, end?: Date, includeBoundary = true): ODataFilter {
    if (start == undefined && end == undefined) {
      throw new ValidationError('You must give out the start or end date');
    }
    if (start instanceof Date) {
      if (includeBoundary) {
        this.ge(`datetime'${start.toISOString()}'`);
      } else {
        this.gt(`datetime'${start.toISOString()}'`);
      }
    }
    if (end instanceof Date) {
      if (includeBoundary) {
        this.le(`datetime'${end.toISOString()}'`);
      } else {
        this.lt(`datetime'${end.toISOString()}'`);
      }
    }
    return this._filter;
  }

  betweenDateTimeOffset(start?: Date, end?: Date, includeBoundary = true): ODataFilter {
    if (start == undefined && end == undefined) {
      throw new ValidationError('You must give out the start or end date');
    }
    if (start instanceof Date) {
      if (includeBoundary) {
        this.ge(`datetimeoffset'${start.toISOString()}'`);
      } else {
        this.gt(`datetimeoffset'${start.toISOString()}'`);
      }
    }
    if (end instanceof Date) {
      if (includeBoundary) {
        this.le(`datetimeoffset'${end.toISOString()}'`);
      } else {
        this.lt(`datetimeoffset'${end.toISOString()}'`);
      }
    }
    return this._filter;
  }

}


/**
 * OData filter builder
 */
export class ODataFilter {

  static newBuilder(): ODataFilter {
    return new ODataFilter();
  }

  /**
   * construct a new filter
   */
  static newFilter(): ODataFilter {
    return new ODataFilter();
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
   * @param name filed name
   */
  field(name: string): ODataFieldExpr {
    return new ODataFieldExpr(this, name, this.getExprMapping());
  }

  /**
   * The value of a field matches any value in the list.
   *
   * @deprecated please use filter.field().in()
   * @param name
   * @param values
   */
  fieldIn(name: string, values: string[]): this {
    return this.fieldValueMatchArray(name, values);
  }

  /**
   * The value of a field matches any value in the list.
   *
   * @deprecated please use filter.field().in()
   * @param name
   * @param values
   */
  fieldValueMatchArray(name: string, values: string[] = []): this {
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
  inPeriod(name: string, start: Date, end: Date): ODataFilter {
    return this.betweenDateTime(name, start, end);
  }

  /**
   * @deprecated
   * @param name
   * @param start
   * @param end
   */
  betweenDateTime(name: string, start: Date, end: Date): ODataFilter {
    if (start && end) {
      return this.gtDateTime(name, start).ltDateTime(name, end);
    }
    throw new ValidationError('You must give out the start and end date');

  }

  /**
   * @deprecated
   * @param name
   * @param start
   * @param end
   */
  betweenDateTimeOffset(name: string, start: Date, end: Date): ODataFilter {
    if (start && end) {
      return this.gtDateTimeOffset(name, start).ltDateTimeOffset(name, end);
    }
    throw new ValidationError('You must give out the start and end date');
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  gtDateTime(name: string, date: Date): ODataFilter {
    return this.field(name).gt(`datetime'${date.toISOString()}'`);
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  gtDateTimeOffset(name: string, date: Date): ODataFilter {
    return this.field(name).gt(`datetimeoffset'${date.toISOString()}'`);
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  ltDateTime(name: string, date: Date): ODataFilter {
    return this.field(name).lt(`datetime'${date.toISOString()}'`);
  }

  /**
   * @deprecated
   * @param name
   * @param date
   */
  ltDateTimeOffset(name: string, date: Date): ODataFilter {
    return this.field(name).lt(`datetimeoffset'${date.toISOString()}'`);
  }

  /**
   * AND expr
   *
   * filter.field("A").eq("'a'").and().field("B").eq("'b").build() == "A eq 'a' and B eq 'b'"
   *
   * filter.field("A").eq("'a'").and("B eq 'b'").build() == "A eq 'a' and (B eq 'b')"
   *
   * @deprecated c4codata will auto detect connect operator between difference fields
   * @param filter
   */
  and(filter?: string | ODataFilter): ODataFilter {
    return this;
  }

  /**
   * @deprecated c4codata will auto detect connect operator in same fields
   * @param filter
   */
  or(filter?: string | ODataFilter): ODataFilter {
    return this;
  }

  /**
   * @deprecated c4codata will auto group exprs
   * @param filter
   */
  group(filter: ODataFilter): ODataFilter {
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
          ' and '
        )})`;
      }
      return `(${join(
        exprs.map(({ op, value }) => `${field} ${op} ${value}`),
        ' or '
      )})`;

    }
    return '';


  }

  build(): string {
    let _rt = '';
    _rt = join(
      // join all fields exprs string
      Object.entries(this.getExprMapping()).map(
        ([fieldName, exprs]) => {
          switch (exprs.length) {
            // if one field expr mapping array is empty
            case 0:
              return '';
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
      ' and '
    );
    return _rt;
  }

}
