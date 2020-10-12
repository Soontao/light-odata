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
    const teachers = client.getEntitySet('Teachers');
    const classes = client.getEntitySet('Classes');

    const createdTeacher = await teachers.create({ name: 'Theo Sun' });
    let createdClass = await classes.create({ name: 'CS', desc: 'Computer Science' });

    // >> odata bounded function
    const echoResponse = await teachers.function('Default.echo', createdTeacher.tid, {
      inNumber: testNumber,
      inString: testString
    });
    expect(echoResponse['outNumber']).toBe(testNumber);
    expect(echoResponse['outString']).toBe(testString);

    // >> odata bounded action
    await teachers.action(
      "Default.addClass",
      createdTeacher.id,
      { classId: createdClass.id }
    )
    createdClass = await classes.retrieve(createdClass.id) // refresh
    expect(createdClass.teacherOneId).toBe(createdTeacher.id)

    const t1Classes = await teachers.function('Default.queryClass', createdTeacher.tid);
    expect(t1Classes.value).toHaveLength(1);
    expect(t1Classes.value[0]).toBe(createdClass.name);

    // >> clean
    await classes.delete(createdClass.cid); // delete ref item firstly
    await teachers.delete(createdTeacher.tid);
  });

  it('should support batch request in json format (OData V4.01)', async () => {

    interface Teacher {
      tid: number;
      name: string;
    }

    const testLength = 4
    const testNames = Array(testLength).fill('').map(() => v4())
    const testNumers = Array(testLength).fill(0).map(() => Math.ceil(Math.random() * 1000))

    const client = OData.New4({ metadataUri: metadata, variant: "@odata/server" })
    const teachers = client.getEntitySet<Teacher>("Teachers")
    const classes = client.getEntitySet("Classes")

    const reqs = testNames.map(testName => teachers.batch().create({ name: testName }))

    const ress = await client.execBatchRequestsJson(reqs)

    expect(ress).toHaveLength(testLength)

    ress.forEach(res => expect(res.status).toBe(201))

    const creations = await unwrapBatchResponse(ress)

    await client.execBatchRequestsJson(creations.map(created => teachers.batch().delete(created.tid)))

    const finds = await unwrapBatchResponse(client.execBatchRequestsJson(creations.map(created => teachers.batch().count({ tid: created.tid }))))

    finds.forEach(finded => expect(finded["@odata.count"]).toBe(0))


  });

});
