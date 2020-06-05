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
