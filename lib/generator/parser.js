"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xml2js_1 = require("xml2js");
var lodash_1 = require("lodash");
function getEntityTypesDefault(meta) {
    return meta["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityType;
}
exports.getEntityTypesDefault = getEntityTypesDefault;
function getEntityCollectionDefault(meta) {
    return meta["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityContainer[0].EntitySet;
}
exports.getEntityCollectionDefault = getEntityCollectionDefault;
function getEntityCollectionByEntityType(meta, entityType) {
    // ignore schema namespace
    return lodash_1.filter(getEntityCollectionDefault(meta), function (c) { return lodash_1.endsWith(c.$.EntityType, entityType.$.Name); });
}
exports.getEntityCollectionByEntityType = getEntityCollectionByEntityType;
function getEntityTypeByEntityCollection(meta, collection) {
    // ignore schema namespace
    return lodash_1.filter(getEntityTypesDefault(meta), function (t) { return lodash_1.endsWith(collection.$.EntityType, t.$.Name); });
}
exports.getEntityTypeByEntityCollection = getEntityTypeByEntityCollection;
function parseODataMetadata(file_str) {
    return new Promise(function (resolve, reject) {
        xml2js_1.parseString(file_str, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}
exports.parseODataMetadata = parseODataMetadata;
function parseMetaClassFromDefault(metadata) {
    return parseMetaClassFrom(metadata, getEntityTypesDefault(metadata));
}
exports.parseMetaClassFromDefault = parseMetaClassFromDefault;
function parseMetaClassFrom(meta, entityTypes) {
    return lodash_1.map(entityTypes, function (entity) {
        var entityTypeCollections = getEntityCollectionByEntityType(meta, entity);
        return {
            name: entity.$.Name,
            field: lodash_1.concat({
                name: "_type",
                value: entity.$.Name,
                type: entity.$.Name
            }, {
                name: "_odata",
                type: "OData",
                value: "odata"
            }, entity.Property.map(function (p) { return ({ name: p.$.Name, type: p.$.Type, description: p.$["sap:label"] }); }), entity.NavigationProperty ? entity.NavigationProperty.map(function (n) {
                return ({ name: n.$.Name, type: "DeferredNavigationProperty|" + n.$.ToRole + "|" + n.$.ToRole + "[]" });
            }) : []),
            exported: true,
            extends: "C4CEntity"
        };
    });
}
exports.parseMetaClassFrom = parseMetaClassFrom;
function parseEntityCRUDFunctionsMap(metadata) {
    var collections = getEntityCollectionDefault(metadata);
    return lodash_1.reduce(collections, function (pre, c) {
        return lodash_1.assign(pre, (_a = {},
            _a[getEntityTypeByEntityCollection(metadata, c)[0].$.Name] = lodash_1.concat(pre[getEntityTypeByEntityCollection(metadata, c)[0].$.Name] || [], lodash_1.map(parseMetaCRUDFunctionFrom(c), function (f) { return f.name; })),
            _a));
        var _a;
    }, {});
}
exports.parseEntityCRUDFunctionsMap = parseEntityCRUDFunctionsMap;
function parseMetaCRUDFunctionFromDefault(metadata) {
    var collections = getEntityCollectionDefault(metadata);
    return lodash_1.reduce(collections, function (pre, c) { return lodash_1.concat(pre, parseMetaCRUDFunctionFrom(c)); }, []);
}
exports.parseMetaCRUDFunctionFromDefault = parseMetaCRUDFunctionFromDefault;
function parseMetaCRUDFunctionFrom(collection) {
    var rt = [];
    var entityName = collection.$.EntityType.split(".").pop();
    var name = collection.$.Name;
    rt.push({
        name: "read" + name,
        parameters: [{ name: "params", type: "ODataQueryParam" }],
        return: "Promise<C4CODataResult<" + entityName + ">>",
        body: "return C4CODataResult.fromRequestResult(odata.request(\"" + collection.$.Name + "\", undefined, params), " + entityName + ")",
        exported: true
    });
    rt.push({
        name: "readSingle" + name,
        parameters: [
            { name: "id", type: "string" },
            { name: "params", type: "ODataQueryParam" }
        ],
        return: "Promise<C4CODataSingleResult<" + entityName + ">>",
        body: "return C4CODataSingleResult.fromRequestResult(odata.request(\"" + collection.$.Name + "\", id, params), " + entityName + ")",
        exported: true
    });
    if (collection.$["sap:creatable"] == "true") {
        rt.push({
            name: "create" + name,
            parameters: [
                { name: "entity", type: entityName }
            ],
            return: "Promise<C4CODataSingleResult<" + entityName + ">>",
            body: "return C4CODataSingleResult.fromRequestResult(odata.request(\"" + collection.$.Name + "\", undefined, undefined, \"POST\", entity), " + entityName + ")",
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
            return: "Promise<C4CODataSingleResult<" + entityName + ">>",
            body: "return C4CODataSingleResult.fromRequestResult(odata.request(\"" + collection.$.Name + "\", id, undefined, \"PATCH\", entity), " + entityName + ")",
            exported: true
        });
        rt.push({
            name: "replace" + name,
            description: "replace a entity",
            parameters: [
                { name: "id", type: "string" },
                { name: "entity", type: entityName, description: "part of entity for updating" }
            ],
            return: "Promise<C4CODataSingleResult<" + entityName + ">>",
            body: "return C4CODataSingleResult.fromRequestResult(odata.request(\"" + collection.$.Name + "\", id, undefined, \"PUT\", entity), " + entityName + ")",
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
