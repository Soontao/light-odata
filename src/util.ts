import { encode } from './base64';

/**
 * ConvertDateFromODataTime
 *
 * @param dateString date string, format is /Date(1512691200000)/
 */
export function ConvertDateFromODataTime(dateString = '0'): Date {
  return new Date(parseInt(dateString.replace(/[^\d.]/g, ''), 10));
}

/**
 * FormatODataDateTimedate
 *
 * format date to /Date(1512691200000)/ format
 */
export function FormatODataDateTimedate(date: Date = new Date()): string {
  return `/Date(${date.getTime()})/`;
}

export function GetAuthorizationPair(user: string, password: string): { Authorization: string } {
  return { Authorization: `Basic ${encode(`${user}:${password}`)}` };
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
    return Array.from(this._store.entries()).map(([key, value]) => `${key}=${value}`).join('&');
  }

}
