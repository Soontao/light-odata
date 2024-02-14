import { ConvertDateFromODataTime, FormatODataDateTimedate, GetAuthorizationPair, StringIsUuid } from "../src";
import { decode, encode } from "../src/base64";

const datetimeStamp = 1527166822530
const dateString = `/Date(${datetimeStamp})/`
const date = new Date(datetimeStamp)

describe('Util Test', () => {

  test('ConvertDateFromODataTime', () => {
    expect(ConvertDateFromODataTime(dateString)).toEqual(date)
  })

  it('should ConvertDateFromODataTime support negative value', () => {
    expect(ConvertDateFromODataTime("/Date(-1512691200000)/")).toEqual(new Date(-1512691200000))
  });

  it('should ConvertDateFromODataTime throw error when format is not correct', () => {
    expect(() => ConvertDateFromODataTime(new Date().toISOString())).toThrow()
    expect(() => ConvertDateFromODataTime(new Date().toUTCString())).toThrow()
  });

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

  test('StringIsUuid', () => {

    const cases = [
      { uuid: "1d0ebb7c-1d22-4d44-9125-cfe35d67c2bc", result: true },
      { uuid: "0a039649-f400-3cd4-4059-b1573caa6395", result: false },
      { uuid: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa", result: false },
      { uuid: "11111111-1111-1111-1111-111111111111", result: false },
      { uuid: "        -    -    -    -            ", result: false },
      { uuid: "string",                               result: false },
    ]

    cases.forEach(({ uuid, result }) => {
      expect(StringIsUuid(uuid)).toEqual(result)
    })

  })

})
