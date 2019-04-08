import { Buffer } from "buffer";
import { attempt, isError } from "lodash";

/**
 * ConvertDateFromODataTime
 * 
 * @param dateString date string, format is /Date(1512691200000)/
 */
export function ConvertDateFromODataTime(dateString: string = "0") {
  return new Date(parseInt(dateString.replace(/[^\d.]/g, ""), 10));
}

/**
 * FormatODataDateTimedate
 * 
 * format date to /Date(1512691200000)/ format
 */
export function FormatODataDateTimedate(date: Date = new Date()) {
  return `/Date(${date.getTime()})/`
}

export function GetAuthorizationPair(user: string, password: string) {
  return { Authorization: "Basic " + Buffer.from(`${user}:${password}`).toString("base64") };
}

export function isJSONString(str: string = "") {
  return !isError(attempt(JSON.parse, str));
}