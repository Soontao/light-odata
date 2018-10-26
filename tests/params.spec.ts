import "jest"
import { ODataParam, ODataQueryParam, OData } from "../src";

describe('ODataParams Test', () => {

    test('ODataQueryParam alias', () => {
        expect(ODataParam).toEqual(ODataQueryParam)
    })

    test('OData param alternative constructor', () => {
        expect(OData.newParam()).toBeInstanceOf(ODataParam)
    })

    test('ODataParam skip and top', () => {
        const param = ODataParam.newParam().skip(30).top(10)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$skip=30&$top=10")
    })

    test('ODataParam orderby', () => {
        const param = ODataParam.newParam().orderby("CreationDateTime")
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$orderby=CreationDateTime+desc")
    })

    test('ODataParam inlinecount', () => {
        const param = OData.newParam().inlinecount(true)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$inlinecount=allpages")
    })

    test('ODataParam filter', () => {
        const param = OData.newParam().filter(OData.newFilter().field("A").eqString("test"))
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$filter=A+eq+'test'")
        const param2 = OData.newParam().filter("A eq 'test'")
        expect(decodeURIComponent(param2.toString())).toEqual("$format=json&$filter=A+eq+'test'")
        expect(() => {
            OData.newParam().filter(undefined)
        }).toThrow();
    })

    test('ODataParam inlinecount false', () => {
        const param = ODataParam.newParam().inlinecount(false)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json")
    })

    test('ODataParam orderby multi', () => {
        const param = ODataParam.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }]);
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$orderby=A+desc,B+asc")
        const p2 = ODataParam.newParam().orderby([{ field: "A" }, { field: "B", order: "asc" }]);
        expect(decodeURIComponent(p2.toString())).toEqual("$format=json&$orderby=A+desc,B+asc")
    })

    test('ODataParam format', () => {
        expect(() => {
            ODataParam.newParam().format("xml")
        }).toThrow();
        expect(decodeURIComponent(ODataParam.newParam().format("json").toString())).toEqual("$format=json")

    })

    test('ODataParam search', () => {
        const param = ODataParam.newParam().search("any word");
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$search=%any+word%")
        const param2 = ODataParam.newParam().search("any word", false);
        expect(decodeURIComponent(param2.toString())).toEqual("$format=json&$search=any+word")
    })

    test('ODataParam select', () => {
        const param = ODataParam.newParam().select("ObjectID");
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$select=ObjectID")
    })

    test('ODataParam select multi', () => {
        const param = ODataParam
            .newParam()
            .select("ObjectID")
            .select("Name");
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$select=ObjectID,Name")
    })

    test('expand navigation & replace', () => {
        const param = ODataParam.newParam().expand("Customer")
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$expand=Customer")
        param.expand(["Customer", "Employee"], true)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$expand=Customer,Employee")

    })


})
