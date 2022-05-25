# OData Client

[![npm (scoped)](https://img.shields.io/npm/v/@odata/client)](https://www.npmjs.com/package/@odata/client)
[![codecov](https://codecov.io/gh/Soontao/light-odata/branch/main/graph/badge.svg)](https://codecov.io/gh/Soontao/light-odata)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
[![Netlify](https://img.shields.io/netlify/4bfc3789-7d70-4c68-a1af-af5ed895a8e2?label=doc)](https://helpful-licorice-837ce2.netlify.app/)

![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@odata/client)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=sqale_index)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
[![DeepScan grade](https://deepscan.io/api/teams/9408/projects/11929/branches/178297/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9408&pid=11929&bid=178297)

Javascript OData Client for OData (v2/v4) Service.

## Installation

```bash
npm i -S @odata/client
```

Alternative, in native browser environment, just add [unpkg](https://unpkg.com/@odata/client) or [jsdeliver](https://www.jsdelivr.com/package/npm/@odata/client) umd link to your page, and the `OData` object will be available in `window`.

```html
<script src="https://cdn.jsdelivr.net/npm/@odata/client/lib/odata-client-umd.js"></script>
```

## ODataClient

> How to use `@odata/client`


Start with a simple query, following code start a `GET` http request, and asks the server to respond to all customers which phone number equals 030-0074321

```javascript
import { OData } from "@odata/client"

// odata.org sample odata service
const TestServiceURL = "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const client = OData.New({
  metadataUri: TestServiceURL,
})

const runner = async () => {
  
  // Query by filter
  //
  // GET /Customers?$format=json&$filter=Phone eq '030-0074321'
  const filter = client.newFilter().property("Phone").eq("030-0074321");

  // just an example, suggest to use the EntitySet API
  const result = await client.newRequest({ // ODataRequest object
    collection: "Customers", // entity set
    params: client.newParam().filter(filter) // odata param
  })

}
```

```js
// OData V4 client
const Service = "https://odata-v4-demo-001.herokuapp.com/odata/$metadata"
const client = OData.New4({ metadataUri: Service, variant: "cap" })
```


## ODataParam

use `ODataParam` to control `response size`, `element projection` and `order`

<details><summary>How to use ODataParam</summary>

### pagination

`skip` first 30 records and `top` 10 records

```js
// equal to $format=json&$skip=30&$top=10
OData.newParam().skip(30).top(10)
```

### filter

filter data by properties value

```js
// $format=json&$filter=A eq 'test'
OData.newParam().filter(OData.newFilter().property("A").eq("test"))
// same
OData.newParam().filter().property("A").eq("test")).filterEnd()
// freedom filter
OData.newParam().filter("A eq 'test'")
```

### inline count

response with all records count, usefully.

also could set with `filter`, and response with filtered records count.

```js
// equal to $format=json&$inlinecount=allpages
OData.newParam().inlinecount(true).top(1).select("ObjectID")
```

### orderby

sort response data

```javascript
// result is $format=json&$orderby=CreationDateTime desc
OData.newParam().orderby("CreationDateTime")

// result is $format=json&$orderby=A desc,B asc
OData.newParam().orderby([{ field: "A" }, { field: "B", order: "asc" }])
```

### navigation property

expand association data

```javascript
// $expand=Customers
OData.newParam().expand("Customers")
// $expand=Customers,Employees
OData.newParam().expand(["Customers", "Employees"])
```

### properties select

remove unused properties from response

```js
// $format=json&$select=ObjectID,Name
OData.newParam().select("ObjectID").select("Name");
```

### full text search (basic query)

search all **supported** properties with text

**SAP systems feature**

**LOW PERFORMANCE**

```js
// fuzzy
// $format=json&$search=%any word%
OData.newParam().search("any word");
// not fuzzy
// $format=json&$search=any word
OData.newParam().search("any word", false);
```


### custom properties

> i know some odata system support custom query parameter for key authentication or other usage

```ts
OData.newParam().custom("access_token", "token_value"); // => $format=json&access_token=token_value
OData.newParam().custom("search", "v1"); // => $format=json&search=v1

```

</details>

## ODataFilter

use the `ODataFilter` to filter data

<details><summary>How to use ODataFilter</summary>


Most `SAP` systems only support `AND` operator between different properties, and `OR` operator in a same field. (it depends on SAP Netweaver implementation)

So you don't need to specify `AND/OR` operator between properties, `@odata/client` will auto process it.

Though C4C only support AND operator in different properties, but for `gt/lt/ge/le`, you can use AND for filtering period data.

just ref following examples

### filter by single property value

```js
// Name eq 'test string'
OData.newFilter().property("Name").eq("test string")

// ID lt '1024'
OData.newFilter().property("ID").lt("'1024'")

// also support eq/ne/le/lt/gt/ge ...
```

### filter by multi properties

```js
// Name eq 'test string1' and Name2 eq 'test string2'
OData
  .newFilter()
  .property("Name").eq("'test string1'")
  .property("Name2").eq("test string2")
```

### filter by one property but multi values (OR)

```js
// Name eq 'test string1' and (Name2 eq 'test string1' or Name2 eq 'test string2')
OData.newFilter()
  .property("Name").eq("'test string1'")
  .property("Name2").in(["test string3", "test string2"])
```

### filter by date

Use `between` to filter date。

Please provide `Date` object in this api.

```js
// Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .property("Name").eq("'test string1'")
  .property("CreationDateTime").between(
    ODataDateTime.from(new Date("2018-01-24T12:43:31.839Z")),
    ODataDateTime.from(new Date("2018-05-24T12:43:31.839Z")),
    false
  )
  .build()

// > include boundary value

// (CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .property("CreationDateTime").between(
    ODataDateTime.from(new Date("2018-01-24T12:43:31.839Z")),
    ODataDateTime.from(new Date("2018-05-24T12:43:31.839Z")),
  )
  .build()
```

### filter by function

```js
// CompagnyName contains 'testName' case sensitive
OData
  .newFilter()
  .property("indexof(CompanyName, 'testName')").gt(-1)

// CompagnyName has legth 8
OData
  .newFilter()
  .property("length(CompanyName)").eq(8)

// CompagnyName has substring 'test'
OData
  .newFilter()
  .property("substringof('test', CompanyName)").eq(true)
```
> see more possiblility at [4.5. Filter System Query Option ($filter) function](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/) odata v2 documentation

</details>

## EntitySet

use `EntitySet` to perform `CRUD` on a specific entity

<details><summary>How to use EntitySet</summary>

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

</details>

 
## Batch requests

use odata `$batch` api for operating multi entities in **single** HTTP request, it will save a lot of time between client & server (In the case of processing a large number of requests).

<details><summary>How to send batch request</summary>

```javascript

const runner = async () => {

  const odata = OData.New({
    metadataUri: `https://services.odata.org/V2/(S(${v4()}))/OData/OData.svc/$metadata`,
  })
  const testDesc1 = v4(); // a generated uuid
  const testDesc2 = v4();

  // execute reqeusts and return mocked responses
  const result = await odata.execBatchRequests([
    odata.newBatchRequest({
      collection: "Products",
      entity: {
        ID: 100009,
        Description: testDesc1,
      },
      method: "POST",
      // withContentLength: true, for SAP OData, please set this flag as true
    }),
    odata.newBatchRequest({
      collection: "Products",
      entity: {
        ID: 100012,
        Description: testDesc2,
      },
      method: "POST",
      // withContentLength: true, for SAP OData, please set this flag as true
    })
  ])

  result.map(r => expect(r.status).toEqual(201)) // Created

}



```

</details>

## Advanced

### Fetch Proxy

> there is an option which named `fetchProxy`, developer could use ti customize all requests input and output 


```ts
const client = OData.New({
  metadataUri: 'xxxxx',
  // the default fetch proxy
  fetchProxy: async (url, init) => {
    // just add some transform here 
    // for example, add headers, change url, rate limit, retry ...
    const response = await fetch(url, init);
    let content = await response.text();
    if (response.headers.has(S_CONTENT_TYPE) && startsWith(response.headers.get(S_CONTENT_TYPE), "application/json")) {
      const jsonResult = attempt(JSON.parse, content);
      // supress error
      if (!(jsonResult instanceof Error)) {
        content = jsonResult;
      }
    }
    return { content, response }; // the content is an object
  }
})
```

### Common Headers

> there is an option which named `commonHeaders` to add some headers to all requests (added after `@odata/client@5.19.3`)

```ts
const client = OData.New({
  metadataUri: 'http://dummy.com/odata/srv/$metadata',
  commonHeaders: {
    'x-value-header': 'x header value'
  }
})
```

## Server Side Polyfill

Use polyfill for your server-side application.

```js
// import "@odata/client/lib/polyfill"
require("@odata/client/lib/polyfill")

// use OData
```

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)

## Thanks JetBrains

[![](https://res.cloudinary.com/digf90pwi/image/upload/c_scale,h_100/v1592445332/jetbrains-variant-2-blackandwhite_ppc34r.png)](https://www.jetbrains.com/?from=light-odata)
