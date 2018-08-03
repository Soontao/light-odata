/**
 * unreadable string generator
 */

import { map, filter, startsWith, join, uniqBy } from "lodash";
import { MetaClass, MetaFunction } from "./meta_js";
import { parseEntityCRUDFunctionsMap, ODataMetadata, parseMetaClassFromDefault, parseMetaCRUDFunctionFromDefault, ODataEntityNavigationProperty } from ".";
import { CliOption } from "../cli/type";

export function generateAllDefault(meta: ODataMetadata, options?: CliOption) {
  let out = ""
  out += generateCommonImportString(options.uri, options.user, options.pass)
  out += parseMetaClassFromDefault(meta).map(c => generateClassString(c)).join("\n")
  out += parseMetaCRUDFunctionFromDefault(meta).map(f => generateFunctionString(f)).join("\n")
  out += generateOperationObject(meta)
  return out
}

export function generateCommonImportString(uri: string, user: string = "", pass: string = "") {
  return `// eslint-disable-next-line
import { OData, ODataQueryParam, ODataFilter, C4CODataResult, C4CEntity, DeferredNavigationProperty, C4CODataSingleResult } from "c4codata";

const metadataUri = "${uri}"
// set object value to change odata credential
const initCredential = { username: "${user}", password: "${pass}" }
export const odata = new OData(metadataUri, initCredential);
`
}

export function generateSeprateIndexFile(classes: MetaClass[]) {
  return join(
    map(
      uniqBy(classes, c => c.name), // remove duplicated class name, for example CodeList
      c => `export * from "./${c.name}"`),
    "\n"
  )
}

export function generateSeprateODataFile(uri: string, user: string = "", pass: string = "") {
  return join(
    [
      'import { OData } from "c4codata"',
      `const initCredential = { username: "${user}", password: "${pass}" }`,
      `const metadataUri = "${uri}"`,
      'export const odata = new OData(metadataUri, initCredential);',
    ],
    "\n"
  )
}

export function generateSeprateClassString(clazz: MetaClass, functionsString = "", typeString = "") {
  return join(
    [
      'import { C4CODataResult, C4CEntity, DeferredNavigationProperty, C4CODataSingleResult } from "c4codata"',
      'import { odata } from "./odata"',
      join(
        map(
          filter(clazz.field, f => startsWith(f.type, "DeferredNavigationProperty")),
          ifield => {
            const { $: { ToRole } } = (<ODataEntityNavigationProperty>ifield.originProperty);
            return `import { ${ToRole} } from "./${ToRole}"`
          }),
        "\n"
      ),
      generateClassString(clazz),
      typeString,
      functionsString,
    ],
    "\n"
  )
}

export function generateClassString(clazz: MetaClass) {
  return `
/**
 * ${clazz.name}
 * 
 * @class ${clazz.name}
 */
${clazz.exported ? "export " : ""}class ${clazz.name} ${clazz.extends ? `extends ${clazz.extends} ` : ""}{
${clazz.field ? clazz.field.map(f => `
  /**
   * ${f.description ? f.description : ""}
   * @type {${f.type}} 
   */
  ${f.static ? "static " : ""}${f.name}${f.value ? ` = ${f.value}` : ""}`).join("\n") : ""}
${clazz.method ? clazz.method.map(m => `
  /**
   * ${m.description ? m.description : ""}
${m.parameters ? m.parameters.map(p => `   * @param {${p.type ? p.type : "any"}} ${p.name} `).join("\n") : ""}
${m.return ? `   * @returns {m.return}` : ""}
   */
  ${m.static ? "static " : ""}${m.name}(${m.parameters ? m.parameters.map(p => p.name).join(", ") : ""}) {
    ${m.body ? m.body : ""}
  }
`).join("\n") : ""}
}`
}

export function generateFunctionsString(funcs: MetaFunction[]) {
  return join(
    map(funcs, f => generateFunctionString(f)),
    "\n"
  )
}

export function generateFunctionString(func: MetaFunction) {
  return `
/**
 * ${func.name}
 * ${func.description ? func.description : ""}
${func.parameters ? func.parameters.map(p => ` * @param {${p.type ? p.type : "any"}} ${p.name} `).join("\n") : ""}
${func.return ? ` * @returns {${func.return}}` : ""}
 */
${func.exported ? "export " : ""}function ${func.name}(${func.parameters ? func.parameters.map(p => p.name).join(", ") : ""}) {
  ${func.body ? func.body : ""}
}
`
}

export function generateCRUDFunctionDefault(metaFunctions: MetaFunction[]) {
  return metaFunctions.map(f => generateFunctionString(f)).join()
}

export function generateOperationObject(meta: ODataMetadata): string {
  return `
export const CollectionOperation = {
${map(parseEntityCRUDFunctionsMap(meta), (m, k) => `  ${k}: {
${map(m, item => `    ${item}`).join(",\n")}
  }`).join(",\n")}
}  
`
}