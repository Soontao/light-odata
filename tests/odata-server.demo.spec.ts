import { v4 } from "uuid";
import { OData } from "../src";
import "../src/polyfill";
import { unwrapBatchResponse } from "./utils";


describe('@odata/server Test Suite', () => {

  const metadata = 'https://odata-v4-server-demo.herokuapp.com/$metadata'

  it('should execute full CRUD operations', async () => {

    const testString = v4()
    const testNumber = Math.ceil(Math.random() * 1000)

    const client = OData.New4({ metadataUri: metadata, variant: "@odata/server" })
    const teachers = client.getEntitySet("Teachers")
    const classes = client.getEntitySet("Classes")

    const createdTeacher = await teachers.create({ name: "Theo Sun" })
    let createdClass = await classes.create({ name: "CS", desc: "Computer Science" })

    // >> odata bounded functino
    const echoResponse = await teachers.function('Default.echo', createdTeacher.id, {
      inNumber: testNumber,
      inString: testString
    })
    expect(echoResponse['outNumber']).toBe(testNumber)
    expect(echoResponse['outString']).toBe(testString)


    // >> odata bounded action
    await teachers.action("Default.addClass", createdTeacher.id, { classId: createdClass.id })
    createdClass = await classes.retrieve(createdClass.id) // refresh
    expect(createdClass.teacherOneId).toBe(createdTeacher.id)

    // >> clean
    await classes.delete(createdClass.id) // delete ref item firstly
    await teachers.delete(createdTeacher.id)

  });

  it('should support batch request in json format (OData V4.01)', async () => {

    const testLength = 4
    const testNames = Array(testLength).fill('').map(() => v4())
    const testNumers = Array(testLength).fill(0).map(() => Math.ceil(Math.random() * 1000))

    const client = OData.New4({ metadataUri: metadata, variant: "@odata/server" })
    const teachers = client.getEntitySet("Teachers")
    const classes = client.getEntitySet("Classes")

    const reqs = testNames.map(testName => teachers.batch().create({ name: testName }))

    const ress = await client.execBatchRequestsJson(reqs)

    expect(ress).toHaveLength(testLength)

    ress.forEach(res => expect(res.status).toBe(201))

    const creations = await unwrapBatchResponse(ress)

    await client.execBatchRequestsJson(creations.map(created => teachers.batch().delete(created.id)))

    const finds = await unwrapBatchResponse(client.execBatchRequestsJson(creations.map(created => teachers.batch().count({ id: created.id }))))

    finds.forEach(finded => expect(finded["@odata.count"]).toBe(0))


  });

});
