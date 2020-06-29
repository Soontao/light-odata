import { env } from "process";
import { OData, ODataDateTime } from "../src";
import { v4 } from "uuid";

// browser mock
global.fetch = require("fetch-cookie")(require("node-fetch"))

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


  it('should CRUD instance', async () => {

    const odata = OData.New({
      metadataUri: env.C4C_ODATA,
      credential: {
        username: env.C4C_USER,
        password: env.C4C_PASS
      },
      processCsrfToken: true,
      variant: "c4c"
    })

    const UserID = v4().split("-").pop()

    const set = odata.getEntitySet<People>("PeopleRootCollection")

    // clean all data
    // const all = await set.query()
    // await Promise.all(all.map(item => set.delete(item.ObjectID)))

    // create
    const ur = await set.create({ UserID })
    expect(ur.UserID).toEqual(UserID.toUpperCase())

    const testUserName = "Light OData Test User";
    // update
    await set.update(ur.ObjectID, { UserName: testUserName })

    // verify
    const updated_ur = await set.retrieve(ur.ObjectID)
    expect(updated_ur.UserName).toEqual(testUserName)

    // delete
    set.delete(ur.ObjectID)

    // verify
    const t = await set.count(OData.newFilter().field("UserID").eqString(UserID))
    expect(t).toEqual(0)

    await expect(async () => {
      // @ts-ignore
      return await set.create({ NotExist: "v1" })
    }).rejects.toThrow()

  });

});