import { ODataMetadata, ODataEntityType, ODataCollection } from "./meta_odata";
import { MetaClass, MetaFunction } from "./meta_js";
export declare function parseODataMetadata(file_str: string, cb: (err: Error, metadata: ODataMetadata) => void): void;
export declare function parseMetaClassFromDefault(metadata: ODataMetadata): MetaClass[];
export declare function parseMetaClassFrom(entityTypes: ODataEntityType[]): MetaClass[];
export declare function parseMetaCRUDFunctionFromDefault(metadata: ODataMetadata): MetaFunction[];
export declare function parseMetaCRUDFunctionFrom(collection: ODataCollection): MetaFunction[];
