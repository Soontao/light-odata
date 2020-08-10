// @ts-nocheck
import { BatchResponses, BatchResponsesV4 } from "../src"

export const unwrapBatchResponse = async<T = any>(responses: BatchResponses | BatchResponsesV4): Promise<T[]> => {
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
