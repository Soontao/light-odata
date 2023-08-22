// @ts-nocheck
import { env } from "process";
import { v4 } from "uuid";
import { EdmV2, FormatODataDateTimedate, OData, ODataDateTime } from "../src";
import { randomDate } from "./utils";

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

  it('should support get csrf token', async () => {

    const client = getOData()
    const spyFetchProxy = jest.spyOn(client, "fetchProxy")
    const token = await client.getCsrfToken()

    expect(token).not.toBeUndefined()
    expect(token?.length).toBeGreaterThan(0)

    expect(spyFetchProxy).toHaveBeenCalledTimes(1)

    // test cache
    const token2 = await client.getCsrfToken()
    expect(token).toBe(token2)

    expect(spyFetchProxy).toHaveBeenCalledTimes(1)


    await client.getCsrfToken(false)
    expect(spyFetchProxy).toHaveBeenCalledTimes(2)

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

  it('should support create property with date', async () => {
    const coll = "PeopleRootCollection"
    const client = getOData()
    const uuid = createUUID().toUpperCase()// generated test user uuids
    const es = client.getEntitySet<People>(coll)

    const date = randomDate()

    const dateStr = FormatODataDateTimedate(date)

    const created = await es.create({
      UserID: uuid,
      BirthDate: dateStr
    })

    expect(created.UserID).toBe(uuid)
    expect(created.BirthDate).toBe(dateStr)


    const result = await es.find({ UserID: uuid, BirthDate: ODataDateTime.from(date) })
    expect(result).toHaveLength(1)

    await es.delete(created.ObjectID)
  });

  it('should support create property with date type wrapper', async () => {
    const coll = "PeopleRootCollection"
    const client = getOData()
    const uuid = createUUID().toUpperCase()// generated test user uuids
    const es = client.getEntitySet<People>(coll)

    const date = randomDate()

    const dateStr = FormatODataDateTimedate(date)

    const created = await es.create({
      UserID: uuid,
      BirthDate: EdmV2.DateTime.from(date)
    })

    expect(created.UserID).toBe(uuid)
    expect(created.BirthDate).toBe(dateStr)


    const result = await es.find({ UserID: uuid, BirthDate: EdmV2.DateTime.from(date) })
    expect(result).toHaveLength(1)

    await es.delete(created.ObjectID)
  });

});
