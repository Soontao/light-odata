import { parseString } from "xml2js";
import { ODataMetadata, ODataEntityType, ODataCollection } from "./meta_odata";
import { MetaClass, MetaFunction, ClassField, } from "./meta_js";
import { reduce, concat, map, filter, endsWith, assign, flatten, isEmpty } from "lodash";

// need refactor data services collection

export function getEntityTypesDefault(meta: ODataMetadata) {
  return meta["edmx:Edmx"]["edmx:DataServices"][0].Schema[0].EntityType
}

// need refactor data services collection

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

export const parseODataMetadataFromRemote = async (
  uri: string,
  headers,
  fetch
) => {
  const res = await fetch(uri, { headers, })
  if (res.status != 200) {
    throw new Error(`Response not correct, check your network & credential\nStatus:${res.status}\nHeaders:${JSON.stringify(res.headers)}`)
  }
  const body = await res.text()

  if (isEmpty(body)) {
    throw new Error(`${uri} response empty metadata`)
  }

  return await parseODataMetadata(body)
}


/**
 * parse odata metadata xml
 * 
 * @param metadataXmlString odata metadata xml string
 */
export function parseODataMetadata(metadataXmlString: string) {
  return new Promise<ODataMetadata>((resolve, reject) => {
    if (isEmpty(metadataXmlString)) {
      reject("not get acceptable odata metadata xml")
    } else {
      parseString(metadataXmlString, function (err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    }
  })
}

export function parseMetaClassFromOnlyClassDefault(metadata: ODataMetadata): MetaClass[] {
  return parseMetaClassFromOnlyClass(metadata, getEntityTypesDefault(metadata))
}

export function parseMetaClassFromDefault(metadata: ODataMetadata): MetaClass[] {
  return parseMetaClassFrom(metadata, getEntityTypesDefault(metadata))
}

export function parseSingleMetaClassFromOnlyClass(entity: ODataEntityType): MetaClass {
  return {
    name: entity.$.Name,
    field: concat<ClassField>(
      entity.Property.map(p => ({
        name: p.$.Name,
        type: p.$.Type,
        description: p.$["sap:label"],
        originProperty: p
      })),
      entity.NavigationProperty ? entity.NavigationProperty.map(n =>
        ({
          name: n.$.Name,
          type: `DeferredNavigationProperty|${n.$.ToRole}|${n.$.ToRole}[]`,
          originProperty: n
        })
      ) : []
    ),
    exported: true,
    extends: "C4CEntity",
    originEntity: entity
  }
}

export function parseSingleMetaClassFromOnlyType(entity: ODataEntityType): MetaClass {
  return {
    name: `${entity.$.Name}Type`,
    field: concat<ClassField>(
      entity.Property.map(p => ({
        name: p.$.Name,
        type: "string",
        value: `"${p.$.Name}"`,
        description: p.$["sap:label"],
        static: true,
        originProperty: p
      })),
      entity.NavigationProperty ? entity.NavigationProperty.map(n =>
        ({
          name: n.$.Name,
          type: n.$.ToRole,
          value: `"${n.$.Name}"`,
          static: true,
          originProperty: n
        })
      ) : []
    ),
    originEntity: entity,
    exported: true
  }
}

export function parseMetaClassFromOnlyClass(meta: ODataMetadata, entityTypes: ODataEntityType[]): MetaClass[] {
  return map(entityTypes, entity => parseSingleMetaClassFromOnlyClass(entity))
}

export function parseMetaClassFrom(meta: ODataMetadata, entityTypes: ODataEntityType[]): MetaClass[] {
  return concat(
    map(entityTypes, entity => parseSingleMetaClassFromOnlyClass(entity)),
    map(entityTypes, entity => parseSingleMetaClassFromOnlyType(entity))
  )
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

export function parseMetaCRUDFunctionByEntityName(metadata: ODataMetadata, entityName: string): MetaFunction[] {
  const collections = getEntityCollectionDefault(metadata)
  const collection = filter(collections, c => c.$.EntityType.split(".").pop() === entityName)
  if (collection.length > 0) {
    return concat(flatten(map(collection, c => parseMetaCRUDFunctionFrom(c))))
  } else {
    return [];
  }
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
    name: `bRead${name}`,
    parameters: [{ name: "params", type: "ODataQueryParam" }],
    body: `return odata.newBatchRequest({ collection: "${collection.$.Name}", params, method: "GET" })`,
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
  rt.push({
    name: `bReadSingle${name}`,
    parameters: [
      { name: "id", type: "string", description: "entity uuid" },
      { name: "params", type: "ODataQueryParam", description: "OData param" }
    ],
    body: `return odata.newBatchRequest({ collection: "${collection.$.Name}", params, id, method: "GET" })`,
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
    rt.push({
      name: `bCreate${name}`,
      parameters: [
        { name: "entity", type: entityName }
      ],
      body: `return odata.newBatchRequest({ collection: "${collection.$.Name}", params, id, entity, method: "POST" })`,
      exported: true
    })
  }
  if (collection.$["sap:updatable"] == "true") {
    rt.push({
      name: `update${name}`,
      parameters: [
        { name: "id", type: "string", description: `${entityName} UUID` },
        { name: "entity", type: entityName, description: "part of entity for updating" }
      ],
      return: `Promise<void>`,
      body: `return odata.request("${collection.$.Name}", id, undefined, "PATCH", entity)`,
      exported: true
    })
    rt.push({
      name: `bUpdate${name}`,
      parameters: [
        { name: "id", type: "string", description: `${entityName} UUID` },
        { name: "entity", type: entityName, description: "part of entity for updating" }
      ],
      body: `return odata.newBatchRequest({ collection: "${collection.$.Name}", id, entity, method: "PATCH" })`,
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
    rt.push({
      name: `bDeleteSingle${name}`,
      parameters: [{ name: "id", type: "string" }],
      body: `return odata.newBatchRequest({ collection: "${collection.$.Name}", id, method: "DELETE" })`,
      exported: true
    })
  }
  return rt;
}