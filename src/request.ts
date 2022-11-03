import { attempt } from "@newdash/newdash/attempt";
import { startsWith } from "@newdash/newdash/startsWith";
import type { RequestInit } from "node-fetch";
import type { FetchProxy } from "./types";

export const S_X_CSRF_TOKEN = "x-csrf-token";

export const S_CONTENT_TYPE = "Content-Type";

export const defaultProxy: FetchProxy = async (url: string, init?: RequestInit) => {
  const response = await fetch(url, init as any);

  let content: any = await response.text();

  if (response.headers?.has(S_CONTENT_TYPE) && startsWith(response.headers?.get(S_CONTENT_TYPE), "application/json")) {
    const jsonResult = attempt(JSON.parse, content);
    // supress error
    if (!(jsonResult instanceof Error)) { content = jsonResult; }
  }

  return {
    content,
    response,
  };
};

export const DEFULAT_HEADERS = {
  "Accept": "application/json",
  [S_CONTENT_TYPE]: "application/json"
};

export { OData } from "./odata";

