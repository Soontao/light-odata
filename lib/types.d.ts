export declare type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
export declare class FilterBase {
    private filter;
    toString(): string;
}
export declare class FilterField {
    constructor(filter: ODataFilter);
    private filter;
    field(name: any): FilterExpr;
    build(): string;
}
export declare class FilterAndOr {
    constructor(filter: ODataFilter);
    private filter;
    and(filter?: string): FilterField;
    or(filter?: string): FilterField;
    build(): string;
}
export declare class FilterExpr {
    constructor(filter: ODataFilter);
    private filter;
    eq(value: string): FilterAndOr;
    ge(value: string): void;
    le(value: string): void;
    lt(value: string): void;
}
export declare class ODataFilter {
    static newBuilder(): FilterField;
    FilterField: FilterField;
    FilterAndOr: FilterAndOr;
    FilterExpr: FilterExpr;
    private filterStr;
    build(): string;
    field(name: string): this;
    eq(value: any): this;
    ge(value: any): this;
    le(value: any): this;
    lt(value: any): this;
    and(filter?: string): this;
    or(filter?: string): this;
    toString(): string;
}
export declare class ODataQueryParam {
    $filter: string | ODataFilter;
    /**
     * Skips the first entries and then returns the rest
    */
    $skip: number;
    /**
     * Top entries
     *
     */
    $top: number;
    /**
     * select attributes
     */
    $select: string[];
    /**
     * First performs an orderby on the Field
     */
    $orderby: string;
    /**
     * entries in JSON format with server side paging
     *
     */
    $format: "json" | "xml";
    /**
     * @type {string}
     */
    $search: string;
    /**
     * @type {string[]}
     */
    $expand: string[];
    toString(): any;
}
export declare class C4CODataResult<T> {
    d: {
        results: T[];
    };
}
