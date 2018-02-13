import { forEach } from "lodash";
import { MetaClass, MetaFunction } from "./meta_js";
import { ODataEntityType, ODataEntityContainer, ODataCollection, OData } from "..";

export function generateCommonImportString(uri: string, user: string, pass: string) {
  return `import { OData, ODataQueryParam, ODataFilter, C4CODataResult } from "../src";

const odata = new OData("${uri}", { username: "${user}", password: "${pass}" });
`
}

/**
 * Generate Class string from meta class
 * 
 * @export
 * @param {MetaClass} clazz 
 * @returns 
 */
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
  ${f.name}`).join("\n") : ""}
${clazz.method ? clazz.method.map(m => `
  /**
   * ${m.description ? m.description : ""}
${m.parameters ? m.parameters.map(p => `   * @param {${p.type ? p.type : "any"}} ${p.name} `).join("\n") : ""}
   * @returns {${m.return ? m.return : "any"}}
   */
  ${m.name}(${m.parameters ? m.parameters.map(p => p.name).join(", ") : ""}) {
    ${m.body ? m.body : ""}
  }
`).join("\n") : ""}
}`
}

export function generateFunctionString(func: MetaFunction) {
  return `
/**
 * ${func.name}
 * ${func.description ? func.description : ""}
${func.parameters ? func.parameters.map(p => ` * @param {${p.type ? p.type : "any"}} ${p.name} `).join("\n") : ""}
 * @returns {${func.return ? func.return : "any"}}
 */
${func.exported ? "export " : ""}function ${func.name}(${func.parameters ? func.parameters.map(p => p.name).join(", ") : ""}) {
  ${func.body ? func.body : ""}
}
`
}

export function generateCRUDFunctionDefault(metaFunctions: MetaFunction[]) {
  return metaFunctions.map(f => generateFunctionString(f)).join()
}
