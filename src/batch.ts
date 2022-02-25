import concat from "@newdash/newdash/concat";
import flatten from "@newdash/newdash/flatten";
import join from "@newdash/newdash/join";
import slice from "@newdash/newdash/slice";
import startsWith from "@newdash/newdash/startsWith";
import { JsonBatchRequest, JsonBatchRequestBundle } from "@odata/parser";
import { parseResponse } from "http-string-parser";
import { RequestInit } from "node-fetch";
import { v4 } from "uuid";
import { FrameworkError } from "./errors";
import { BatchPlainODataResponse, BatchRequestOptions, ODataValueJSONReplacer } from "./types";
import { BatchPlainODataResponseV4, BatchRequestOptionsV4 } from "./types_v4";


const HTTP_EOL = "\r\n";

/**
 * parsed mock batch response
 */
export interface ParsedResponse<T = any> {
  text: () => Promise<string>;
  json: () => Promise<BatchPlainODataResponse<T>>;
  status: number;
  headers: { [key: string]: string };
  statusText: string;
}

/**
 * parsed mock batch response
 */
export interface ParsedResponseV4<T = any> {
  text: () => Promise<string>;
  json: () => Promise<BatchPlainODataResponseV4<T>>;
  status: number;
  headers: { [key: string]: string };
  statusText: string;
}


/**
 * batch request
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface BatchRequest<R = any> {
  /**
   * for odata batch request, please give a relative path from odata endpoint
   */
  url: string;
  init?: RequestInit & { body?: any };
  /**
   * original options
   */
  options?: BatchRequestOptions<any>;

}

export interface BatchRequestV4<R = any> extends BatchRequest<R> {
  /**
   * original options
   */
  options?: BatchRequestOptionsV4<any>;
}

export const formatHttpRequestString = (u: string, r: any): string => {
  const parts = [];

  parts.push(`${r.method || "GET"} ${u} HTTP/1.1`);

  Object.entries(r.headers).forEach(([k, v]) => {
    parts.push(`${k}: ${v}`);
  });

  switch (typeof r.body) {
    case "string":
      parts.push(HTTP_EOL);
      parts.push(r.body);
      break;
    case "object":
      parts.push(HTTP_EOL);
      parts.push(JSON.stringify(r.body, ODataValueJSONReplacer));
      break;
    case "undefined":
      parts.push("");
    default:
      break;
  }

  return parts.join(HTTP_EOL);
};


/**
 *
 * format batch request in json format (in OData V4.01 Spec)
 *
 * ref: https://github.com/Soontao/light-odata/issues/29
 *
 * @experimental
 * @param requests
 */
export const formatBatchRequestForOData401 = (requests: BatchRequestV4[] = []) => {
  const rt: JsonBatchRequestBundle = { requests: [] };
  requests.forEach((req, idx) => {

    const tmpBatchRequestItem: JsonBatchRequest = {
      id: req.options?.requestId ?? idx.toString(),
      // @ts-ignore
      method: req.init?.method?.toLocaleLowerCase(),
      url: req.url
    };
    if (req.init?.headers) {
      // @ts-ignore
      tmpBatchRequestItem.headers = req.init?.headers;
    }
    // TODO: convert payload with `ODataValueJSONReplacer`
    if (req.init?.body) {
      tmpBatchRequestItem.body = req.init.body;
    }
    if (req.options?.atomicityGroup) {
      tmpBatchRequestItem.atomicityGroup = req.options.atomicityGroup;
    }
    if (req.options?.dependsOn) {
      tmpBatchRequestItem.dependsOn = req.options.dependsOn;
    }

    rt.requests.push(tmpBatchRequestItem);
  });
  return rt;
};

/**
 * format batch request string body
 *
 * @param requests
 * @param boundary a given boundary id
 */
export const formatBatchRequest = (requests: BatchRequest[], boundary: string): string => join(
  concat(
    requests.map((r) => {
      if (r.init.method === "GET" || !r.init.method) {
        return join(
          [
            `--${boundary}`,
            "Content-Type: application/http",
            `Content-Transfer-Encoding: binary`,
            "",
            formatHttpRequestString(r.url, r.init),
            ""
          ],
          HTTP_EOL
        );
      }
      const generatedUuid = v4();
      return join(
        [
          `--${boundary}`,
          `Content-Type: multipart/mixed; boundary=${generatedUuid}`,
          "",
          `--${generatedUuid}`,
          "Content-Type: application/http",
          `Content-Transfer-Encoding: binary`,
          "",
          formatHttpRequestString(r.url, r.init),
          "",
          `--${generatedUuid}--`
        ],
        HTTP_EOL
      );

    }
    ),
    `--${boundary}--` as any
  ),
  HTTP_EOL
);

/**
 * parse stringify response in multipart
 */
export const parseResponse2 = async (httpResponseString: string): Promise<ParsedResponse<any>> => {
  const response = parseResponse(httpResponseString);
  const rt: ParsedResponse<any> = {
    json: async () => JSON.parse(response.body),
    text: async () => response.body,
    headers: response.headers,
    status: parseInt(response.statusCode, 10),
    statusText: response.statusMessage
  };
  return rt;
};

export const parseMultiPartContent = async (
  multipartBody: string,
  boundaryId: string
): Promise<ParsedResponse<any>[]> => {
  if (multipartBody && boundaryId) {
    // split
    const parts = multipartBody.split(`--${boundaryId}`);
    // remote head and tail parts
    const meaningfulParts = slice(parts, 1, parts.length - 1);
    return flatten(await Promise.all(meaningfulParts.map(async (p) => {
      const response = await parseResponse2(p);
      const contentType = response.headers["Content-Type"];
      // recursive parse changeset response
      if (startsWith(contentType, "multipart/mixed")) {
        const innerBoundaryString = contentType.split("=").pop();
        return parseMultiPartContent(await response.text(), innerBoundaryString);
      } else if (contentType === "application/http") {
        return parseResponse2(await response.text());
      }
    })));
  }
  throw new FrameworkError("parameter lost");

};


