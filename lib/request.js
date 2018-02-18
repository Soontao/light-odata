"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
require("isomorphic-fetch");
var lodash_1 = require("lodash");
var util_1 = require("./util");
var OData = (function () {
    function OData(metadataUri, credential, headers, urlRewrite) {
        this.csrfToken = "";
        this.commonHeader = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "zh"
        };
        this.requestUrlRewrite = function (s) { return s; };
        if (!metadataUri) {
            throw new Error("metadataUrl losted");
        }
        else {
            this.metadataUri = metadataUri;
            this.requestPrefix = lodash_1.join(lodash_1.slice(lodash_1.split(this.metadataUri, "/"), 0, -1), "/");
            this.commonHeader = __assign({}, this.commonHeader, headers);
            if (credential) {
                this.credential = credential;
                this.commonHeader = __assign({}, this.commonHeader, util_1.GetAuthorizationPair(this.credential.username, this.credential.password));
            }
            if (urlRewrite) {
                this.requestUrlRewrite = urlRewrite;
            }
        }
    }
    OData.prototype.getCsrfToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.requestUrlRewrite(this.requestPrefix), {
                            method: "HEAD",
                            headers: __assign({ "x-csrf-token": "fetch" }, this.commonHeader)
                        })];
                    case 1:
                        res = _a.sent();
                        this.csrfToken = res.headers.get("x-csrf-token");
                        return [2 /*return*/, this.csrfToken];
                }
            });
        });
    };
    OData.prototype.requestUri = function (uri, queryParams, method, body) {
        if (method === void 0) { method = "GET"; }
        return __awaiter(this, void 0, void 0, function () {
            var token, final_uri, config, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCsrfToken()];
                    case 1:
                        token = _a.sent();
                        final_uri = uri;
                        if (queryParams) {
                            final_uri += queryParams.toString();
                        }
                        config = {
                            method: method,
                            headers: __assign({ "x-csrf-token": token }, this.commonHeader)
                        };
                        if (method !== "GET" && body) {
                            config.body = body;
                        }
                        return [4 /*yield*/, fetch(this.requestUrlRewrite(final_uri), config)];
                    case 2:
                        res = _a.sent();
                        if (res.json) {
                            return [2 /*return*/, res.json()];
                        }
                        else {
                            return [2 /*return*/, res.text()];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    OData.prototype.request = function (collection, id, queryParams, method, entity) {
        if (method === void 0) { method = "GET"; }
        return __awaiter(this, void 0, void 0, function () {
            var url, token, config, res, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.requestPrefix + "/" + collection;
                        return [4 /*yield*/, this.getCsrfToken()];
                    case 1:
                        token = _a.sent();
                        config = {
                            method: method,
                            headers: __assign({ "x-csrf-token": token }, this.commonHeader)
                        };
                        if (id) {
                            url += "('" + id + "')";
                        }
                        if (method !== "GET" && entity) {
                            config.body = entity;
                        }
                        if (queryParams) {
                            url += "?" + queryParams.toString();
                        }
                        url = this.requestUrlRewrite(url);
                        return [4 /*yield*/, fetch(url, config)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json];
                    case 3:
                        content = (_a.sent()) ? res.json() : res.text();
                        return [2 /*return*/, content];
                }
            });
        });
    };
    return OData;
}());
exports.OData = OData;
