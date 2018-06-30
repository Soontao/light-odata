
import { split, filter, isEmpty, slice, map, drop, join, concat } from "lodash";
import { parseResponse } from "http-string-parser";
import { v4 } from "uuid";

const URL = require("url-parse")

interface ParsedResponse {
  text: () => Promise<string>;
  json: () => Promise<any>;
  status: number;
  headers: { [key: string]: string };
  statusText: string;
}

interface Request {
  url: string;
  init?: RequestInit;
}

export const formatHttpRequestString = (u: string, r: RequestInit) => {
  const url = URL(u)
  return join(
    [
      `${r.method || "GET"} ${url.pathname}${url.query || ""} HTTP/1.1`,
      `${join(map(r.headers, (v, k) => `${k}: ${v}`), "\n")}`,
      `${r.body ? "\n" + r.body : ""}`,
    ], "\n"
  )
}

export const nonGetAndGetMethodRequest = (requests: Request[]) => {
  const getRequests = filter(requests, rs => (rs.init.method || "GET") === "GET");
  const nonGetRequests = filter(requests, rs => (rs.init.method || "GET") !== "GET");
  return {
    getRequests,
    nonGetRequests,
  }
}

export const generateBoundryString = () => {

}

export const formatBatchRequest = (requests: Request[], boundary: string) => {
  const changeset_uuid = v4();
  const { getRequests, nonGetRequests } = nonGetAndGetMethodRequest(requests)

  return join(
    concat(
      map(getRequests, r =>
        join(
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
      ),
      isEmpty(nonGetRequests)
        ? []
        : [
          `--${boundary}`,
          `Content-Type: multipart/mixed; boundary=${changeset_uuid}`,
          "",
          map(
            nonGetRequests,
            nr => join(
              [
                `--${changeset_uuid}`,
                "Content-Type: application/http",
                `Content-Transfer-Encoding: binary`,
                "",
                formatHttpRequestString(nr.url, nr.init),
                "",
              ],
              "\n"
            )
          ),
          `--${changeset_uuid}--`,
        ],
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

export const parseMultiPartContent = (resBody: string, boundaryString: string) => {
  if (resBody && boundaryString) {
    const parts = split(resBody, `--${boundaryString}`)
    const meaningfulParts = slice(parts, 1, parts.length - 1)
    // remove unused first & last part, and remove no use multipart lines, and parse http plain text
    return Promise.all(map(meaningfulParts, p => parseResponse2(join(drop(split(p, "\n\n")), "\n\n"))))
  } else {
    throw new Error("parameter lost")
  }
}