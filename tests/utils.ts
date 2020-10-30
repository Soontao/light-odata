// @ts-nocheck
import { BatchPlainODataResponse, BatchResponses, BatchResponsesV4, ParsedResponse, ParsedResponseV4 } from "../src"
import { BatchPlainODataResponseV4 } from "../src/types_v4"

export const ODATA_SAMPLE_SERVICE_HOST = 'odatasampleservices.azurewebsites.net'

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
