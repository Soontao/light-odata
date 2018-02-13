"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xml2js_1 = require("xml2js");
var lodash_1 = require("lodash");
function parseODataMetadata(file_str, cb) {
    xml2js_1.parseString(file_str, function (err, result) {
        cb(err, result);
    });
}
exports.parseODataMetadata = parseODataMetadata;
function parseMetaClassFromDefault(metadata) {
    return parseMetaClassFrom(metadata["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityType);
}
exports.parseMetaClassFromDefault = parseMetaClassFromDefault;
function parseMetaClassFrom(entityTypes) {
    return entityTypes.map(function (entity) { return ({
        name: entity.$.Name,
        field: entity.Property.map(function (p) { return ({
            name: p.$.Name,
            type: p.$.Type,
            description: p.$["sap:label"]
        }); }),
        exported: true
    }); });
}
exports.parseMetaClassFrom = parseMetaClassFrom;
function parseMetaCRUDFunctionFromDefault(metadata) {
    var collections = metadata["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityContainer[0].EntitySet;
    return lodash_1.reduce(collections, function (pre, c) { return lodash_1.concat(pre, parseMetaCRUDFunctionFrom(c)); }, []);
}
exports.parseMetaCRUDFunctionFromDefault = parseMetaCRUDFunctionFromDefault;
function parseMetaCRUDFunctionFrom(collection) {
    var rt = [];
    var entityName = collection.$.EntityType.split(".").pop();
    rt.push({
        name: "read" + entityName,
        parameters: [
            {
                name: "params",
                type: "ODataQueryParam"
            }
        ],
        return: "Promise<C4CODataResult<" + entityName + ">>",
        body: "return odata.request(\"" + collection.$.Name + "\", undefined, params)"
    });
    rt.push({
        name: "readSingle" + entityName,
        parameters: [
            {
                name: "id",
                type: "string"
            },
            {
                name: "params",
                type: "ODataQueryParam"
            }
        ],
        return: "Promise<C4CODataResult<" + entityName + ">>",
        body: "return odata.request(\"" + collection.$.Name + "\", id, params)"
    });
    if (collection.$["sap:creatable"]) {
        rt.push({
            name: "create" + entityName,
            parameters: [
                {
                    name: "entity",
                    type: entityName
                }
            ],
            return: "Promise<" + entityName + ">",
            body: "return odata.request(\"" + collection.$.Name + "\", undefined, undefined, \"POST\", entity)"
        });
    }
    if (collection.$["sap:updatable"]) {
        rt.push({
            name: "update" + entityName,
            parameters: [
                {
                    name: "id",
                    type: "string"
                },
                {
                    name: "entity",
                    type: entityName,
                    description: "part of entity for updating"
                }
            ],
            return: "Promise<" + entityName + ">",
            body: "return odata.request(\"" + collection.$.Name + "\", id, undefined, \"PATCH\", entity)"
        });
    }
    if (collection.$["sap:deletable"]) {
        rt.push({
            name: "deleteSingle" + entityName,
            parameters: [
                {
                    name: "id",
                    type: "string"
                }
            ],
            return: "Promise<string>",
            body: "return odata.request(\"" + collection.$.Name + "\", id, undefined ,\"DELETE\")"
        });
    }
    return rt;
}
exports.parseMetaCRUDFunctionFrom = parseMetaCRUDFunctionFrom;
