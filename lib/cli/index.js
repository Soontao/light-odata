#!/usr/bin/env node
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
var cli_1 = require("cli");
var process_1 = require("process");
var console_1 = require("console");
var util_1 = require("../util");
var fs_1 = require("fs");
var path_1 = require("path");
var generator_1 = require("../generator");
var options = cli_1.parse({
    uri: ['m', 'metadata uri', "string"],
    user: ['u', 'c4c username', "string"],
    pass: ['p', 'c4c password', "string"],
    out: ['o', 'out file', 'string', "c4codata.js"]
}, []);
if (options.uri && options.user && options.pass) {
    fetch(options.uri, { headers: __assign({}, util_1.GetAuthorizationPair(options.user, options.pass)) })
        .then(function (res) { return res.text(); })
        .then(function (body) { return generator_1.parseODataMetadata(body); })
        .then(function (meta) { return fs_1.writeFileSync(path_1.join(process_1.cwd(), options.out), generator_1.generateAllDefault(meta, options)); })
        .catch(function (err) { return console_1.error; });
}
else {
    console_1.error("You must give out metadata url & credential for generate static file");
}
