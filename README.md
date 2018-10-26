# OData Javascript Library

[![CircleCI](https://circleci.com/gh/Soontao/c4codata.svg?style=shield)](https://circleci.com/gh/Soontao/c4codata)
[![codecov](https://codecov.io/gh/Soontao/c4codata/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/c4codata)
[![npm version](https://badge.fury.io/js/c4codata.svg)](https://badge.fury.io/js/c4codata)
[![unpkg](https://img.shields.io/github/license/mashape/apistatus.svg)](https://unpkg.com/c4codata?meta)

OData Client for SAP C4C OData (v2) Service, in theory, support all services implemented by odata v2

## install

```bash
npm i -S c4codata # in your project
```

or add [UNPKG](https://unpkg.com/c4codata) link to your page

```html
<script src="https://unpkg.com/c4codata"></script>
```

## OData Client

Start with a simple query:

```javascript
import { OData } from "c4codata"

// odata.org sample odata service
const TestServiceURL = "https://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const odata = new OData(TestServiceURL)

// Query by filter
//
// GET /V2/Northwind/Northwind.svc/Customers?$format=json&$filter=Phone eq '030-0074321'
const filter = OData.newFilter().field("Phone").eqString("030-0074321");
// In fact, you cant use await in top level, just a sample
const result = await odata.newRequest({ // ODataRequest object
  collection: "Customers", // collection name
  params: OData.newParam().filter(filter) // odata param
  // method: "GET", default with GET method for QUERY/READ
})
```

`ODataRequest` interface as following:

```ts
interface ODataRequest<T> {
  /**
   * collection name
   */
  collection: string,
  /**
   * object key in READ/UPDATE/DELETE
   */
  id?: string,
  /**
   * params in QUERY
   */
  params?: ODataQueryParam,
  /**
   * GET for QUERY/READ; for QUERY, you can use params to control response data
   * 
   * PATCH for UPDATE
   * 
   * POST for CREATE
   * 
   * DELETE for delete
   */
  method?: HTTPMethod,
  /**
   * data object in CREATE/UPDATE
   */
  entity?: T
}
```

## ODataFilter

use `ODataFilter` to filter data

C4C only support AND operator between different fields, and OR operator between same field

So you don't need to specify the operator between fields.

Though C4C only support AND operator in different fields, but for gt/lt/ge/le, you can use AND for filtering period data.

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
// Name2 eq 'test string1' and (Name eq 'test string1' or Name eq 'test string2')
OData.newFilter()
  .field("Name").eq("'test string1'")
  .field("Name2").in(["test string3", "test string2"])
```

### field by date

Depends on field type, use `betweenDateTime` or `betweenDateTimeOffset` to filter date

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

// (CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .field("CreationDateTime").betweenDateTime(
    new Date("2018-01-24T12:43:31.839Z"),
    new Date("2018-05-24T12:43:31.839Z")
    // include boundary value
  )
  .build()
```

## ODataParam

use `ODataParam` to control data size, fields and order by

### page

`skip` first 30 records and `top` 10 records

```js
// equal to $format=json&$skip=30&$top=10
OData.newParam().skip(30).top(10)
```

### inline count

response with all pages count, usefully

```js
// equal to $format=json&$inlinecount=allpages
OData.newParam().inlinecount(true).top(1).select("ObjectID")
```

### orderby

sort data by one field

```javascript
// equal to $format=json&$orderby=CreationDateTime desc
OData.newParam().orderby("CreationDateTime")
```

### multi fields orderby

sort data by multi field

```javascript
// equal to $format=json&$orderby=A desc,B asc
OData.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }])
```

## Batch requests

use odata `$batch` api for operating multi entities in **single** HTTP request

```javascript

const odata = OData.New({
  metadataUri: `https://services.odata.org/V2/(S(${v4()}))/OData/OData.svc/$metadata`,
  processCsrfToken: false, // set false if you dont need process csrf token
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

```

## generator usage

install it global firstly

```bash
npm i -g c4codata # type defination generator
```

c4codata includes a type defination generator to help developer invoke odata api.

```bash

Usage:
  odata-js-generator [OPTIONS] [ARGS]

Options:
  -m, --uri STRING       metadata uri
  -u, --user STRING      c4c username
  -p, --pass STRING      c4c password
  -o, --out [STRING]     out file (Default is c4codata.js)
  -d, --debug BOOLEAN    debug mode
  -s, --separate STRING  out with separate files in directory
  -r, --odatajs BOOLEAN  seperate generator without odata.js
  -h, --help             Display help and usage details

```

sample command (generate single js file)

```bash
# use following command to generate declaration
odata-js-generator -m https://host/sap/c4c/odata/v1/c4codata/$metadata?sap-label=true -u c4c-username -p c4c-password
# then, you could use the c4codata.js to operation OData
```

## TO-DO

* Documents

## [CHANGELOG](https://github.com/Soontao/c4codata/blob/master/CHANGELOG.md)

## LICENSE

MIT License

Copyright (c) 2018 Theo Sun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.