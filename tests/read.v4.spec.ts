import "../src/polyfill";
import { v4 } from "uuid";
import { OData } from "../src/request";
import { People } from "./demo_service_types";
import { ODATA_SAMPLE_SERVICE_HOST } from "./utils";
import { EdmV4 } from "../src";

describe('Read Test (V4)', () => {

  const TestV4ServiceURL = `https://${ODATA_SAMPLE_SERVICE_HOST}/TripPinRESTierService/(S(${v4()}))/$metadata`

  test('Read All (v4)', async () => {
    const odata_v4 = OData.New4({ metadataUri: TestV4ServiceURL, version: "v4" })
    const response = await odata_v4.newRequest<People>({
      collection: "People",
    })
    expect(response["@odata.context"]).not.toBeUndefined()
    // @ts-ignore
    expect(response?.value?.length > 0).toBeTruthy()
  })


  test('Read By ID (v4)', async () => {
    const odata_v4 = OData.New4({ metadataUri: TestV4ServiceURL, version: "v4" })
    const response = await odata_v4.newRequest<People>({
      collection: "People",
      id: "russellwhyte"
    })
    expect(response.Gender).toBe("Male")
  })

  test('Read By ID (v4) not existed', async () => {
    const odata_v4 = OData.New({ metadataUri: TestV4ServiceURL, version: "v4" })
    const response = await odata_v4.newRequest<People>({
      collection: "People",
      id: "not_existed"
    })

    expect(response?.error?.message).not.toBeUndefined()
    expect(response?.error?.code).toBe("") // empty code
    expect(response?.error?.message).toBe("The request resource is not found.") // error message

  })

  test('Read By Compound ID (string) (v4)', async () => {
    const odata = OData.New4({ metadataUri: TestV4ServiceURL, version: "v4" })
    const r = await odata.newRequest<People>({
      collection: "People",
      id: { UserName: "russellwhyte" }
    })
    expect(r.UserName).toEqual("russellwhyte")
  })

  test('Read By Filter (v4)', async () => {
    const odata = OData.New4({ metadataUri: TestV4ServiceURL, version: "v4" })
    const filter = OData.newFilter().field("FirstName").eqString("Russell");
    const result = await odata.newRequest<People>({
      collection: "People",
      params: OData.newParam().filter(filter)
    })
    expect(result.error).toBeUndefined()
    // @ts-ignore
    expect(result?.value?.length > 0).toBeTruthy()
    expect(result?.value?.[0].UserName).toEqual("russellwhyte")
  })

  test('Create Instace (v4)', async () => {
    const odata = OData.New({ metadataUri: TestV4ServiceURL, version: "v4" })
    const result = await odata.newRequest<People>({
      collection: "People",
      method: "POST",
      entity: {
        UserName: "theosun",
        FirstName: "Theo",
        LastName: "Sun",
      }
    })
    expect(result.error).toBeUndefined()

    const r2 = await odata.newRequest<People>({
      collection: "People",
      method: "GET",
      params: OData.newParam().count(true).filter(OData.newFilter().field("UserName").eq("theosun"))
    })

    expect(r2["@odata.count"]).toEqual(1)

  })

  test("Read by GUID ID (raw string)", async () => {
    const odata = OData.New({
      metadataUri: "https://services.odata.org/v4/OData/OData.svc/$metadata",
      version: "v4",
    });
    const result = await odata.newRequest<any>({
      collection: "Advertisements",
      id: EdmV4.RawString.from("f89dee73-af9f-4cd4-b330-db93c25ff3c7"),
    });
    expect(result.error).toBeUndefined();
    expect(result.Name).toEqual("Old School Lemonade Store, Retro Style");
  });

  test("Read by GUID ID (Guid)", async () => {
    const odata = OData.New({
      metadataUri: "https://services.odata.org/v4/OData/OData.svc/$metadata",
      version: "v4",
    });
    const result = await odata.newRequest<any>({
      collection: "Advertisements",
      id: EdmV4.Guid.from("f89dee73-af9f-4cd4-b330-db93c25ff3c7"),
    });
    expect(result.error).toBeUndefined();
    expect(result.Name).toEqual("Old School Lemonade Store, Retro Style");
  });

  test("Read by GUID ID (compound raw string)", async () => {
    const odata = OData.New({
      metadataUri: "https://services.odata.org/v4/OData/OData.svc/$metadata",
      version: "v4",
    });
    const result = await odata.newRequest<any>({
      collection: "Advertisements",
      id: {
        ID: EdmV4.RawString.from("f89dee73-af9f-4cd4-b330-db93c25ff3c7")
      },
    });
    expect(result.error).toBeUndefined();
    expect(result.Name).toEqual("Old School Lemonade Store, Retro Style");
  });

});
