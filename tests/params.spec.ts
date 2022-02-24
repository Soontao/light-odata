import { OData, ODataDateTime, ODataDateTimeOffset, ODataParam, ODataQueryParam, RawString } from "../src";

describe('ODataParams Test', () => {

  test('ODataQueryParam alias', () => {
    expect(ODataParam).toEqual(ODataQueryParam)
  })

  test('OData param alternative constructor', () => {
    expect(OData.newParam()).toBeInstanceOf(ODataParam)
  })

  test('ODataParam skip and top', () => {
    const param = ODataParam.newParam().skip(30).top(10)
    expect(decodeURIComponent(param.toString())).toEqual("$skip=30&$top=10")
  })

  test('ODataParam orderby', () => {
    const param = ODataParam.newParam().orderby("CreationDateTime")
    expect(decodeURIComponent(param.toString())).toEqual("$orderby=CreationDateTime desc")
  })

  it('should support empty param', () => {
    const param = ODataParam.newParam()
    expect(param.toString()).toBe("")
  });

  test('ODataParam inlinecount', () => {
    const param = OData.newParam().inlinecount(true)
    expect(decodeURIComponent(param.toString())).toEqual("$inlinecount=allpages")
  })

  test('ODataParam filter', () => {
    const param = OData.newParam().filter(OData.newFilter().field("A").eqString("test"))
    expect(param.toString()).toEqual("$filter=A eq 'test'")
    const param2 = OData.newParam().filter("A eq 'test'")
    expect(decodeURIComponent(param2.toString())).toEqual("$filter=A eq 'test'")
    expect(() => {
      // @ts-ignore
      OData.newParam().filter(undefined)
    }).toThrow();
  })

  test('ODataParam inlinecount false', () => {
    const param = ODataParam.newParam().inlinecount(false)
    expect(decodeURIComponent(param.toString())).toEqual("")
  })

  test('ODataParam count true', () => {
    const param = ODataParam.newParam().count(true)
    expect(decodeURIComponent(param.toString("v4"))).toEqual("$count=true")
  })

  test('ODataParam orderby multi', () => {
    const param = ODataParam.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }]);
    expect(decodeURIComponent(param.toString())).toEqual("$orderby=A desc,B asc")
    const p2 = ODataParam.newParam().orderby([{ field: "A" }, { field: "B", order: "asc" }]);
    expect(decodeURIComponent(p2.toString())).toEqual("$orderby=A desc,B asc")
  })

  test('ODataParam format', () => {
    expect(() => {
      ODataParam.newParam().format("xml")
    }).toThrow();
    expect(decodeURIComponent(ODataParam.newParam().format("json").toString())).toEqual("$format=json")

  })

  test('ODataParam search', () => {
    const param = ODataParam.newParam().search("any word");
    expect(param.toString()).toEqual("$search=%any word%")
    const param2 = ODataParam.newParam().search("any word", false);
    expect(param2.toString()).toEqual("$search=any word")
  })

  test('ODataParam select', () => {
    const param = ODataParam.newParam().select("ObjectID");
    expect(decodeURIComponent(param.toString())).toEqual("$select=ObjectID")
  })

  test('ODataParam select (duplicate)', () => {
    const param = ODataParam.newParam().select(["ObjectID", "F1", "F1"]);
    expect(decodeURIComponent(param.toString())).toEqual("$select=ObjectID,F1")
  })

  test('ODataParam select multi', () => {
    const param = ODataParam
      .newParam()
      .select("ObjectID")
      .select("Name");
    expect(decodeURIComponent(param.toString())).toEqual("$select=ObjectID,Name")
  })

  test('expand navigation & replace', () => {
    const param = ODataParam.newParam().expand("Customer")
    expect(decodeURIComponent(param.toString())).toEqual("$expand=Customer")
    param.expand(["Customer", "Employee"], true)
    expect(decodeURIComponent(param.toString())).toEqual("$expand=Customer,Employee")
    expect(decodeURIComponent(ODataParam.newParam().expand("*").toString())).toEqual("$expand=*")
  })

  it('should support toString by varient', () => {
    expect(OData.newParam().custom("search", "v1").toString()).toBe("search=v1")
  });

  it('should support custom properties', () => {
    expect(OData.newParam().search("v1").toString("v2")).toBe("$search=%v1%")
    expect(OData.newParam().search("v1").toString("v2", "sap-gateway")).toBe("search=%v1%")
  });


  it.skip('should support ODataValueObject.toString', () => {
    expect(ODataDateTime.from(new Date("1995-11-11T00:00:00.000Z")).toString())
      .toBe("datetime'1995-11-11T00:00:00'")
    expect(ODataDateTime.from(new Date("1995-11-11T00:00:00.000Z"), true).toString())
      .toBe("datetime'1995-11-11T00%3A00%3A00'")
    expect(ODataDateTimeOffset.from(new Date("1995-11-11T00:00:00.000Z")).toString())
      .toBe("datetimeoffset'1995-11-11T00:00:00.000Z'")
    expect(ODataDateTimeOffset.from(new Date("1995-11-11T00:00:00.000Z"), true).toString())
      .toBe("datetimeoffset'1995-11-11T00%3A00%3A00.000Z'")
    expect(RawString.from("fdsajk@😋2141'fdsaf").toString())
      .toBe("fdsajk@😋2141'fdsaf")
  });

})
