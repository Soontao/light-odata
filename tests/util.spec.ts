import "jest"
import { ConvertDateFromODataTime, FormatODataDateTimedate, GetAuthorizationPair, isJSONString } from "../src";

const datetimeStamp = 1527166822530
const dateString = `/Date(${datetimeStamp})/`
const date = new Date(datetimeStamp)

describe('Util Test', () => {

  test('ConvertDateFromODataTime', () => {
    expect(ConvertDateFromODataTime(dateString)).toEqual(date)
  })

  test('FormatODataDateTimedate', () => {
    expect(FormatODataDateTimedate(date)).toEqual(dateString)
  })

  test('GetAuthorizationPair', () => {
    const pair = GetAuthorizationPair("user", "test")
    expect(pair.Authorization).toEqual("Basic dXNlcjp0ZXN0")
  })

  test('isJSONString', () => {
    expect(isJSONString("[123]")).toEqual(true)
    expect(isJSONString("{hello:2}")).toEqual(false)
    expect(isJSONString('[asf]]sf')).toEqual(false)
  })



})
