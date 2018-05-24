import "jest"
import { ODataParam, ODataQueryParam } from "../src";


describe('ODataParams Test', () => {

  test('ODataParam alias', () => {
    expect(ODataParam).toEqual(ODataQueryParam)
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


})
