
import { forEach, map, isEmpty, join, filter, merge } from "lodash";

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
  value: string;
}


type FieldExprMappings = {
  [key: string]: FieldExpr[]
}

export class ODataFieldExpr {

  constructor(filter: ODataFilter, fieldName: string) {
    this._exprMappings = filter.getExprMapping();
    this._fieldName = fieldName;
    this._filter = filter;
    if (isEmpty(this._getFieldExprs())) {
      this._exprMappings[this._fieldName] = []
    }
  }

  private _filter: ODataFilter;

  private _fieldName: string;

  private _exprMappings: FieldExprMappings

  private _getFieldExprs() {
    return this._exprMappings[this._fieldName]
  }

  private _addExpr(op: ExprOperator, value: any) {

    switch (typeof value) {
      case "number":
        this._getFieldExprs().push({ op, value: `${value}` })
        break;
      case "string":
        if (value.startsWith("'") || value.startsWith("datetime")) {
          this._getFieldExprs().push({ op, value })
        } else {
          this._getFieldExprs().push({ op, value: `'${value}'` })
        }
        break;
      case "object":
        if (value instanceof Date) {
          this._getFieldExprs().push({ op, value: `datetimeoffset'${value.toISOString()}'` })
          break;
        } else {
          throw new Error(`Not support object ${value} in odata filter eq/ne/gt/ge/ne/nt ...`)
        }
      case "undefined":
        throw new Error(`You must set value in odata filter eq/ne/gt/ge/ne/nt ...`)
      default:
        throw new Error(`Not support typeof ${typeof value}: ${value} in odata filter eq/ne/gt/ge/ne/nt ...`)
    }

  }

  /**
   * equal
   * @param value 
   */
  eq(value) {
    this._addExpr(ExprOperator.eq, value)
    return this._filter;
  }

  /**
   * not equal
   * @param value 
   */
  ne(value) {
    this._addExpr(ExprOperator.ne, value)
  }

  eqString(value: string) {
    this._addExpr(ExprOperator.eq, `'${value}'`)
    return this._filter;
  }

  neString(value: string) {
    this._addExpr(ExprOperator.ne, `'${value}'`)
    return this._filter;
  }

  /**
   * greater or equal
   * @param value 
   */
  ge(value) {
    this._addExpr(ExprOperator.ge, value)
    return this._filter;
  }

  /**
   * greater than
   * @param value 
   */
  gt(value) {
    this._addExpr(ExprOperator.gt, value)
    return this._filter;
  }

  /**
   * less or equal
   * @param value 
   */
  le(value) {
    this._addExpr(ExprOperator.le, value)
    return this._filter;
  }

  /**
   * less than
   * @param value 
   */
  lt(value) {
    this._addExpr(ExprOperator.lt, value)
    return this._filter;
  }

  /**
   * match any value in an array
   * 
   * @param values 
   */
  in(values: string[]) {
    if (!isEmpty(values)) {
      forEach(values, (value) => {
        this.eqString(value)
      });
    }
    return this._filter;
  }

  /**
   * filter by value range
   * 
   * @param lower 
   * @param max 
   * @param includeBoundary 
   */
  between(lower, max, includeBoundary = true) {
    if (isEmpty(lower) && isEmpty(max)) {
      throw new Error("You must give out the start and end value")
    }
    if (includeBoundary) {
      this.ge(lower);
      this.le(max);
    } else {
      this.gt(lower);
      this.lt(max);
    }
    return this._filter;
  }

  betweenDateTime(start: Date, end: Date, includeBoundary = true) {
    if (start && end) {
      return this.between(`datetime'${start.toISOString()}'`, `datetime'${end.toISOString()}'`, includeBoundary)
    } else {
      throw new Error("You must give out the start and end date")
    }
  }

  betweenDateTimeOffset(start: Date, end: Date, includeBoundary = true) {
    if (start && end) {
      return this.between(`datetimeoffset'${start.toISOString()}'`, `datetimeoffset'${end.toISOString()}'`, includeBoundary)
    } else {
      throw new Error("You must give out the start and end date")
    }
  }

}



