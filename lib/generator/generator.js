"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateCommonImportString(uri, user, pass) {
    return "import { OData, ODataQueryParam, ODataFilter, C4CODataResult, C4CEntity, DeferredNavigationProperty } from \"./src\";\n\nconst odata = new OData(\"" + uri + "\", { username: \"" + user + "\", password: \"" + pass + "\" });\n";
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
    return "\n/**\n * " + clazz.name + "\n * \n * @class " + clazz.name + "\n */\n" + (clazz.exported ? "export " : "") + "class " + clazz.name + " " + (clazz.extends ? "extends " + clazz.extends + " " : "") + "{\n" + (clazz.field ? clazz.field.map(function (f) { return "\n  /**\n   * " + (f.description ? f.description : "") + "\n   * @type {" + f.type + "} \n   */\n  " + f.name; }).join("\n") : "") + "\n" + (clazz.method ? clazz.method.map(function (m) { return "\n  /**\n   * " + (m.description ? m.description : "") + "\n" + (m.parameters ? m.parameters.map(function (p) { return "   * @param {" + (p.type ? p.type : "any") + "} " + p.name + " "; }).join("\n") : "") + "\n   * @returns {" + (m.return ? m.return : "any") + "}\n   */\n  " + m.name + "(" + (m.parameters ? m.parameters.map(function (p) { return p.name; }).join(", ") : "") + ") {\n    " + (m.body ? m.body : "") + "\n  }\n"; }).join("\n") : "") + "\n}";
}
exports.generateClassString = generateClassString;
function generateFunctionString(func) {
    return "\n/**\n * " + func.name + "\n * " + (func.description ? func.description : "") + "\n" + (func.parameters ? func.parameters.map(function (p) { return " * @param {" + (p.type ? p.type : "any") + "} " + p.name + " "; }).join("\n") : "") + "\n * @returns {" + (func.return ? func.return : "any") + "}\n */\n" + (func.exported ? "export " : "") + "function " + func.name + "(" + (func.parameters ? func.parameters.map(function (p) { return p.name; }).join(", ") : "") + ") {\n  " + (func.body ? func.body : "") + "\n}\n";
}
exports.generateFunctionString = generateFunctionString;
function generateCRUDFunctionDefault(metaFunctions) {
    return metaFunctions.map(function (f) { return generateFunctionString(f); }).join();
}
exports.generateCRUDFunctionDefault = generateCRUDFunctionDefault;
