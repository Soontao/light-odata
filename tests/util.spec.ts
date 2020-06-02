import "jest"
import { ConvertDateFromODataTime, FormatODataDateTimedate, GetAuthorizationPair } from "../src";
import { encode, decode } from "../src/base64";

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

  test('base64 encode', () => {

    const cases = [
      { plain: "a", encoded: "YQ==" },
      { plain: "ab", encoded: "YWI=" },
      { plain: "abc", encoded: "YWJj" },
    ]

    cases.forEach(({ plain, encoded }) => {
      expect(encode(plain)).toEqual(encoded)
      expect(decode(encoded)).toEqual(plain)
    })

  })

})
