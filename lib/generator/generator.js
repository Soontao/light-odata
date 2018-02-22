"use strict";
/**
 * unreadable string generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var _1 = require(".");
function generateAllDefault(meta, options) {
    var out = "";
    out += generateCommonImportString(options.uri, options.user, options.pass);
    out += _1.parseMetaClassFromDefault(meta).map(function (c) { return generateClassString(c); }).join("\n");
    out += _1.parseMetaCRUDFunctionFromDefault(meta).map(function (f) { return generateFunctionString(f); }).join("\n");
    out += generateOperationObject(meta);
    return out;
}
exports.generateAllDefault = generateAllDefault;
function generateCommonImportString(uri, user, pass) {
    if (user === void 0) { user = ""; }
    if (pass === void 0) { pass = ""; }
    return "\nimport { OData, ODataQueryParam, ODataFilter, C4CODataResult, C4CEntity, DeferredNavigationProperty, C4CODataSingleResult } from \"c4codata\";\n\nconst metadataUri = \"" + uri + "\"\nconst initCredential = { username: \"" + user + "\", password: \"" + pass + "\" }\nexport const odata = new OData(metadataUri, credential);\n";
}
exports.generateCommonImportString = generateCommonImportString;
/**
 * Generate Class string from meta class
 *
 * @export
 * @param {MetaClass} clazz
 * @returns
 */
function generateClassString(clazz) {
    return "\n/**\n * " + clazz.name + "\n * \n * @class " + clazz.name + "\n */\n" + (clazz.exported ? "export " : "") + "class " + clazz.name + " " + (clazz.extends ? "extends " + clazz.extends + " " : "") + "{\n" + (clazz.field ? clazz.field.map(function (f) { return "\n  /**\n   * " + (f.description ? f.description : "") + "\n   * @type {" + f.type + "} \n   */\n  " + f.name + (f.value ? " = " + f.value : ""); }).join("\n") : "") + "\n" + (clazz.method ? clazz.method.map(function (m) { return "\n  /**\n   * " + (m.description ? m.description : "") + "\n" + (m.parameters ? m.parameters.map(function (p) { return "   * @param {" + (p.type ? p.type : "any") + "} " + p.name + " "; }).join("\n") : "") + "\n" + (m.return ? "   * @returns {m.return}" : "") + "\n   */\n  " + (m.static ? "static " : "") + m.name + "(" + (m.parameters ? m.parameters.map(function (p) { return p.name; }).join(", ") : "") + ") {\n    " + (m.body ? m.body : "") + "\n  }\n"; }).join("\n") : "") + "\n}";
}
exports.generateClassString = generateClassString;
function generateFunctionString(func) {
    return "\n/**\n * " + func.name + "\n * " + (func.description ? func.description : "") + "\n" + (func.parameters ? func.parameters.map(function (p) { return " * @param {" + (p.type ? p.type : "any") + "} " + p.name + " "; }).join("\n") : "") + "\n" + (func.return ? " * @returns {" + func.return + "}" : "") + "\n */\n" + (func.exported ? "export " : "") + "function " + func.name + "(" + (func.parameters ? func.parameters.map(function (p) { return p.name; }).join(", ") : "") + ") {\n  " + (func.body ? func.body : "") + "\n}\n";
}
exports.generateFunctionString = generateFunctionString;
function generateCRUDFunctionDefault(metaFunctions) {
    return metaFunctions.map(function (f) { return generateFunctionString(f); }).join();
}
exports.generateCRUDFunctionDefault = generateCRUDFunctionDefault;
function generateOperationObject(meta) {
    return "\nexport const CollectionOperation = {\n" + lodash_1.map(_1.parseEntityCRUDFunctionsMap(meta), function (m, k) { return "  " + k + ": {\n" + lodash_1.map(m, function (item) { return "    " + item; }).join(",\n") + "\n  }"; }).join(",\n") + "\n}  \n";
}
exports.generateOperationObject = generateOperationObject;
