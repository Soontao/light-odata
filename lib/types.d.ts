export declare type HTTPMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "PATCH";
export declare class FilterBase {
    protected filter: ODataFilter;
    toString(): string;
    build(): string;
}
export declare class FilterField extends FilterBase {
    constructor(filter: ODataFilter);
    field(name: any): FilterExpr;
}
export declare class FilterAndOr extends FilterBase {
    constructor(filter: ODataFilter);
    and(filter?: string): FilterField;
    or(filter?: string): FilterField;
}
export declare class FilterExpr extends FilterBase {
    constructor(filter: ODataFilter);
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
    static newParam(): ODataQueryParam;
    private $skip;
    private $filter;
    private $top;
    private $select;
    private $orderby;
    private $format;
    private $search;
    /**
     * filter
     * @param filter
     */
    filter(filter: string | FilterBase): void;
    /**
     * skip first records
     * @param skip
     */
    skip(skip: number): void;
    /**
     * limit result max records
     *
     * @param top
     */
    top(top: number): void;
    /**
     * select viewed fields
     *
     * @param selects
     */
    select(selects: string | string[]): void;
    /**
     * set order sequence
     * @param field
     * @param order
     */
    orderby(field: string, order?: "asc" | "desc"): void;
    /**
     * result format, please keep it as json
     * @param format
     */
    format(format: "json" | "xml"): void;
    /**
     * full text search
     * @param value
     */
    search(value: string, fuzzy?: boolean): void;
    /**
     * expand navigation props
     * @param fields
     */
    expand(fields: string | string[]): void;
    /**
     * @type {string[]}
     */
    private $expand;
    toString(): string;
}
export declare class C4CODataResult<T> {
    d: {
        results: T[];
    };
}
export declare class C4CEntity {
    __metadata: {
        uri: string;
        type: string;
        etag?: string;
    };
}
export declare class DeferredNavigationProperty {
    __deferred: {
        uri: string;
    };
}
declare global  {
    module Edm {
        type String = string;
        type Guid = string;
        type DateTime = string;
        type DateTimeOffset = string;
        type Boolean = boolean;
        type Decimal = number;
        /**
         * base64 string
         */
        type Binary = string;
    }
}
export {};
