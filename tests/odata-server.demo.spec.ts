import { v4 } from "uuid";
import { OData } from "../src";
import "../src/polyfill";


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

});
