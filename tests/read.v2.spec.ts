import { ODataDateTime, ODataFilter, ODataParam, ODataValueObject, RawString } from '../src';
import "../src/polyfill";
import { OData } from "../src/request";
import { Alphabetical_list_of_product, Customer } from "./demo_service_types";
import { ODATA_SAMPLE_SERVICE_HOST } from './utils';

const TestServiceURL = `https://${ODATA_SAMPLE_SERVICE_HOST}/V2/Northwind/Northwind.svc/$metadata`

describe('Read Test (V2)', () => {

  // these tests only work for demo odata
  // SAP OData response is different from these

  test('OData constructor alias', () => {
    expect(OData.New({ metadataUri: TestServiceURL })).toBeInstanceOf(OData)
    // @ts-ignore
    expect(() => { OData.New({ metadataUri: undefined }) }).toThrow()
  })

  test('Read All', async () => {

    const odata = OData.New({ metadataUri: TestServiceURL })
    const result = await odata.newRequest<Customer>({
      collection: "Customers",
      params: OData.newParam().inlinecount(true)
    })

    expect(result?.d?.results[0].CustomerID).toEqual("ALFKI")
    expect(result?.d?.__count).not.toBeUndefined()

  })

  test('Read By ID', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<Customer>({
      collection: "Customers",
      id: "ALFKI"
    })
    expect(r?.d?.CustomerID).toEqual("ALFKI")
  })

  test('Read By ID (number)', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<{ Title: string }>({
      collection: "Employees",
      id: 1
    })
    expect(r?.d?.Title).toEqual("Sales Representative")
  })

  test('Read By Compound ID (string)', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const r = await odata.newRequest<Customer>({
      collection: "Customers",
      id: { CustomerID: "ALFKI" }
    })
    expect(r?.d?.CustomerID).toEqual("ALFKI")
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
    expect(r?.d?.UnitPrice).toEqual("18.0000")
  })

  test('Read By Filter', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const filter = OData.newFilter().field("Phone").eqString("030-0074321");
    const result = await odata.newRequest({
      collection: "Customers",
      params: OData.newParam().filter(filter)
    })
    expect(result?.d?.results?.[0]?.["CustomerID"]).toEqual("ALFKI")
  })

  test('Read By Filter null', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const filter = OData.newFilter().field("Phone").eq(null);
    const result = await odata.newRequest({
      collection: "Customers",
      params: OData.newParam().filter(filter)
    })
    expect(result?.d?.results).toHaveLength(0)
  })

  test('Read By Group Filter with count', async () => {
    const odata = OData.New({ metadataUri: TestServiceURL })
    const filter = ODataFilter
      .newFilter()
      .group(
        // phone eq '030-0074321' or '(5) 555-4729'
        ODataFilter.newFilter().fieldIn("Phone", ["030-0074321", "(5) 555-4729"])
      )
      .field("CustomerID").eqString("ALFKI") // id eq 'ALFKI'
    const param = ODataParam.newParam().filter(filter).inlinecount(true)
    const result = await odata.newRequest<Customer>({
      collection: "Customers",
      params: param
    })
    expect(result?.d?.__count).toEqual("1")
    expect(result?.d?.results[0].CustomerID).toEqual("ALFKI")
  })

  it('should support filter field with function (V2)', async () => {

    const client = OData.New({ metadataUri: TestServiceURL })

    const Customers = client.getEntitySet("Customers")

    // query with entityset wrapper
    // query: /Customers?$filter=endswith(CompanyName, 'Futterkiste') eq true
    const result = await Customers.query(
      // with free text filter
      client.newParam().filter("endswith(CompanyName, 'Futterkiste') eq true")
    )
    expect(result).toHaveLength(1)
    expect(result?.[0]?.['CompanyName'].endsWith("Futterkiste")).toBeTruthy()

    // query with entityset wrapper
    // query: /Customers?$filter=endswith(CompanyName, 'Futterkiste') eq true
    const result2 = await Customers.query(
      client.newParam().filter(
        client.newFilter().field("endswith(CompanyName, 'Futterkiste')").eq(true)
      )
    )
    expect(result2).toHaveLength(1)
    expect(result2[0]['CompanyName'].endsWith("Futterkiste")).toBeTruthy()


    // query with client direct
    // query: /Customers?$filter=indexof(CompanyName, 'Futterkiste') gt -1
    const result3 = await client.newRequest({
      collection: "Customers",
      method: "GET",
      params: client.newParam().filter(
        client.newFilter().field("indexof(CompanyName, 'Futterkiste')").gt(-1)
      )
    })
    expect(result3?.d?.results).toHaveLength(1)
    expect(result3?.d?.results[0]['CompanyName'].substr(1)).toBe("lfreds Futterkiste")


  });

  it('should support format raw value', () => {
    const client = OData.New({ metadataUri: TestServiceURL })
    expect(
      // @ts-ignore
      client.formatIdString(RawString.from("(DateTime=datetime'1995-11-11T00:00:00.000Z')"))
    ).toBe("(DateTime=datetime'1995-11-11T00:00:00.000Z')")
  });

  it('should support format compund id with datetime', () => {
    const client = OData.New({ metadataUri: TestServiceURL })
    expect(
      // @ts-ignore
      client.formatIdString({
        DateTime: ODataDateTime.from(new Date("1995-11-11T00:00:00.000Z"))
      })
    ).toBe("(DateTime=datetime'1995-11-11T00:00:00.000Z')")
  });



});
