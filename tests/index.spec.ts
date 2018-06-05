import "isomorphic-fetch"
import 'jest';
import { OData } from "../src/request";
import { PlainODataResponse, ODataQueryParam, ODataParam, ODataFilter } from '../src';

const TestServiceURL = "http://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const odata = new OData(TestServiceURL)

describe('Read Test', () => {
  
  beforeEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
  });


  // these tests only work for demo odata
  // C4C OData response is different these

  test('Read All', async () => {
    const result = await odata.request("Customers")
    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })

  test('Read By ID', async () => {
    const result = await odata.request("Customers", "ALFKI")
    expect(result.d["CustomerID"]).toEqual("ALFKI")
  })

  test('Read By Filter', async () => {
    const filter = ODataFilter.newFilter().field("Phone").eqString("030-0074321");
    const result = await odata.request("Customers", undefined, ODataParam.newParam().filter(filter))
    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })

  test('Read By Group Filter with count', async () => {
    const filter = ODataFilter
      .newFilter()
      .group(
        // phone eq '030-0074321' or '(5) 555-4729'
        ODataFilter.newFilter().fieldIn("Phone", ["030-0074321", "(5) 555-4729"])
      )
      .and().field("CustomerID").eqString("ALFKI") // id eq 'ALFKI'
    const param = ODataParam.newParam().filter(filter).inlinecount(true)
    const result = await odata.request("Customers", undefined, param)
    expect(result.d.__count).toEqual("1")
    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })

});
