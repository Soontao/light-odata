import { forEach } from "lodash";



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

  private filterStr = "";

  /**
   * @param name filed name
   */
  field(name: string) {
    this.filterStr += name;
    return this;
  }

  fieldIn(name: string, values: string[]) {
    if (values) {
      forEach(values, (value, index, arr) => {
        this.field(name).eqString(value)
        if (index < (arr.length - 1)) {
          this.or()
        }
      });
    }
    return this;
  }

  eq(value) {
    this.filterStr += ` eq ${value}`;
    return this;
  }

  eqString(value: string) {
    this.filterStr += ` eq '${value}'`;
    return this;
  }

  ge(value) {
    this.filterStr += ` ge ${value}`;
    return this;
  }

  gt(value) {
    this.filterStr += ` gt ${value}`;
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

  /**
   * DEPRECATED
   * 
   * dont use this function
   * 
   * @param name 
   * @param start 
   * @param end 
   */
  inPeriod(name: string, start: Date, end: Date) {
    this.group(
      ODataFilter.newFilter()
        .gtDateTime(name, start)
        .and()
        .ltDateTime(name, end)
    )
    return this;
  }

  betweenDateTime(name: string, start: Date, end: Date) {
    if (start && end) {
      this.group(
        ODataFilter.newFilter()
          .gtDateTime(name, start)
          .and()
          .ltDateTime(name, end)
      )
    } else {
      throw new Error("You must give out the start and end date")
    }

    return this;
  }

  betweenDateTimeOffset(name: string, start: Date, end: Date) {
    if (start && end) {
      this.group(
        ODataFilter.newFilter()
          .gtDateTimeOffset(name, start)
          .and()
          .ltDateTimeOffset(name, end)
      )
    } else {
      throw new Error("You must give out the start and end date")
    }
    return this;
  }

  gtDateTime(name: string, date: Date) {
    this.field(name).gt(`datetime'${date.toISOString()}'`)
    return this
  }

  gtDateTimeOffset(name: string, date: Date) {
    this.field(name).gt(`datetimeoffset'${date.toISOString()}'`)
    return this
  }

  ltDateTime(name: string, date: Date) {
    this.field(name).lt(`datetime'${date.toISOString()}'`)
    return this
  }

  ltDateTimeOffset(name: string, date: Date) {
    this.field(name).lt(`datetimeoffset'${date.toISOString()}'`)
    return this
  }

  /**
   * AND expr
   * 
   * filter.field("A").eq("'a'").and().field("B").eq("'b").build() == "A eq 'a' and B eq 'b'"
   * 
   * filter.field("A").eq("'a'").and("B eq 'b'").build() == "A eq 'a' and (B eq 'b')"
   * 
   * @param filter 
   */
  and(filter?: string | ODataFilter) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) and (${filter.toString()})`;
    } else {
      this.filterStr += " and ";
    }
    return this;
  }

  or(filter?: string | ODataFilter) {
    if (filter) {
      this.filterStr = `(${this.filterStr}) or (${filter.toString()})`;
    } else {
      this.filterStr += " or ";
    }
    return this;
  }

  group(filter: string | ODataFilter) {
    this.filterStr += `(${filter.toString()})`;
    return this;
  }

  toString() {
    return this.build();
  }

  build() {
    return this.filterStr;
  }

}