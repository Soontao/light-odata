"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_search_params_1 = require("url-search-params");
var FilterBase = (function () {
    function FilterBase() {
    }
    FilterBase.prototype.toString = function () {
        return this.filter.toString();
    };
    return FilterBase;
}());
exports.FilterBase = FilterBase;
var FilterField = (function () {
    function FilterField(filter) {
        this.filter = filter;
    }
    FilterField.prototype.field = function (name) {
        this.filter.field(name);
        return this.filter.FilterExpr;
    };
    FilterField.prototype.build = function () {
        return this.filter.build();
    };
    return FilterField;
}());
exports.FilterField = FilterField;
var FilterAndOr = (function () {
    function FilterAndOr(filter) {
        this.filter = filter;
    }
    FilterAndOr.prototype.and = function (filter) {
        this.filter.and(filter);
        return this.filter.FilterField;
    };
    FilterAndOr.prototype.or = function (filter) {
        this.filter.or(filter);
        return this.filter.FilterField;
    };
    FilterAndOr.prototype.build = function () {
        return this.filter.build();
    };
    return FilterAndOr;
}());
exports.FilterAndOr = FilterAndOr;
var FilterExpr = (function () {
    function FilterExpr(filter) {
        this.filter = filter;
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
}());
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
        /**
         * Skips the first entries and then returns the rest
        */
        this.$skip = 0;
        /**
         * Top entries
         *
         */
        this.$top = 30;
        /**
         * entries in JSON format with server side paging
         *
         */
        this.$format = "json";
    }
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
