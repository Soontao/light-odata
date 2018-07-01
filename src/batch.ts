
import { split, filter, isEmpty, slice, map, join, flatten, concat, startsWith } from "lodash";
import { parseResponse } from "http-string-parser";
import { v4 } from "uuid";

export interface ParsedResponse {
  text: () => Promise<string>;
  json: () => Promise<any>;
  status: number;
  headers: { [key: string]: string };
  statusText: string;
}

export interface BatchRequest {
  /**
   * for odata batch request, please give a relative path from odata endpoint
   */
  url: string;
  init?: RequestInit;
}

export const formatHttpRequestString = (u: string, r: RequestInit) => {
  return join(
    [
      `${r.method || "GET"} ${u} HTTP/1.1`,
      `${join(map(r.headers, (v, k) => `${k}: ${v}`), "\n")}`,
      `${r.body ? "\n" + r.body : ""}`,
    ], "\n"
  )
}

export const nonGetAndGetMethodRequest = (requests: BatchRequest[]) => {
  const getRequests = filter(requests, rs => (rs.init.method || "GET") === "GET");
  const nonGetRequests = filter(requests, rs => (rs.init.method || "GET") !== "GET");
  return {
    getRequests,
    nonGetRequests,
  }
}

export const formatBatchRequest = (requests: BatchRequest[], boundary: string) => {
  return join(
    concat(
      map(requests,
        r => {
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
              "\n"
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
              "\n"
            )
          }
        }
      ),
      `--${boundary}--`
    ),
    "\n"
  )

}

export const filterNoUseLines = (lines: string[]) => {
  return filter(lines, line => !isEmpty(line) && line !== "--\n" && line !== "--")
}

export const parseResponse2 = async (httpResponseString: string): Promise<ParsedResponse> => {
  const response = parseResponse(httpResponseString);
  const rt: ParsedResponse = {
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

export const parseMultiPartContent = async (multipartBodyString: string, boundaryString: string): Promise<ParsedResponse[]> => {
  if (multipartBodyString && boundaryString) {
    const parts = split(multipartBodyString, `--${boundaryString}`)
    const meaningfulParts = slice(parts, 1, parts.length - 1)
    return flatten(await Promise.all(map(meaningfulParts, async p => {
      var response = await parseResponse2(p)
      var contentType = response.headers["Content-Type"]
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