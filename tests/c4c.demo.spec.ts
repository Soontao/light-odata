import { env } from "process";
import { v4 } from "uuid";
import { OData, ODataDateTime } from "../src";
import "../src/polyfill";

let d = describe

if (!env.C4C_ODATA) {
  d = describe.skip
}

interface People {
  ObjectID: string,
  Age: number,
  BirthDate: ODataDateTime,
  UserID: string,
  UserName: string,
}

d('C4C/ByD OData (V2) Test Suite (basic)', () => {

  const getOData = () => {
    return OData.New({
      // @ts-ignore
      metadataUri: env.C4C_ODATA,
      credential: {
        username: env.C4C_USER,
        password: env.C4C_PASS
      },
      variant: "c4c"
    })
  }

  const createUUID = () => v4().split('-').join('')


  it('should CRUD instance', async () => {

    const odata = getOData()

    const UserID = createUUID()

    const TestUserName = createUUID()

    const set = odata.getEntitySet<People>("PeopleRootCollection")

    // clean all data
    // const all = await set.query()
    // await Promise.all(all.map(item => set.delete(item.ObjectID)))

    // create
    const ur = await set.create({ UserID })
    expect(ur.UserID).toEqual(UserID.toUpperCase())

    // update
    await set.update(ur.ObjectID, { UserName: TestUserName })

    // verify
    const updated_ur = await set.retrieve(ur.ObjectID)

    expect(updated_ur.UserName).toEqual(TestUserName)

    // delete
    await set.delete(ur.ObjectID)

    // verify
    const t = await set.count(OData.newFilter().field("UserName").eqString(TestUserName))

    expect(t).toEqual(0)

    await expect(async () => {
      // @ts-ignore
      return await set.create({ NotExist: "v1" })
    }).rejects.toThrow()

  });

  it('should support batch operation', async () => {

    const coll = "PeopleRootCollection"
    const client = getOData()
    const users = Array(5).fill(0).map(createUUID) // generated test user uuids
    const es = client.getEntitySet<People>(coll)
    const reqs = users.map(uid => client.newBatchRequest<People>({
      collection: coll,
      method: "POST",
      entity: {
        UserID: uid
      }
    }))

    const ress = await client.execBatchRequests(reqs)

    ress.forEach(res => {
      expect(res.status).toBe(201)
    })

    const resBodies = await Promise.all(ress.map(res => res.json()))

    // verify created
    const c1 = await es.count(client.newFilter().field('UserID').eqString(users[0].toUpperCase()))
    expect(c1).toBe(1)

    await client.execBatchRequests(resBodies.map(resBody => client.newBatchRequest({
      collection: coll,
      method: "DELETE",
      id: resBody?.d?.ObjectID
    })))

    // verify deleted
    const c = await es.count(client.newFilter().field('UserID').eqString(users[0]))
    expect(c).toBe(0)

  });

  it('should support entityset batch operation', async () => {

    const coll = "PeopleRootCollection"
    const client = getOData()
    const users = Array(5).fill(0).map(createUUID) // generated test user uuids
    const es = client.getEntitySet<People>(coll)
    const reqs = users.map(uid => es.batch().create({ UserID: uid }))

    const ress = await client.execBatchRequests(reqs)

    ress.forEach(res => {
      expect(res.status).toBe(201)
    })

    const createdItems = await Promise.all(ress.map(res => res.json()))

    // verify created
    const c1 = await es.count(client.newFilter().field('UserID').eqString(users[0].toUpperCase()))
    expect(c1).toBe(1)

    // batch delete
    await client.execBatchRequests(createdItems.map(resBody => es.batch().delete(resBody?.d?.ObjectID)))

    // verify deleted
    const c = await es.count(client.newFilter().field('UserID').eqString(users[0]))
    expect(c).toBe(0)

  });

  const unwrapResponse = async (responses: any): Promise<any[]> => {
    if (responses instanceof Promise) {
      responses = await responses
    }
    return Promise.all(responses.map(res => {
      switch (res.status) {
        case 204:
          return undefined
        default:
          return res.json()
      }
    }))
  }

  it('should support entityset batch operation (advanced)', async () => {

    const coll = "PeopleRootCollection"
    const client = getOData()
    const uuid = createUUID().toUpperCase()// generated test user uuids
    const es = client.getEntitySet<People>(coll)

    const created = await unwrapResponse(client.execBatchRequests([es.batch().create({ UserID: uuid })]))

    expect(created[0].d.UserID).toBe(uuid)

    // c4c/byd not support query in batch
    // add validation in exec batch request
    // const finded = await unwrapResponse(client.execBatchRequests([es.batch().find({ UserID: uuid })]))
    // expect(finded[0].d.ObjectID).toBe(created[0].d.ObjectID)

    const retrieved = await unwrapResponse(client.execBatchRequests([es.batch().retrieve(created[0].d.ObjectID)]))
    expect(retrieved[0].d.UserID).toBe(uuid)

    await client.execBatchRequests([es.batch().update(created[0].d.ObjectID, { Age: 30 })])
    const updated = await unwrapResponse(client.execBatchRequests([es.batch().retrieve(created[0].d.ObjectID)]))
    expect(updated[0].d.Age).toBe(30)

    // delete
    await client.execBatchRequests([es.batch().delete(created[0].d.ObjectID)])

    const deleted = await unwrapResponse(client.execBatchRequests([es.batch().retrieve(created[0].d.ObjectID)]))
    expect(deleted[0].d).toBeUndefined()

  });

});
