import "isomorphic-fetch";
import { ODataQueryParam, HTTPMethod, Credential, PlainODataResponse } from "./types";
export declare class OData {
    private metadataUri;
    private odataEnd;
    private credential;
    private csrfToken;
    private commonHeader;
    private requestUrlRewrite;
    constructor(metadataUri: string, credential?: Credential, headers?: any, urlRewrite?: (string) => string);
    setCredential(credential: Credential): void;
    getCsrfToken(): Promise<string>;
    cleanCsrfToken(): void;
    requestUri(uri: string, queryParams?: ODataQueryParam, method?: HTTPMethod, body?: any): Promise<PlainODataResponse>;
    request(collection: string, id?: string, queryParams?: ODataQueryParam, method?: HTTPMethod, entity?: any): Promise<PlainODataResponse>;
}
