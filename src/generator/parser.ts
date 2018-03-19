import { parseString } from "xml2js";
import { ODataMetadata, ODataEntityType, ODataCollection } from "./meta_odata";
import { MetaClass, MetaFunction, ClassField, ClassMethod } from "./meta_js";
import { reduce, concat, map, filter, endsWith, assign } from "lodash";

export function getEntityTypesDefault(meta: ODataMetadata) {
  return meta["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityType
}

export function getEntityCollectionDefault(meta: ODataMetadata) {
  return meta["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityContainer[0].EntitySet
}

export function getEntityCollectionByEntityType(meta: ODataMetadata, entityType: ODataEntityType) {
  // ignore schema namespace
  return filter(getEntityCollectionDefault(meta), c => endsWith(c.$.EntityType, entityType.$.Name))
}

export function getEntityTypeByEntityCollection(meta: ODataMetadata, collection: ODataCollection) {
  // ignore schema namespace
  return filter(getEntityTypesDefault(meta), t => endsWith(collection.$.EntityType, t.$.Name))
}


export function parseODataMetadata(file_str: string) {
  return new Promise<ODataMetadata>((resolve, reject) => {
    parseString(file_str, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

export function parseMetaClassFromDefault(metadata: ODataMetadata): MetaClass[] {
  return parseMetaClassFrom(metadata, getEntityTypesDefault(metadata))
}

export function parseMetaClassFrom(meta: ODataMetadata, entityTypes: ODataEntityType[]): MetaClass[] {
  return map(entityTypes, entity => {
    const entityTypeCollections = getEntityCollectionByEntityType(meta, entity)
    return {
      name: entity.$.Name,
      field: concat<ClassField>(
        entity.Property.map(p => ({ name: p.$.Name, type: p.$.Type, description: p.$["sap:label"] })),
        entity.NavigationProperty ? entity.NavigationProperty.map(n =>
          ({ name: n.$.Name, type: `DeferredNavigationProperty|${n.$.ToRole}|${n.$.ToRole}[]` })
        ) : []
      ),
      exported: true,
      extends: "C4CEntity"
    }
  })
}

export function parseEntityCRUDFunctionsMap(metadata: ODataMetadata): {
  [entity: string]: string[]
} {
  const collections = getEntityCollectionDefault(metadata)
  return reduce(collections, (pre, c) => assign(pre, {
    [getEntityTypeByEntityCollection(metadata, c)[0].$.Name]: concat(pre[getEntityTypeByEntityCollection(metadata, c)[0].$.Name] || [], map(parseMetaCRUDFunctionFrom(c), f => f.name))
  }), {})
}

export function parseMetaCRUDFunctionFromDefault(metadata: ODataMetadata): MetaFunction[] {
  const collections = getEntityCollectionDefault(metadata)
  return reduce(collections, (pre, c) => concat(pre, parseMetaCRUDFunctionFrom(c)), [])
}

export function parseMetaCRUDFunctionFrom(collection: ODataCollection): MetaFunction[] {
  let rt: MetaFunction[] = []
  let entityName = collection.$.EntityType.split(".").pop()
  let name = collection.$.Name
  rt.push({
    name: `read${name}`,
    parameters: [{ name: "params", type: "ODataQueryParam" }],
    return: `Promise<C4CODataResult<${entityName}>>`,
    body: `return C4CODataResult.fromRequestResult(odata.request("${collection.$.Name}", undefined, params), ${entityName})`,
    exported: true
  })
  rt.push({
    name: `readSingle${name}`,
    parameters: [
      { name: "id", type: "string", description: "entity uuid" },
      { name: "params", type: "ODataQueryParam", description: "OData param" }
    ],
    return: `Promise<C4CODataSingleResult<${entityName}>>`,
    body: `return C4CODataSingleResult.fromRequestResult(odata.request("${collection.$.Name}", id, params), ${entityName})`,
    exported: true
  })
  if (collection.$["sap:creatable"] == "true") {
    rt.push({
      name: `create${name}`,
      parameters: [
        { name: "entity", type: entityName }
      ],
      return: `Promise<C4CODataSingleResult<${entityName}>>`,
      body: `return C4CODataSingleResult.fromRequestResult(odata.request("${collection.$.Name}", undefined, undefined, "POST", entity), ${entityName})`,
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
      return: `Promise<void>`,
      body: `return C4CODataSingleResult.fromRequestResult(odata.request("${collection.$.Name}", id, undefined, "PATCH", entity), ${entityName})`,
      exported: true
    })
    // rt.push({
    //   name: `replace${name}`,
    //   description: "replace a entity",
    //   parameters: [
    //     { name: "id", type: "string" },
    //     { name: "entity", type: entityName, description: "part of entity for updating" }
    //   ],
    //   return: `Promise<C4CODataSingleResult<${entityName}>>`,
    //   body: `return C4CODataSingleResult.fromRequestResult(odata.request("${collection.$.Name}", id, undefined, "PUT", entity), ${entityName})`,
    //   exported: true
    // })
  }
  if (collection.$["sap:deletable"] == "true") {
    rt.push({
      name: `deleteSingle${name}`,
      parameters: [{ name: "id", type: "string" }],
      return: `Promise<void>`,
      body: `return odata.request("${collection.$.Name}", id, undefined ,"DELETE")`,
      exported: true
    })
  }
  return rt;
}