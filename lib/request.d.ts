import "isomorphic-fetch";
import { ODataQueryParam, HTTPMethod } from "./types";
export declare class OData {
    private metadataUri;
    private requestPrefix;
    private credential;
    private csrfToken;
    private commonHeader;
    constructor(metadataUri: string, credential?: {
        username: string;
        password: string;
    }, headers?: any);
    getCsrfToken(): Promise<string>;
    request(collection: string, id?: string, queryParams?: ODataQueryParam, method?: HTTPMethod, entity?: any): Promise<Object>;
}
