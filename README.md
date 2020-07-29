# Light-OData

[![CircleCI](https://img.shields.io/circleci/build/github/Soontao/light-odata?label=circleci)](https://circleci.com/gh/Soontao/c4codata)
[![codecov](https://codecov.io/gh/Soontao/light-odata/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/light-odata)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://unpkg.com/c4codata?meta)
[![](https://data.jsdelivr.com/v1/package/npm/light-odata/badge)](https://www.jsdelivr.com/package/npm/light-odata)
[![npm version](https://badge.fury.io/js/light-odata.svg)](https://badge.fury.io/js/light-odata)
[![Netlify](https://img.shields.io/netlify/875f9eb3-319e-4dd7-b1eb-b3e5d15656ee?label=doc)](https://tender-dubinsky-6b6899.netlify.app/)

![Size](https://badgen.net/packagephobia/publish/light-odata)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=sqale_index)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
[![DeepScan grade](https://deepscan.io/api/teams/9408/projects/11929/branches/178297/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9408&pid=11929&bid=178297)

Lightweight OData Client for OData (v2) Service.

**OData V4 Support is In Progress**

## Installation

```bash
npm i -S light-odata
```

Alternative, in native browser environment, just add [unpkg](https://unpkg.com/light-odata) or [jsdeliver](https://www.jsdelivr.com/package/npm/light-odata) umd link to your page, and the `OData` object will be available in `window`.

```html
<script src="https://cdn.jsdelivr.net/npm/light-odata/lib/light-odata-umd.js"></script>
```

<!-- ToC start -->
## Table of Contents

   1. [Installation](#installation)
   1. [Table of Contents](#table-of-contents)
   1. [OData Version 2 concepts ](#odata-version-2-concepts-)
   1. [OData Client](#odata-client)
   1. [ODataParam](#odataparam)
   1. [ODataFilter](#odatafilter)
   1. [EntitySet](#entityset)
   1. [Batch requests](#batch-requests)
   1. [Server Side Polyfill](#server-side-polyfill)
   1. [Others](#others)
   1. [CHANGELOG](#changelog)
   1. [LICENSE](#license)
   1. [Thanks JetBrains](#thanks-jetbrains)
<!-- ToC end -->

## OData Version 2 concepts 

**If you are already familiar with OData, please skip this section**

<details><summary>Concepts</summary>

From [OData.org](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/)


### URI Format

> A URI used by an OData service has up to three significant parts: the service root URI, resource path and query string options. Additional URI constructs (such as a fragment) MAY be present in a URI used by an OData service; however, this specification applies no further meaning to such additional constructs.

### Pagination

> A data service URI with a $skip System Query Option identifies a subset of the Entries in the Collection of Entries identified by the Resource Path section of the URI. That subset is defined by seeking N Entries into the Collection and selecting only the remaining Entries (starting with Entry N+1). N is an integer greater than or equal to zero specified by this query option. If a value less than zero is specified, the URI should be considered malformed.

```
https://services.odata.org/OData/OData.svc/Products?$skip=2&$top=2&$orderby=Rating

The third and fourth Product Entry from the collection of all products when the collection is sorted by Rating (ascending).
```
### Filter

> A URI with a `$filter` System Query Option identifies a subset of the Entries from the Collection of Entries identified by the Resource Path section of the URI. The subset is determined by selecting only the Entries that satisfy the predicate expression specified by the query option.

| Operator             | Description           | Example                                            |
| -------------------- | --------------------- | -------------------------------------------------- |
| Eq                   | Equal                 | /Suppliers?$filter=Address/City eq 'Redmond'       |
| Ne                   | Not equal             | /Suppliers?$filter=Address/City ne 'London'        |
| Gt                   | Greater than          | /Products?$filter=Price gt 20                      |
| Ge                   | Greater than or equal | /Products?$filter=Price ge 10                      |
| Lt                   | Less than             | /Products?$filter=Price lt 20                      |
| Le                   | Less than or equal    | /Products?$filter=Price le 100                     |
| And                  | Logical and           | /Products?$filter=Price le 200 and Price gt 3.5    |
| Or                   | Logical or            | /Products?$filter=Price le 3.5 or Price gt 200     |

</details>

## OData Client

<details><summary>How to use light-odata</summary>

Start with a simple query, following code start a `GET` http request, and asks the server to respond to all customers which phone number equals 030-0074321

```javascript
import { OData } from "light-odata"

// odata.org sample odata service
const TestServiceURL = "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const client = OData.New({
  metadataUri: TestServiceURL,
  // variant: "c4c"
})

const runner = async () => {
  
  // Query by filter
  //
  // GET /Customers?$format=json&$filter=Phone eq '030-0074321'
  const filter = client.newFilter().field("Phone").eqString("030-0074321");

  const result = await client.newRequest({ // ODataRequest object
    collection: "Customers", // collection name
    params: client.newParam().filter(filter) // odata param
  })

}
```


```js
// OData V4 client
const Service = "https://odata-v4-demo-001.herokuapp.com/odata/$metadata"

const client = OData.New4({
  metadataUri: Service,
  variant: "cap"
})

```

### ODataRequest interface

```ts
interface ODataRequest<T> {
  collection: string, /** collection name */
  id?: any, /** object key in READ/UPDATE/DELETE, user could set this field with number/string/object type */
  params?: ODataQueryParam, /** params in QUERY */
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * PATCH for UPDATE (partial)
   * PUT for UPDATE (overwrite)
   * POST for CREATE
   * DELETE for DELETE
   */
  method?: HTTPMethod,
  entity?: T /** data object in CREATE/UPDATE */
}
```

### ODataResponse interface


```typescript
interface PlainODataResponse {
  d?: {
    __count?: string; /** $inlinecount values */
    results: any | Array<any>; /** result list/object */
    [key: string]: any;
  };
  error?: { /** if error occurred, node error will have value */
    code: string;
    message: {
      lang: string, 
      value: string /** server error message */
    }
  }
}
```

</details>

## ODataParam

use `ODataParam` to control data size, involved fields and order

<details><summary>How to use ODataParam</summary>

### pagination

`skip` first 30 records and `top` 10 records

```js
// equal to $format=json&$skip=30&$top=10
OData.newParam().skip(30).top(10)
```

### filter

filter data by fields value

```js
// $format=json&$filter=A eq 'test'
OData.newParam().filter(OData.newFilter().field("A").eqString("test"))
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

### fields select

remove unused fields from response

```js
// $format=json&$select=ObjectID,Name
OData.newParam().select("ObjectID").select("Name");
```

### full text search (basic query)

search all **supported** fields with text

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

</details>

## ODataFilter

use the `ODataFilter` to filter data

<details><summary>How to use ODataFilter</summary>


Most `SAP` systems only support `AND` operator between different fields, and `OR` operator in a same field. (it depends on SAP Netweaver implementation)

So you don't need to specify `AND/OR` operator between fields, `light-odata` will auto process it.

Though C4C only support AND operator in different fields, but for `gt/lt/ge/le`, you can use AND for filtering period data.

just ref following examples

### filter by single field value

```js
// Name eq 'test string'
OData.newFilter().field("Name").eqString("test string")

// ID lt '1024'
OData.newFilter().field("ID").lt("'1024'")

// also support eq/ne/le/lt/gt/ge ...
```

### filter by multi fields

```js
// Name eq 'test string1' and Name2 eq 'test string2'
OData
  .newFilter()
  .field("Name").eq("'test string1'")
  .field("Name2").eqString("test string2")
```

### filter by one field but multi values

```js
// Name eq 'test string1' and (Name2 eq 'test string1' or Name2 eq 'test string2')
OData.newFilter()
  .field("Name").eq("'test string1'")
  .field("Name2").in(["test string3", "test string2"])
```

### filter by date

Depends on field type, use `betweenDateTime` or `betweenDateTimeOffset` to filter date。

Please provide `Date` object in this api.

```js
// Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .field("Name").eq("'test string1'")
  .field("CreationDateTime").betweenDateTime(
    new Date("2018-01-24T12:43:31.839Z"),
    new Date("2018-05-24T12:43:31.839Z"),
    false
  )
  .build()

// > include boundary value

// (CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .field("CreationDateTime").betweenDateTime(
    new Date("2018-01-24T12:43:31.839Z"),
    new Date("2018-05-24T12:43:31.839Z")
  )
  .build()
```

</details>

## EntitySet

use `EntitySet` to `CRUD` entity

<details><summary>How to use EntitySet</summary>

```ts
const runner = async () => {

  // odata client
  const client = createClient()
  const es = client.getEntitySet<CapDemoPeople>("Peoples")

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

## Server Side Polyfill

Use polyfill for your server-side application.

```js
// import "light-odata/lib/polyfill"
require("light-odata/lib/polyfill")

// use OData
```

## Others

Use the go tool '[markdown-toc](https://github.com/sebdah/markdown-toc)' to generate table of contents, with following commands: 


```bash
markdown-toc --replace --inline --depth 2 --header "## Table of Contents" --skip-headers=1  README.md
```

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)

## Thanks JetBrains

[![](https://res.cloudinary.com/digf90pwi/image/upload/c_scale,h_100/v1592445332/jetbrains-variant-2-blackandwhite_ppc34r.png)](https://www.jetbrains.com/?from=light-odata)
