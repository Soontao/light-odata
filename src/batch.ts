import { split, slice, map, join, flatten, concat, startsWith } from "lodash";

import { parseResponse } from "http-string-parser";
import { v4 } from "uuid";

const HTTP_EOL = "\r\n"

/**
 * parsed mock batch response
 */
export interface ParsedResponse<T> {
  text: () => Promise<string>;
  json: () => Promise<T>;
  status: number;
  headers: { [key: string]: string };
  statusText: string;
}

/**
 * batch request
 */
export interface BatchRequest {
  /**
   * for odata batch request, please give a relative path from odata endpoint
   */
  url: string;
  init?: RequestInit;
}

export const formatHttpRequestString = (u: string, r: any) => {
  return join(
    [
      `${r.method || "GET"} ${u} HTTP/1.1`,
      `${join(map(r.headers, (v, k) => `${k}: ${v}`), HTTP_EOL)}`,
      `${r.body ? HTTP_EOL + r.body : ""}`,
    ], HTTP_EOL
  )
}


/**
 * format batch request string body
 * 
 * @param requests 
 * @param boundary a given boundary id
 */
export const formatBatchRequest = (requests: BatchRequest[], boundary: string) => {
  return join(
    concat(
      map(requests, r => {
        if (r.init.method === "GET" || !r.init.method) {
          return join(
            [
              `--${boundary}`,
              "Content-Type: application/http",
              `Content-Transfer-Encoding: binary`,
              "",
              formatHttpRequestString(r.url, r.init),
              "",
            ],
            HTTP_EOL
          )
        } else {
          const generated_uuid = v4();
          return join(
            [
              `--${boundary}`,
              `Content-Type: multipart/mixed; boundary=${generated_uuid}`,
              "",
              `--${generated_uuid}`,
              "Content-Type: application/http",
              `Content-Transfer-Encoding: binary`,
              "",
              formatHttpRequestString(r.url, r.init),
              "",
              `--${generated_uuid}--`,
            ],
            HTTP_EOL
          )
        }
      }
      ),
      `--${boundary}--`
    ),
    HTTP_EOL
  )

}

/**
 * parse stringify response in multipart
 */
export const parseResponse2 = async (httpResponseString: string): Promise<ParsedResponse<any>> => {
  const response = parseResponse(httpResponseString);
  const rt: ParsedResponse<any> = {
    json: async () => {
      return JSON.parse(response.body)
    },
    text: async () => {
      return response.body
    },
    headers: response.headers,
    status: parseInt(response.statusCode, 10),
    statusText: response.statusMessage,
  };
  return rt;
}

export const parseMultiPartContent = async (multipartBody: string, boundaryId: string): Promise<ParsedResponse<any>[]> => {
  if (multipartBody && boundaryId) {
    // split
    const parts = split(multipartBody, `--${boundaryId}`)
    // remote head and tail parts
    const meaningfulParts = slice(parts, 1, parts.length - 1)
    return flatten(await Promise.all(map(meaningfulParts, async p => {
      var response = await parseResponse2(p)
      var contentType = response.headers["Content-Type"]
      // recursive parse changeset response
      if (startsWith(contentType, "multipart/mixed")) {
        const innerBoundaryString = split(contentType, "=").pop();
        return parseMultiPartContent(await response.text(), innerBoundaryString);
      } else if (contentType === "application/http") {
        return parseResponse2(await response.text())
      }
    })))
  } else {
    throw new Error("parameter lost")
  }
}