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
        field: lodash_1.concat(entity.Property.map(function (p) { return ({ name: p.$.Name, type: p.$.Type, description: p.$["sap:label"] }); }), entity.NavigationProperty ? entity.NavigationProperty.map(function (n) {
            return ({ name: n.$.Name, type: "DeferredNavigationProperty|" + n.$.ToRole + "|" + n.$.ToRole + "[]" });
        }) : []),
        exported: true,
        extends: "C4CEntity"
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
    var name = collection.$["sap:label"] || collection.$.Name;
    rt.push({
        name: "read" + name,
        parameters: [{ name: "params", type: "ODataQueryParam" }],
        return: "Promise<C4CODataResult<" + entityName + ">>",
        body: "return odata.request(\"" + collection.$.Name + "\", undefined, params)",
        exported: true
    });
    rt.push({
        name: "readSingle" + name,
        parameters: [
            { name: "id", type: "string" },
            { name: "params", type: "ODataQueryParam" }
        ],
        return: "Promise<C4CODataResult<" + entityName + ">>",
        body: "return odata.request(\"" + collection.$.Name + "\", id, params)",
        exported: true
    });
    if (collection.$["sap:creatable"] == "true") {
        rt.push({
            name: "create" + name,
            parameters: [
                { name: "entity", type: entityName }
            ],
            return: "Promise<" + entityName + ">",
            body: "return odata.request(\"" + collection.$.Name + "\", undefined, undefined, \"POST\", entity)",
            exported: true
        });
    }
    if (collection.$["sap:updatable"] == "true") {
        rt.push({
            name: "update" + name,
            parameters: [
                { name: "id", type: "string" },
                { name: "entity", type: entityName, description: "part of entity for updating" }
            ],
            return: "Promise<" + entityName + ">",
            body: "return odata.request(\"" + collection.$.Name + "\", id, undefined, \"PATCH\", entity)",
            exported: true
        });
        rt.push({
            name: "replace" + name,
            description: "replace a entity",
            parameters: [
                { name: "id", type: "string" },
                { name: "entity", type: entityName, description: "part of entity for updating" }
            ],
            return: "Promise<" + entityName + ">",
            body: "return odata.request(\"" + collection.$.Name + "\", id, undefined, \"PUT\", entity)",
            exported: true
        });
    }
    if (collection.$["sap:deletable"] == "true") {
        rt.push({
            name: "deleteSingle" + name,
            parameters: [{ name: "id", type: "string" }],
            return: "Promise<string>",
            body: "return odata.request(\"" + collection.$.Name + "\", id, undefined ,\"DELETE\")",
            exported: true
        });
    }
    return rt;
}
exports.parseMetaCRUDFunctionFrom = parseMetaCRUDFunctionFrom;
