import "isomorphic-fetch"
import { Random } from "mockjs";
import { OData, ODataFilter } from "../src";

describe('CAP Framework OData (V4) Test Suite (basic)', () => {

  const Service = "https://odata-v4-demo-001.herokuapp.com/odata/$metadata"
  const name = Random.name()
  const createClient = () => OData.New({
    metadataUri: Service,
    processCsrfToken: false,
    version: "v4",
    variant: "cap"
  })

  it('should create a instance', async () => {
    const odata = createClient()
    const res = await odata.newRequest<any>({
      collection: "Peoples",
      method: "POST",
      entity: {
        UserName: name
      }
    })
    expect(res.error).toBeUndefined()
    expect(res.UserName).toEqual(name)
    expect(res.ID).not.toBeUndefined()

  });

  it('should query a instance', async () => {
    const odata = createClient()
    const res = await odata.newRequest({
      collection: "Peoples",
      method: "GET",
      params: OData.newParam().filter(ODataFilter.newFilter().field("UserName").eqString(name)).count(true)
    })
    expect(res.error).toBeUndefined()
    expect(res["@odata.count"] > 0).toBeTruthy()
  });

  it('should retrieve by id & clean data', async () => {

    const odata = createClient()

    // Find ID by name
    const res = await odata.newRequest<any>({
      collection: "Peoples",
      method: "GET",
      params: OData.newParam().filter(ODataFilter.newFilter().field("UserName").eqString(name)).count(true)
    })
    expect(res.error).toBeUndefined()
    expect(res["@odata.count"] > 0).toBeTruthy()

    const id = res.value[0].ID;
    expect(id).not.toBeUndefined()

    // RETRIEVE by id
    const res2 = await odata.newRequest<any>({ collection: "Peoples", id })
    expect(res2.error).toBeUndefined()
    expect(res2.UserName).toEqual(name)

    // DELETE
    const res3 = await odata.newRequest<any>({ collection: "Peoples", method: "DELETE", id: id, })
    expect(res3.error).toBeUndefined()

    // verify
    const res4 = await odata.newRequest<any>({ collection: "Peoples", id })
    expect(res4.error).not.toBeUndefined()


  });


});
