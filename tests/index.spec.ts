import "isomorphic-fetch"
import 'jest';
import { OData } from "../src/request";
import { ODataParam, ODataFilter, C4CODataResult, C4CEntity, C4CODataSingleResult } from '../src';

const TestServiceURL = "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const odata = new OData(TestServiceURL)

describe('Read Test', () => {

  beforeEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
  });

  // these tests only work for demo odata
  // C4C OData response is different these

  test('OData constructor alias', () => {
    expect(OData.New({ metadataUri: TestServiceURL })).toBeInstanceOf(OData)
    expect(() => {
      // metadata url is mandatory
      OData.New({ metadataUri: undefined })
    }).toThrow()
  })

  test.concurrent('Read All', async () => {
    const result = await C4CODataResult.fromRequestResult(odata.newRequest({
      collection: "Customers",
      params: OData.newParam().inlinecount(true)
    }), C4CEntity)

    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })

  test.concurrent('Read By ID', async () => {
    const r = await C4CODataSingleResult.fromRequestResult(
      odata.request("Customers", "ALFKI"), C4CEntity
    )
    expect(r.d.results["CustomerID"]).toEqual("ALFKI")
  })

  test.concurrent('Read By Compound ID (string)', async () => {
    const r = await C4CODataSingleResult.fromRequestResult(
      odata.request("Customers", { CustomerID: "ALFKI" }), C4CEntity
    )
    expect(r.d.results["CustomerID"]).toEqual("ALFKI")
  })

  test.concurrent('Read By Compound Keys', async () => {
    const r = await C4CODataSingleResult.fromRequestResult(
      odata.request("Alphabetical_list_of_products", {
        CategoryName: "Beverages",
        Discontinued: false,
        ProductID: 1,
        ProductName: "Chai"
      }),
      C4CEntity
    )
    expect(r.d.results["UnitPrice"]).toEqual("18.0000")
  })

  test.concurrent('Read By Filter', async () => {
    const filter = OData.newFilter().field("Phone").eqString("030-0074321");
    const result = await odata.newRequest({
      collection: "Customers",
      params: OData.newParam().filter(filter)
    })
    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })

  test.concurrent('Read By Group Filter with count', async () => {
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

  test('should parse json', () => {
    const obj = require("../tests/resources/responses/ServiceRequest")
    const result = C4CODataResult.fromPlainObject(obj, C4CEntity)
    expect(result.d.results.pop()).toBeInstanceOf(C4CEntity)
  });

  test('should parse json and throw error', () => {
    expect(() => {
      C4CODataResult.fromPlainObject(require("../tests/resources/responses/error"), C4CEntity)
    }).toThrow("Ungültigen Token an Position 24 gefunden")
  });

});