/**
 * OData filter builder
 */
export class ODataFilter {

  static newBuilder() {
    return new ODataFilter()
  }

  /**
   * construct a new filter
   */
  static newFilter() {
    return new ODataFilter()
  }

  private _fieldExprMappings: FieldExprMappings = {};

  /**
   * getExprMapping
   */
  getExprMapping() {
    return this._fieldExprMappings;
  }

  /**
   * @param name filed name
   */
  field(name: string) {
    return new ODataFieldExpr(this, name);
  }

  /**
   * The value of a field matches any value in the list.
   * 
   * @deprecated please use filter.field().in()
   * @param name 
   * @param values 
   */
  fieldIn(name: string, values: string[]) {
    return this.fieldValueMatchArray(name, values);
  }

  /**
   * The value of a field matches any value in the list.
   * 
   * @deprecated please use filter.field().in()
   * @param name 
   * @param values 
   */
  fieldValueMatchArray(name: string, values: string[]) {
    if (values) {
      forEach(values, (value) => {
        this.field(name).eqString(value)
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
  inPeriod(name: string, start: Date, end: Date) {
    return this.betweenDateTime(name, start, end)
  }

  /**
   * @deprecated
   * @param name 
   * @param start 
   * @param end 
   */
  betweenDateTime(name: string, start: Date, end: Date) {
    if (start && end) {
      return this.gtDateTime(name, start).ltDateTime(name, end)
    } else {
      throw new Error("You must give out the start and end date")
    }
  }

  /**
   * @deprecated
   * @param name 
   * @param start 
   * @param end 
   */
  betweenDateTimeOffset(name: string, start: Date, end: Date) {
    if (start && end) {
      return this.gtDateTimeOffset(name, start).ltDateTimeOffset(name, end)
    } else {
      throw new Error("You must give out the start and end date")
    }
  }

  gtDateTime(name: string, date: Date) {
    return this.field(name).gt(`datetime'${date.toISOString()}'`)
  }

  gtDateTimeOffset(name: string, date: Date) {
    return this.field(name).gt(`datetimeoffset'${date.toISOString()}'`)
  }

  ltDateTime(name: string, date: Date) {
    return this.field(name).lt(`datetime'${date.toISOString()}'`)
  }

  ltDateTimeOffset(name: string, date: Date) {
    return this.field(name).lt(`datetimeoffset'${date.toISOString()}'`)
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
  and(filter?: string | ODataFilter) {
    return this;
  }

  /**
   * @deprecated c4codata will auto detect connect operator in same fields
   * @param filter 
   */
  or(filter?: string | ODataFilter) {
    return this;
  }

  /**
   * @deprecated c4codata will auto group exprs
   * @param filter 
   */
  group(filter: ODataFilter) {
    this._fieldExprMappings = merge(this._fieldExprMappings, filter.getExprMapping())
    return this;
  }

  toString() {
    return this.build();
  }

  _buildFieldExprString(field: string) {
    const exprs = this.getExprMapping()[field];
    if (!isEmpty(exprs)) {
      if (isEmpty(filter(exprs, { op: ExprOperator.eq }))) {
        return `(${join(
          map(exprs, ({ op, value }) => `${field} ${op} ${value}`),
          " and "
        )})`
      } else {
        return `(${join(
          map(exprs, ({ op, value }) => `${field} ${op} ${value}`),
          " or "
        )})`
      }
    } else {
      return "";
    }

  }

  build() {
    var _rt = "";
    _rt = join(
      // join all fields exprs string
      map(
        this.getExprMapping(),
        (exprs, fieldName) => {
          switch (exprs.length) {
            // if one field expr mapping array is empty
            case 0:
              return "";
            // only have one expr
            case 1:
              const { op, value } = exprs[0]
              return `${fieldName} ${op} ${value}`
            default:
              // multi exprs
              return this._buildFieldExprString(fieldName)
          }

        }
      ),
      " and "
    )
    return _rt;
  }

}