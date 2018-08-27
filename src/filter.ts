import { forEach, isEmpty, join, map, merge, filter, concat } from "lodash";

enum ExprOperator {
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

  constructor(
    filter: ODataFilter,
    fieldName: string,
  ) {
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

  private _addExpr(op: ExprOperator, value: string) {
    this._getFieldExprs().push({
      op,
      value,
    })
  }

  eq(value) {
    this._addExpr(ExprOperator.eq, value)
    return this._filter;
  }

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

  ge(value) {
    this._addExpr(ExprOperator.ge, value)
    return this._filter;
  }

  gt(value) {
    this._addExpr(ExprOperator.gt, value)
    return this._filter;
  }

  le(value) {
    this._addExpr(ExprOperator.le, value)
    return this._filter;
  }

  lt(value) {
    this._addExpr(ExprOperator.lt, value)
    return this._filter;
  }

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

  private _fieldExprMappings: FieldExprMappings = {};

  /**
   * getExprMapping
   */
  public getExprMapping() {
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
   * @deprecated please use fieldValueMatchArray
   * @param name 
   * @param values 
   */
  fieldIn(name: string, values: string[]) {
    return this.fieldValueMatchArray(name, values);
  }

  /**
   * The value of a field matches any value in the list.
   * 
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

  betweenDateTime(name: string, start: Date, end: Date) {
    if (start && end) {
      return this.gtDateTime(name, start).ltDateTime(name, end)
    } else {
      throw new Error("You must give out the start and end date")
    }
  }

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
   * @deprecated
   * @param filter 
   */
  and(filter?: string | ODataFilter) {
    return this;
  }

  /**
   * @deprecated
   * @param filter 
   */
  or(filter?: string | ODataFilter) {
    return this;
  }

  /**
   * @deprecated
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