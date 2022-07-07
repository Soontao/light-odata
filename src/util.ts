import { encode } from "./base64";
import { FrameworkError } from "./errors";
import { ODataKeyPredicate, ODataValueObject } from "./types";


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
    const r1 = /\/Date\(([+|-]?\d+)\)\//g.exec(dateString);
    if (r1 !== null && r1[1] !== undefined) {
      return new Date(parseInt(r1[1]));
    }
  }
  throw new Error("date/datetime format is not correct");
}

/**
 * FormatODataDateTimedate (OData V2)
 *
 * format date to `/Date(1512691200000)/` format
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

/**
 * convert the odata key predicate object/value to string
 *
 * @param key
 *
 * @example
 *
 * ```ts
 * formatId(1) // => String('(1)')
 * formatId({UUID:'xxx'}) // => String('(UUID='xxx')')
 * ```
 */
export function formatId(key: ODataKeyPredicate): string {
  let rt = "";
  switch (typeof key) {
    // for compound key like
    // Alphabetical_list_of_products(CategoryName='Beverages',Discontinued=false,ProductID=1,ProductName='Chai')
    case "object":
      if (key instanceof ODataValueObject) {
        return `(${key.toString()})`;
      }
      // for plain object
      const compoundId = Object.entries(key).map((kv) => {
        const k = kv[0];
        const v = kv[1];
        switch (typeof v) {
          case "string":
            return `${k}='${v}'`;
          case "number":
            return `${k}=${v}`;
          case "boolean":
            return `${k}=${v}`;
          default:
            if (v === null) {
              return `${k}=null`;
            }
            if (v instanceof ODataValueObject) {
              return `${k}=${v.toString()}`;
            }
            // other type will be removed
            return "";
        }
      }).filter((v) => v).join(",");
      rt = `(${compoundId})`;
      break;
    case "number":
      rt = `(${key})`;
      break;
    case "string":
      rt = `('${key}')`;
      break;
    case "undefined":
      break;
    default:
      throw new FrameworkError(`Not supported ObjectID type ${typeof key} for request`);
  }
  return rt;
}
