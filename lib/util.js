"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = require("buffer");
function ConvertDateFromODataTime(str) {
    return new Date(parseInt(str.replace(/[^\d.]/g, ""), 10));
}
exports.ConvertDateFromODataTime = ConvertDateFromODataTime;
function GetAuthorizationPair(user, password) {
    return { Authorization: "Basic " + buffer_1.Buffer.from(user + ":" + password).toString("base64") };
}
exports.GetAuthorizationPair = GetAuthorizationPair;
