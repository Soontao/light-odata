import { parseString } from "xml2js";
import { ODataMetadata, ODataEntityType, ODataCollection } from "./meta_odata";
import { MetaClass, MetaFunction } from "./meta_js";
import { reduce, concat } from "lodash";

export function parseODataMetadata(file_str: string, cb: (err: Error, metadata: ODataMetadata) => void) {
  parseString(file_str, function (err, result) {
    cb(err, result)
  })
}

export function parseMetaClassFromDefault(metadata: ODataMetadata): MetaClass[] {
  return parseMetaClassFrom(metadata["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityType)
}

export function parseMetaClassFrom(entityTypes: ODataEntityType[]): MetaClass[] {
  return entityTypes.map(entity => ({
    name: entity.$.Name,
    field: concat(
      entity.Property.map(p => ({ name: p.$.Name, type: p.$.Type, description: p.$["sap:label"] })),
      entity.NavigationProperty ? entity.NavigationProperty.map(n =>
        ({ name: n.$.Name, type: `DeferredNavigationProperty|${n.$.ToRole}|${n.$.ToRole}[]` })
      ) : []
    ),
    exported: true,
    extends: "C4CEntity"
  }))
}

export function parseMetaCRUDFunctionFromDefault(metadata: ODataMetadata): MetaFunction[] {
  const collections = metadata["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityContainer[0].EntitySet;
  return reduce(collections, (pre, c) => concat(pre, parseMetaCRUDFunctionFrom(c)), [])
}

export function parseMetaCRUDFunctionFrom(collection: ODataCollection): MetaFunction[] {
  let rt: MetaFunction[] = []
  let entityName = collection.$.EntityType.split(".").pop()
  let name = collection.$["sap:label"] || collection.$.Name
  rt.push({
    name: `read${name}`,
    parameters: [{ name: "params", type: "ODataQueryParam" }],
    return: `Promise<C4CODataResult<${entityName}>>`,
    body: `return odata.request("${collection.$.Name}", undefined, params)`,
    exported: true
  })
  rt.push({
    name: `readSingle${name}`,
    parameters: [
      { name: "id", type: "string" },
      { name: "params", type: "ODataQueryParam" }
    ],
    return: `Promise<C4CODataResult<${entityName}>>`,
    body: `return odata.request("${collection.$.Name}", id, params)`,
    exported: true
  })
  if (collection.$["sap:creatable"] == "true") {
    rt.push({
      name: `create${name}`,
      parameters: [
        { name: "entity", type: entityName }
      ],
      return: `Promise<${entityName}>`,
      body: `return odata.request("${collection.$.Name}", undefined, undefined, "POST", entity)`,
      exported: true
    })
  }
  if (collection.$["sap:updatable"] == "true") {
    rt.push({
      name: `update${name}`,
      parameters: [
        { name: "id", type: "string" },
        { name: "entity", type: entityName, description: "part of entity for updating" }
      ],
      return: `Promise<${entityName}>`,
      body: `return odata.request("${collection.$.Name}", id, undefined, "PATCH", entity)`,
      exported: true
    })
    rt.push({
      name: `replace${name}`,
      description: "replace a entity",
      parameters: [
        { name: "id", type: "string" },
        { name: "entity", type: entityName, description: "part of entity for updating" }
      ],
      return: `Promise<${entityName}>`,
      body: `return odata.request("${collection.$.Name}", id, undefined, "PUT", entity)`,
      exported: true
    })
  }
  if (collection.$["sap:deletable"] == "true") {
    rt.push({
      name: `deleteSingle${name}`,
      parameters: [{ name: "id", type: "string" }],
      return: `Promise<string>`,
      body: `return odata.request("${collection.$.Name}", id, undefined ,"DELETE")`,
      exported: true
    })
  }
  return rt;
}