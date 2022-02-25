// @ts-nocheck
import { v4 } from "uuid";
import { BatchPlainODataResponse, BatchResponses, BatchResponsesV4, ParsedResponse, ParsedResponseV4 } from "../src";
import { BatchPlainODataResponseV4 } from "../src/types_v4";

export const ODATA_SAMPLE_SERVICE_HOST = 'services.odata.org'

export async function unwrapBatchResponse<T>(responses: ParsedResponseV4<T>[]): Promise<BatchPlainODataResponseV4<T>[]>;
export async function unwrapBatchResponse<T>(responses: ParsedResponse<T>[]): Promise<BatchPlainODataResponse<T>[]>;
export async function unwrapBatchResponse<T>(responses: BatchResponsesV4): Promise<BatchPlainODataResponseV4<T>[]>;
export async function unwrapBatchResponse<T>(responses: BatchResponses): Promise<BatchPlainODataResponse<T>[]>;
export async function unwrapBatchResponse(responses: any): Promise<any[]> {
  if (responses instanceof Promise) {
    responses = await responses
  }
  return Promise.all(responses.map(res => {
    switch (res.status) {
      case 204:
        return undefined
      default:
        return res.json()
    }
  }))
}

export function createSampleV2RamdomSevice() {
  return `https://${ODATA_SAMPLE_SERVICE_HOST}/V2/(S(${v4()}))/OData/OData.svc/`
}

export const randomDate = () => {
  const year = 10 + Math.floor(Math.random() * 30)
  const day = 10 + Math.floor(Math.random() * 10)
  const seconds = 10 + Math.floor(Math.random() * 30)
  return new Date(`20${year}-09-${day}T00:00:${seconds}Z`)
}
