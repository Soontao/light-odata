import { MetaClass, MetaFunction } from "./meta_js";
export declare function generateCommonImportString(uri: string, user: string, pass: string): string;
/**
 * Generate Class string from meta class
 *
 * @export
 * @param {MetaClass} clazz
 * @returns
 */
export declare function generateClassString(clazz: MetaClass): string;
export declare function generateFunctionString(func: MetaFunction): string;
export declare function generateCRUDFunctionDefault(metaFunctions: MetaFunction[]): string;
