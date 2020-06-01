import { encode } from "./base64";

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
  return { Authorization: "Basic " + encode(`${user}:${password}`) };
}
