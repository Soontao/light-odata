## EntitySet

use `EntitySet` to perform `CRUD` on a specific entity

```ts
const runner = async () => {

  // odata client
  const client = createClient()
  const es = client.getEntitySet<CapDemoPeople>("Peoples") // with typescript generic type

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

  // RETRIEVE by id
  const res2 = await es.retrieve(id)
  expect(res2.UserName).toEqual(name)

  // UPDATE
  const firstName = Random.name();
  await es.update(id, { Name_FirstName: firstName })

  // DELETE
  await es.delete(id)

}
```

