import { OData, ODataDateTime, ODataDateTimeOffset, ODataFilter } from "../src";

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

  it('should support filter.eq(null)', () => {
    expect(OData.newFilter().field("Name").eq(null).build()).toEqual("Name eq null")
    expect(OData.newFilter().property("Name").eq(null).build()).toEqual("Name eq null")
  });

  test("ODataFilter.group", () => {
    const filter = ODataFilter.newFilter().group(
      ODataFilter.newFilter().fieldIn("Name", ["test string1", "test string2"])
    )
    expect(filter.build()).toEqual("(Name eq 'test string1' or Name eq 'test string2')")
  })

  test('ODataFilter.gt', () => {
    expect(
      ODataFilter.newFilter().field("A")
        .gt(ODataDateTime.from(new Date("2018-01-24T12:43:31.839Z"), false))
        .build()
    ).toEqual("A gt datetime'2018-01-24T12:43:31'")

    expect(
      ODataFilter.newFilter().field("A")
        .gt(15)
        .build()
    ).toEqual("A gt 15")

    expect(
      ODataFilter.newFilter().field("A")
        .gt('15')
        .build()
    ).toEqual("A gt '15'")

  })

  test('should throw errors', () => {


    expect(() => {
      // @ts-ignore
      ODataFilter.newFilter().field("A").gt(undefined).build()
    }).toThrow()

    expect(() => {
      ODataFilter.newFilter().field("A").gt(Symbol("AA")).build()
    }).toThrow()

    expect(() => {
      ODataFilter.newFilter().field("A").gt({}).build()
    }).toThrow()

  });

  test('ODataFilter.le', () => {
    expect(
      ODataFilter.newFilter().field("A")
        .le(ODataDateTimeOffset.from(new Date("2018-01-24T12:43:31.839Z"), false))
        .build()
    ).toEqual("A le datetimeoffset'2018-01-24T12:43:31.839Z'")
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
      .property("Name").eq("'test string1'")
      .fieldIn("Name2", ["test string3", "test string2"])


    expect(filter.build()).toEqual(expected)

    expect(
      OData.newFilter()
        .property("Name").eq("'test string1'")
        .property("Name2").in(["test string3", "test string2"])
        .build()
    ).toEqual(expected)

    expect(
      OData.newFilter()
        .property("Name").eq('test string1')
        .property("Name2").in(["test string3", "test string2"])
        .build()
    ).toEqual(expected)

  })

  test('ODataFilter.inPeriod/field.betweenDateTime', () => {
    const expected = "Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')";
    const expected2 = "(CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')"
    const filter = ODataFilter
      .newFilter()
      .property("Name").eq("'test string1'")
      .inPeriod(
        "CreationDateTime",
        new Date("2018-01-24T12:43:31.839Z"),
        new Date("2018-05-24T12:43:31.839Z")
      )
    expect(filter.build()).toEqual(expected)
    expect(
      ODataFilter
        .newFilter()
        .property("Name").eq("'test string1'")
        .property("CreationDateTime").betweenDateTime(
          new Date("2018-01-24T12:43:31.839Z"),
          new Date("2018-05-24T12:43:31.839Z"),
          false
        )
        .build()
    ).toEqual(expected)

    expect(
      ODataFilter
        .newFilter()
        .property("CreationDateTime").betweenDateTime(
          new Date("2018-01-24T12:43:31.839Z"),
          new Date("2018-05-24T12:43:31.839Z")
        )
        .build()
    ).toEqual(expected2)

  })

  test('ODataFilter.ne', () => {
    expect(OData.newFilter().field("Name").ne("theo").build()).toEqual("Name ne 'theo'")
  });

  test("ODataFilter.between", () => {
    expect(ODataFilter.newFilter().field("A").between(1, 2).build()).toEqual("(A ge 1 and A le 2)")
    expect(ODataFilter.newFilter().field("A").between(1, 2, false).build()).toEqual("(A gt 1 and A lt 2)")
  })

  test('ODataFilter.betweenDateTime', () => {
    const filter = ODataFilter.newFilter()
      .property("Name").eq("'test string1'")
      .betweenDateTime("CreationDateTime", new Date("2018-01-24T12:43:31.839Z"), new Date("2018-05-24T12:43:31.839Z"))
    expect(filter.build())
      .toEqual("Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')")

    expect(
      ODataFilter
        .newFilter()
        .property("A")
        .betweenDateTime(new Date("2018-01-24T12:43:31.839Z"))
        .build()
    ).toEqual("A ge datetime'2018-01-24T12:43:31.839Z'")

    expect(
      ODataFilter
        .newFilter()
        .property("A")
        .betweenDateTime(undefined, new Date("2018-01-24T12:43:31.839Z"), false)
        .build()
    ).toEqual("A lt datetime'2018-01-24T12:43:31.839Z'")

    expect(() => ODataFilter.newFilter().property("A").betweenDateTime()).toThrow()

  })

  test('ODataFilter.betweenDateTimeOffset', () => {
    const filter = ODataFilter.newFilter()
      .field("Name").eq("'test string1'")
      .betweenDateTimeOffset("CreationDateTime", new Date("2018-01-24T12:43:31.839Z"), new Date("2018-05-24T12:43:31.839Z"))
    expect(filter.build())
      .toEqual("Name eq 'test string1' and (CreationDateTime gt datetimeoffset'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetimeoffset'2018-05-24T12:43:31.839Z')")
    expect(
      ODataFilter
        .newFilter()
        .field("A")
        .betweenDateTimeOffset(new Date("2018-01-24T12:43:31.839Z"))
        .build()
    ).toEqual("A ge datetimeoffset'2018-01-24T12:43:31.839Z'")
    expect(
      ODataFilter
        .newFilter()
        .field("A")
        .betweenDateTimeOffset(undefined, new Date("2018-01-24T12:43:31.839Z"), false)
        .build()
    ).toEqual("A lt datetimeoffset'2018-01-24T12:43:31.839Z'")
  })


  it('should support boolean in filter', () => {

    expect(ODataFilter.newBuilder().field("A").eq(true).build()).toBe("A eq true")


  });

  it('should support function in field', () => {
    expect(
      OData.newFilter().field("substring(CompanyName, 1)").eqString("lfreds Futterkiste").build()
    ).toBe("substring(CompanyName, 1) eq 'lfreds Futterkiste'")
    expect(
      OData.newFilter().field("substring(CompanyName, 1)").eq("'lfreds Futterkiste'").build()
    ).toBe("substring(CompanyName, 1) eq 'lfreds Futterkiste'")
    expect(
      OData.newFilter().field("endswith(CompanyName, 'Futterkiste')").eq(true).build()
    ).toBe("endswith(CompanyName, 'Futterkiste') eq true")
  });

})
