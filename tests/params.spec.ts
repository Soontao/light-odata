import "jest"
import { ODataParam, ODataQueryParam, OData, ODataFilter } from "../src";


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
        const param = ODataParam.newParam().inlinecount(true)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$inlinecount=allpages")
    })


    test('ODataParam inlinecount false', () => {
        const param = ODataParam.newParam().inlinecount(false)
        expect(decodeURIComponent(param.toString())).toEqual("$format=json")
    })

    test('ODataParam orderby multi', () => {
        const param = ODataParam.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }]);
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$orderby=A+desc,B+asc")
    })

    test('ODataParam format xml error', () => {
        expect(() => {
            ODataParam.newParam().format("xml")
        }).toThrow();
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

    test('expand navigation', () => {
        const param = ODataParam.newParam().expand("Customer")
        expect(decodeURIComponent(param.toString())).toEqual("$format=json&$expand=Customer")
        const param2 = ODataParam.newParam().expand(["Customer", "Employee"])
        expect(decodeURIComponent(param2.toString())).toEqual("$format=json&$expand=Customer,Employee")
    })


})
