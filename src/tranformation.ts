import { ODataFilter } from "./filter";


/**
 * Transformation for `$apply`
 *
 * @experimental
 */
export class Transformation {

  private _aggregate: string;

  private _countSumPercent: {
    count: number;
    valueExpression: string;
    type: "sum" | "count" | "percent";
    direction: "top" | "bottom";
  };

  private _identity: boolean;

  private _concat: Transformation[];

  private _groupBy: {
    properties: Array<string>;
    transformations: Transformation[];
  };

  private _filter: ODataFilter<any>;

  public static newTransformation() {
    return new Transformation();
  }

  private constructor() { }

  /**
   * Aggregate expressions can define an alias using the as keyword,
   * followed by a SimpleIdentifier
   *
   * @see [Transformation aggregate](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html#_The_aggregate_Transformation_1)
   * @param expression
   * @experimental
   * @example
   *
   * ```js
   * aggregate('Amount with sum as Total')
   * ```
   * @returns
   */
  public aggregate(expression: string) {
    this._aggregate = expression;
    return this;
  }

  /**
   *
   * @param count The first parameter specifies the number of instances to return in the transformed set. currently only support number
   * @param valueExpression The second parameter specifies the value by which the instances are compared for determining the result set.
   */
  public topcount(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "top",
      type: "count"
    };
    return this;
  }

  public topsum(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "top",
      type: "sum"
    };
    return this;
  }

  public toppercent(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "top",
      type: "percent",
    };
    return this;
  }


  public bottomcount(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "bottom",
      type: "count"
    };
    return this;
  }

  public bottomsum(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "bottom",
      type: "sum"
    };
    return this;
  }

  public bottompercent(count: number, valueExpression: string) {
    this._countSumPercent = {
      count,
      valueExpression,
      direction: "bottom",
      type: "percent",
    };
    return this;
  }

  /**
   * The identity transformation returns its input set.
   *
   * @returns
   */
  public identity() {
    this._identity = true;
    return this;
  }

  /**
   * The concat transformation takes two or more parameters,
   * each of which is a sequence of set transformations.
   *
   * @param transformations
   * @returns
   */
  public concat(...transformations: Array<Transformation>) {
    this._concat = transformations;
    return this;
  }

  /**
   * The filter transformation takes a Boolean expression that could also be passed as a `$filter` system query option to its input set and returns all instances for which this expression evaluates to true.
   * @param filter
   * @returns
   */
  public filter(filter: ODataFilter) {
    this._filter = filter;
    return this;
  }

  /**
   *
    The `groupby` transformation takes one or two parameters and
    1. Splits the initial set into subsets where all instances in a subset have the same values for the grouping properties specified in the first parameter,
    2. Applies set transformations to each subset according to the second parameter, resulting in a new set of potentially different structure and cardinality,
    3. Ensures that the instances in the result set contain all grouping properties with the correct values for the group,
    4. Concatenates the intermediate result sets into one result set.

   * @see [Transformation groupby](http://docs.oasis-open.org/odata/odata-data-aggregation-ext/v4.0/cs01/odata-data-aggregation-ext-v4.0-cs01.html#_Toc378326304)
   * @param properties
   * @param transformations
   * @experimental
   * @returns
   */
  public groupBy(
    properties: Array<string>,
    ...transformations: Array<Transformation>
  ) {

    // TODO: properties can not be empty
    this._groupBy = {
      properties,
      transformations
    };
    return this;
  }

  // TODO: filter, expand, search, isdefined, $crossjoin


  public toString() {
    const expressionText = "";
    if (this._aggregate !== undefined) {
      return `aggregate(${this._aggregate})`;
    }

    if (this._countSumPercent !== undefined) {
      const { direction, type, count, valueExpression } = this._countSumPercent;
      return `${direction}${type}(${count},${valueExpression})`;
    }

    if (this._groupBy !== undefined) {
      const properties = `(${this._groupBy.properties.join(",")})`;
      if (this._groupBy.transformations.length > 0) {
        const transformations = this
          ._groupBy
          .transformations
          .map(t => t.toString())
          .join("/");
        // see Transformation Sequences
        return `groupBy(${properties},${transformations})`;
      }
      return `groupBy(${properties})`;
    }

    if (this._identity === true) {
      return "identity";
    }

    if (this._filter !== undefined) {
      //  $apply is only avaible for odata v4,
      return `filter(${this._filter.toString()})`;
    }

    // TODO: other transformation

    return expressionText;
  }

}


export function transformation() {
  return Transformation.newTransformation();
}
