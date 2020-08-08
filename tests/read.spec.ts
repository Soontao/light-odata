import { ODataFilter, ODataParam } from '../src';
import "../src/polyfill";
import { OData } from "../src/request";
import { Alphabetical_list_of_product, Customer } from "./demo_service_types";

const TestServiceURL = "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata"

describe('Read Test', () => {

  // these tests only work for demo odata
  // SAP OData response is different from these

  test('OData constructor alias', () => {
    expect(OData.New({ metadataUri: TestServiceURL })).toBeInstanceOf(OData)
    expect(() => { OData.New({ metadataUri: undefined }) }).toThrow()
  })

  test('Read All', async () => {

    const odata = OData.New({ metadataUri: TestServiceURL })
    const result = await odata.newRequest<Customer>({
      collection: "Customers",
      params: OData.newParam().inlinecount(true)
    })

    expect(result.d.results[0].CustomerID).toEqual("ALFKI")
    expect(result.d.__count).not.toBeUndefined()

  })

  test('Read By ID', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<Customer>({
      collection: "Customers",
      id: "ALFKI"
    })
    expect(r.d.CustomerID).toEqual("ALFKI")
  })

  test('Read By ID (number)', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<{ Title: string }>({
      collection: "Employees",
      id: 1
    })
    expect(r.d.Title).toEqual("Sales Representative")
  })

  test('Read By Compound ID (string)', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<Customer>({
      collection: "Customers",
      id: { CustomerID: "ALFKI" }
    })
    expect(r.d.CustomerID).toEqual("ALFKI")
  })


  test('Read By Compound Keys', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<Alphabetical_list_of_product>({
      collection: "Alphabetical_list_of_products",
      id: {
        CategoryName: "Beverages",
        Discontinued: false,
        ProductID: 1,
        ProductName: "Chai"
      }
    })
    expect(r.d.UnitPrice).toEqual("18.0000")
  })

  test('Read By Filter', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const filter = OData.newFilter().field("Phone").eqString("030-0074321");
    const result = await odata.newRequest({
      collection: "Customers",
      params: OData.newParam().filter(filter)
    })
    expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")
  })



  test('Read By Group Filter with count', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const filter = ODataFilter
      .newFilter()
      .group(
        // phone eq '030-0074321' or '(5) 555-4729'
        ODataFilter.newFilter().fieldIn("Phone", ["030-0074321", "(5) 555-4729"])
      )
      .and().field("CustomerID").eqString("ALFKI") // id eq 'ALFKI'
    const param = ODataParam.newParam().filter(filter).inlinecount(true)
    const result = await odata.newRequest<Customer>({
      collection: "Customers",
      params: param
    })
    expect(result.d.__count).toEqual("1")
    expect(result.d.results[0].CustomerID).toEqual("ALFKI")
  })


});
