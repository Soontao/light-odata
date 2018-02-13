import { parseString } from "xml2js";
import { ODataMetadata, ODataEntityType, ODataCollection } from "../metadata";
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
    field: entity.Property.map(p => ({
      name: p.$.Name,
      type: p.$.Type,
      description: p.$["sap:label"]
    })),
    exported: true
  }))
}

export function parseMetaCRUDFunctionFromDefault(metadata: ODataMetadata): MetaFunction[] {
  const collections = metadata["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityContainer[0].EntitySet;
  return reduce(collections, (pre, c) => concat(pre, parseMetaCRUDFunctionFrom(c)), [])
}

export function parseMetaCRUDFunctionFrom(collection: ODataCollection): MetaFunction[] {
  let rt: MetaFunction[] = []
  let entityName = collection.$.EntityType.split(".").pop()
  rt.push({
    name: `read${entityName}`,
    parameters: [
      {
        name: "params",
        type: "ODataQueryParam"
      }
    ],
    return: `Promise<C4CODataResult<${entityName}>>`,
    body: `return odata.request("${collection.$.Name}", undefined, params)`
  })
  rt.push({
    name: `readSingle${entityName}`,
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
    return: `Promise<C4CODataResult<${entityName}>>`,
    body: `return odata.request("${collection.$.Name}", id, params)`
  })
  if (collection.$["sap:creatable"]) {
    rt.push({
      name: `create${entityName}`,
      parameters: [
        {
          name: "entity",
          type: entityName
        }
      ],
      return: `Promise<${entityName}>`,
      body: `return odata.request("${collection.$.Name}", undefined, undefined, "POST", entity)`
    })
  }
  if (collection.$["sap:updatable"]) {
    rt.push({
      name: `update${entityName}`,
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
      return: `Promise<${entityName}>`,
      body: `return odata.request("${collection.$.Name}", id, undefined, "PATCH", entity)`
    })
  }
  if (collection.$["sap:deletable"]) {
    rt.push({
      name: `deleteSingle${entityName}`,
      parameters: [
        {
          name: "id",
          type: "string"
        }
      ],
      return: `Promise<string>`,
      body: `return odata.request("${collection.$.Name}", id, undefined ,"DELETE")`
    })
  }
  return rt;
}