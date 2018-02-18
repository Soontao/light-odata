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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UrlSearchParam = require("url-search-params");
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
        return this;
    };
    /**
     * skip first records
     * @param skip
     */
    ODataQueryParam.prototype.skip = function (skip) {
        this.$skip = skip;
        return this;
    };
    /**
     * limit result max records
     *
     * @param top
     */
    ODataQueryParam.prototype.top = function (top) {
        this.$top = top;
        return this;
    };
    /**
     * select viewed fields
     *
     * @param selects
     */
    ODataQueryParam.prototype.select = function (selects) {
        this.$select = lodash_1.concat(this.$select, selects);
        return this;
    };
    /**
     * set order sequence
     * @param field
     * @param order
     */
    ODataQueryParam.prototype.orderby = function (field, order) {
        if (order === void 0) { order = "desc"; }
        this.$orderby = field + " " + order;
        return this;
    };
    /**
     * result format, please keep it as json
     * @param format
     */
    ODataQueryParam.prototype.format = function (format) {
        this.$format = format;
        return this;
    };
    /**
     * full text search
     * @param value
     */
    ODataQueryParam.prototype.search = function (value, fuzzy) {
        if (fuzzy === void 0) { fuzzy = true; }
        this.$search = fuzzy ? "%" + value + "%" : value;
        return this;
    };
    /**
     * expand navigation props
     * @param fields
     */
    ODataQueryParam.prototype.expand = function (fields) {
        this.$expand = lodash_1.concat(this.$expand, fields);
        return this;
    };
    ODataQueryParam.prototype.toString = function () {
        var rt = new UrlSearchParam();
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
var C4CODataSingleResult = (function () {
    function C4CODataSingleResult() {
        this.d = { results: undefined };
    }
    C4CODataSingleResult.fromPlainObject = function (object, type) {
        var rt = new C4CODataSingleResult();
        if (object.error) {
            throw new Error(object.error.message.value);
        }
        rt.d.results = C4CEntity.fromPlainObject(object.d.results, type);
        return rt;
    };
    C4CODataSingleResult.fromRequestResult = function (p, t) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = C4CODataSingleResult).fromPlainObject;
                        return [4 /*yield*/, p];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), t])];
                }
            });
        });
    };
    return C4CODataSingleResult;
}());
exports.C4CODataSingleResult = C4CODataSingleResult;
var C4CODataResult = (function () {
    function C4CODataResult() {
        this.d = { results: [] };
    }
    C4CODataResult.fromPlainObject = function (object, type) {
        var rt = new C4CODataResult();
        if (object.error) {
            throw new Error(object.error.message.value);
        }
        rt.d.results = object.d.results.map(function (e) { return C4CEntity.fromPlainObject(e, type); });
        return rt;
    };
    C4CODataResult.fromRequestResult = function (p, t) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = C4CODataResult).fromPlainObject;
                        return [4 /*yield*/, p];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), t])];
                }
            });
        });
    };
    return C4CODataResult;
}());
exports.C4CODataResult = C4CODataResult;
var C4CEntity = (function () {
    function C4CEntity() {
    }
    C4CEntity.prototype.update = function () {
        return this._odata.requestUri(this.__metadata.uri, undefined, "PATCH", this);
    };
    C4CEntity.prototype.delete = function () {
        return this._odata.requestUri(this.__metadata.uri, undefined, "DELETE", this);
    };
    /**
     * parse instance from plain object
     * @param o
     */
    C4CEntity.fromPlainObject = function (o, t) {
        return lodash_1.assign(new t(), o);
    };
    C4CEntity.fromRequestResult = function (o, t) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = C4CEntity).fromPlainObject;
                        return [4 /*yield*/, o];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), t])];
                }
            });
        });
    };
    return C4CEntity;
}());
exports.C4CEntity = C4CEntity;
var DeferredNavigationProperty = (function () {
    function DeferredNavigationProperty() {
    }
    return DeferredNavigationProperty;
}());
exports.DeferredNavigationProperty = DeferredNavigationProperty;
