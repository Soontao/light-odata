import "../src/polyfill";
import { Random } from "mockjs";
import { EdmV4, OData } from "../src";
import { CapDemoPeople } from "./demo_service_types";

let d = describe

if (!process.env.CAP_DEMO_HOST) {
  d = describe.skip
}

d('CAP Framework OData (V4) Test Suite (basic)', () => {

  const Service = `https://${process.env.CAP_DEMO_HOST}/odata/$metadata`

  const createClient = () => OData.New4({
    metadataUri: Service,
    variant: "cap"
  })

  it('should CRUD as expected', async () => {
    let name = Random.name()

    const client = createClient()
    const es = client.getEntitySet<CapDemoPeople>("Peoples")

    const c0 = await es.count(es.newFilter().field("UserName").eq(name))

    if (c0 > 0) {
      name = name + Random.integer(100, 999)
    }

    // CREATE instnace
    const res0 = await es.create({
      UserName: name
    })

    expect(res0.UserName).toEqual(name)
    expect(res0.ID).not.toBeUndefined()

    // QUERY by name, quick find
    const res = await es.find({ UserName: name })

    expect(res).not.toBeUndefined()
    expect(res.length > 0).toBeTruthy()

    const id = res[0].ID
    expect(id).not.toBeUndefined()

    const idObject = EdmV4.Guid.from(id);

    // RETRIEVE by id
    const res2 = await es.retrieve(idObject)
    expect(res2.UserName).toEqual(name)

    // UPDATE
    const firstName = Random.name();
    await es.update(idObject, { Name_FirstName: firstName })

    // verify UPDATE
    const res5 = await es.retrieve(idObject)
    expect(res5.Name_FirstName).toEqual(firstName)

    // DELETE
    await es.delete(idObject)

    // verify DELETE
    await expect(() => es.retrieve(idObject)).rejects.toThrow()

  });


});
