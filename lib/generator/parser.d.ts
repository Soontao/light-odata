import { ODataMetadata, ODataEntityType, ODataCollection } from "./meta_odata";
import { MetaClass, MetaFunction } from "./meta_js";
export declare function getEntityTypesDefault(meta: ODataMetadata): ODataEntityType[];
export declare function getEntityCollectionDefault(meta: ODataMetadata): ODataCollection[];
export declare function getEntityCollectionByEntityType(meta: ODataMetadata, entityType: ODataEntityType): ODataCollection[];
export declare function getEntityTypeByEntityCollection(meta: ODataMetadata, collection: ODataCollection): ODataEntityType[];
export declare function parseODataMetadata(file_str: string): Promise<ODataMetadata>;
export declare function parseMetaClassFromDefault(metadata: ODataMetadata): MetaClass[];
export declare function parseMetaClassFrom(meta: ODataMetadata, entityTypes: ODataEntityType[]): MetaClass[];
export declare function parseEntityCRUDFunctionsMap(metadata: ODataMetadata): {
    [entity: string]: string[];
};
export declare function parseMetaCRUDFunctionFromDefault(metadata: ODataMetadata): MetaFunction[];
export declare function parseMetaCRUDFunctionFrom(collection: ODataCollection): MetaFunction[];
