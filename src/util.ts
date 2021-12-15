import { encode } from "./base64";

/**
 * ConvertDateFromODataTime (OData V2)
 *
 * @param dateString date string, format is /Date(1512691200000)/
 */
export function ConvertDateFromODataTime(dateString: any): Date {
  if (dateString instanceof Date) {
    return dateString;
  }
  if (typeof dateString === "string") {
    // thanks https://github.com/Soontao/light-odata/pull/412#issuecomment-993708386
    const r1 =  /\/Date\(([+|-]?\d+)\)\//g.exec(dateString);
    if (r1 !== null && r1[1] !== undefined) {
      return new Date(parseInt(r1[1]));
    }
  }
  throw new Error("date/datetime format is not correct");
}

/**
 * FormatODataDateTimedate (OData V2)
 *
 * format date to /Date(1512691200000)/ format
 */
export function FormatODataDateTimedate(date: Date = new Date()): string {
  return `/Date(${date.getTime()})/`;
}

export function GetAuthorizationPair(user: string, password: string): { Authorization: string } {
  return { Authorization: `Basic ${encode(`${user ?? ""}:${password ?? ""}`)}` };
}


export class SearchParams {

  private _store = new Map();

  public append(key: string, value: string): void {
    this._store.set(key, value);
  }

  public putAll(param: SearchParams) {
    if (param !== undefined && param instanceof SearchParams) {
      param._store.forEach((value, key) => {
        this._store.set(key, value);
      });
    }
  }

  public toString(): string {
    return Array.from(this._store.entries()).map(([key, value]) => `${key}=${value}`).join("&");
  }

}
