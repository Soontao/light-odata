import "isomorphic-fetch";
import { ODataQueryParam, HTTPMethod } from "./types";
export declare class OData {
    private metadataUri;
    private requestPrefix;
    private credential;
    private csrfToken;
    private commonHeader;
    private requestUrlRewrite;
    constructor(metadataUri: string, credential?: {
        username: string;
        password: string;
    }, headers?: any, urlRewrite?: (string) => string);
    getCsrfToken(): Promise<string>;
    requestUri(uri: string, queryParams?: ODataQueryParam, method?: HTTPMethod, body?: any): Promise<any | string>;
    request(collection: string, id?: string, queryParams?: ODataQueryParam, method?: HTTPMethod, entity?: any): Promise<Object | string>;
}
