import { Buffer } from "buffer";

export function ConvertDateFromODataTime(str: string) {
  return new Date(parseInt(str.replace(/[^\d.]/g, ""), 10));
}

export function GetAuthorizationPair(user: string, password: string) {
  return { Authorization: "Basic " + Buffer.from(`${user}:${password}`).toString("base64") };
}
