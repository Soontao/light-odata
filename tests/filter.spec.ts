import { ODataFilter, OData } from "../src";

describe("OData Filter Test", () => {

  test('OData filter alternative constructor', () => {
    expect(OData.newFilter()).toBeInstanceOf(ODataFilter)
    expect(ODataFilter.newBuilder()).toBeInstanceOf(ODataFilter)
  })

  test("ODataFilter.eqString", () => {
    expect(ODataFilter.newFilter().field("Name").eqString("test string").build())
      .toEqual("Name eq 'test string'")
    expect(ODataFilter.newFilter().field("Name").neString("test string").build())
      .toEqual("Name ne 'test string'")
  })

  test("ODataFilter.group", () => {
    const filter = ODataFilter.newFilter().group(
      ODataFilter.newFilter().fieldIn("Name", ["test string1", "test string2"])
    )
    expect(filter.build()).toEqual("(Name eq 'test string1' or Name eq 'test string2')")
  })

  test('ODataFilter.and(simple)', () => {
    const filter = ODataFilter
      .newFilter()
      .field("Name").eq("'test string1'")
      .field("Name2").eqString("test string2")
    expect(filter.build()).toEqual("Name eq 'test string1' and Name2 eq 'test string2'")
  })

  test('ODataFilter.and(complex)', () => {
    const filter = OData
      .newFilter()
      .field("Name2").eq("'test string1'")
      .fieldIn("Name", ["test string1", "test string2"])
    expect(filter.build())
      .toEqual("Name2 eq 'test string1' and (Name eq 'test string1' or Name eq 'test string2')")
  })

  test('ODataFilter.or(complex)', () => {
    const expected = "Name eq 'test string1' and (Name2 eq 'test string3' or Name2 eq 'test string2')"
    const filter = ODataFilter
      .newFilter()
      .field("Name").eq("'test string1'")
      .fieldIn("Name2", ["test string3", "test string2"])


    expect(filter.build()).toEqual(expected)

    expect(
      OData.newFilter()
        .field("Name").eq("'test string1'")
        .field("Name2").in(["test string3", "test string2"])
        .build()
    ).toEqual(expected)

    expect(
      OData.newFilter()
        .field("Name").eq('test string1')
        .field("Name2").in(["test string3", "test string2"])
        .build()
    ).toEqual(expected)

  })

  test('ODataFilter.inPeriod/field.betweenDateTime', () => {
    const expected = "Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')";
    const expected2 = "(CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')"
    const filter = ODataFilter
      .newFilter()
      .field("Name").eq("'test string1'").and()
      .inPeriod(
        "CreationDateTime",
        new Date("2018-01-24T12:43:31.839Z"),
        new Date("2018-05-24T12:43:31.839Z")
      )
    expect(filter.build()).toEqual(expected)
    expect(
      ODataFilter
        .newFilter()
        .field("Name").eq("'test string1'")
        .field("CreationDateTime").betweenDateTime(
          new Date("2018-01-24T12:43:31.839Z"),
          new Date("2018-05-24T12:43:31.839Z"),
          false
        )
        .build()
    ).toEqual(expected)

    expect(
      ODataFilter
        .newFilter()
        .field("CreationDateTime").betweenDateTime(
          new Date("2018-01-24T12:43:31.839Z"),
          new Date("2018-05-24T12:43:31.839Z")
        )
        .build()
    ).toEqual(expected2)

  })

  test('ODataFilter.betweenDateTime', () => {
    const filter = ODataFilter.newFilter()
      .field("Name").eq("'test string1'").and()
      .betweenDateTime("CreationDateTime", new Date("2018-01-24T12:43:31.839Z"), new Date("2018-05-24T12:43:31.839Z"))
    expect(filter.build())
      .toEqual("Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')")
  })

  test('ODataFilter.betweenDateTimeOffset', () => {
    const filter = ODataFilter.newFilter()
      .field("Name").eq("'test string1'").and()
      .betweenDateTimeOffset("CreationDateTime", new Date("2018-01-24T12:43:31.839Z"), new Date("2018-05-24T12:43:31.839Z"))
    expect(filter.build())
      .toEqual("Name eq 'test string1' and (CreationDateTime gt datetimeoffset'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetimeoffset'2018-05-24T12:43:31.839Z')")
  })

})
