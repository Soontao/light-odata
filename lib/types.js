"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var url_search_params_1 = require("url-search-params");
var lodash_1 = require("lodash");
var FilterBase = (function () {
    function FilterBase() {
    }
    FilterBase.prototype.toString = function () {
        return this.filter.toString();
    };
    FilterBase.prototype.build = function () {
        return this.filter.build();
    };
    return FilterBase;
}());
exports.FilterBase = FilterBase;
var FilterField = (function (_super) {
    __extends(FilterField, _super);
    function FilterField(filter) {
        var _this = _super.call(this) || this;
        _this.filter = filter;
        return _this;
    }
    FilterField.prototype.field = function (name) {
        this.filter.field(name);
        return this.filter.FilterExpr;
    };
    return FilterField;
}(FilterBase));
exports.FilterField = FilterField;
var FilterAndOr = (function (_super) {
    __extends(FilterAndOr, _super);
    function FilterAndOr(filter) {
        var _this = _super.call(this) || this;
        _this.filter = filter;
        return _this;
    }
    FilterAndOr.prototype.and = function (filter) {
        this.filter.and(filter);
        return this.filter.FilterField;
    };
    FilterAndOr.prototype.or = function (filter) {
        this.filter.or(filter);
        return this.filter.FilterField;
    };
    return FilterAndOr;
}(FilterBase));
exports.FilterAndOr = FilterAndOr;
var FilterExpr = (function (_super) {
    __extends(FilterExpr, _super);
    function FilterExpr(filter) {
        var _this = _super.call(this) || this;
        _this.filter = filter;
        return _this;
    }
    FilterExpr.prototype.eq = function (value) {
        this.filter.eq(value);
        return this.filter.FilterAndOr;
    };
    FilterExpr.prototype.ge = function (value) {
        this.filter.ge(value);
    };
    FilterExpr.prototype.le = function (value) {
        this.filter.le(value);
    };
    FilterExpr.prototype.lt = function (value) {
        this.filter.lt(value);
    };
    return FilterExpr;
}(FilterBase));
exports.FilterExpr = FilterExpr;
var ODataFilter = (function () {
    function ODataFilter() {
        this.FilterField = new FilterField(this);
        this.FilterAndOr = new FilterAndOr(this);
        this.FilterExpr = new FilterExpr(this);
        this.filterStr = "";
    }
    ODataFilter.newBuilder = function () {
        return new ODataFilter().FilterField;
    };
    ODataFilter.prototype.build = function () {
        return this.filterStr;
    };
    ODataFilter.prototype.field = function (name) {
        this.filterStr += name;
        return this;
    };
    ODataFilter.prototype.eq = function (value) {
        this.filterStr += " eq " + value;
        return this;
    };
    ODataFilter.prototype.ge = function (value) {
        this.filterStr += " ge " + value;
        return this;
    };
    ODataFilter.prototype.le = function (value) {
        this.filterStr += " le " + value;
        return this;
    };
    ODataFilter.prototype.lt = function (value) {
        this.filterStr += " lt " + value;
        return this;
    };
    ODataFilter.prototype.and = function (filter) {
        if (filter) {
            this.filterStr = "(" + this.filterStr + ") and (" + filter + ")";
        }
        else {
            this.filterStr += " and ";
        }
        return this;
    };
    ODataFilter.prototype.or = function (filter) {
        if (filter) {
            this.filterStr = "(" + this.filterStr + ") or (" + filter + ")";
        }
        else {
            this.filterStr += " or ";
        }
        return this;
    };
    ODataFilter.prototype.toString = function () {
        return this.build();
    };
    return ODataFilter;
}());
exports.ODataFilter = ODataFilter;
var ODataQueryParam = (function () {
    function ODataQueryParam() {
        this.$skip = 0;
        this.$top = 30;
        this.$select = [];
        this.$format = "json";
        /**
         * @type {string[]}
         */
        this.$expand = [];
    }
    ODataQueryParam.newParam = function () {
        return new ODataQueryParam();
    };
    /**
     * filter
     * @param filter
     */
    ODataQueryParam.prototype.filter = function (filter) {
        this.$filter = filter;
    };
    /**
     * skip first records
     * @param skip
     */
    ODataQueryParam.prototype.skip = function (skip) {
        this.$skip = skip;
    };
    /**
     * limit result max records
     *
     * @param top
     */
    ODataQueryParam.prototype.top = function (top) {
        this.$top = top;
    };
    /**
     * select viewed fields
     *
     * @param selects
     */
    ODataQueryParam.prototype.select = function (selects) {
        this.$select = lodash_1.concat(this.$select, selects);
    };
    /**
     * set order sequence
     * @param field
     * @param order
     */
    ODataQueryParam.prototype.orderby = function (field, order) {
        if (order === void 0) { order = "desc"; }
        this.$orderby = field + " " + order;
    };
    /**
     * result format, please keep it as json
     * @param format
     */
    ODataQueryParam.prototype.format = function (format) {
        this.$format = format;
    };
    /**
     * full text search
     * @param value
     */
    ODataQueryParam.prototype.search = function (value, fuzzy) {
        if (fuzzy === void 0) { fuzzy = true; }
        this.$search = fuzzy ? "%" + value + "%" : value;
    };
    /**
     * expand navigation props
     * @param fields
     */
    ODataQueryParam.prototype.expand = function (fields) {
        this.$expand = lodash_1.concat(this.$expand, fields);
    };
    ODataQueryParam.prototype.toString = function () {
        var rt = new url_search_params_1.default();
        if (this.$filter) {
            rt.append("$filter", this.$filter.toString());
        }
        if (this.$format) {
            rt.append("$format", this.$format);
        }
        if (this.$orderby) {
            rt.append("$orderby", this.$orderby);
        }
        if (this.$search) {
            rt.append("$search", this.$search);
        }
        if (this.$select) {
            rt.append("$select", this.$select);
        }
        if (this.$skip) {
            rt.append("$skip", this.$skip);
        }
        if (this.$top) {
            rt.append("$top", this.$top);
        }
        if (this.$expand) {
            rt.append("$expand", this.$expand.join(","));
        }
        return rt.toString();
    };
    return ODataQueryParam;
}());
exports.ODataQueryParam = ODataQueryParam;
var C4CODataResult = (function () {
    function C4CODataResult() {
    }
    return C4CODataResult;
}());
exports.C4CODataResult = C4CODataResult;
var C4CEntity = (function () {
    function C4CEntity() {
    }
    return C4CEntity;
}());
exports.C4CEntity = C4CEntity;
var DeferredNavigationProperty = (function () {
    function DeferredNavigationProperty() {
    }
    return DeferredNavigationProperty;
}());
exports.DeferredNavigationProperty = DeferredNavigationProperty;
