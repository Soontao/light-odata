# C4C OData Javascript Library

[![CircleCI](https://circleci.com/gh/Soontao/c4codata.svg?style=shield)](https://circleci.com/gh/Soontao/c4codata)
[![codecov](https://codecov.io/gh/Soontao/c4codata/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/c4codata)
[![npm version](https://badge.fury.io/js/c4codata.svg)](https://badge.fury.io/js/c4codata)
[![npm](https://img.shields.io/npm/dy/c4codata.svg)](https://www.npmjs.com/package/c4codata)

OData Client for SAP C4C OData (v2) Service

## install

```bash
npm i -g c4codata # global generator
npm i -S c4codata # in your project
```

## generator usage

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
odata-js-generator -m https://host/sap/c4c/odata/v1/c4codata/$metadata?sap-label=true -u user -p pass
# then, you could use the c4codata.js to operation OData
```

## OData

```javascript
import { OData, ODataParam, ODataFilter } from "c4codata"

// odata sample service
const TestServiceURL = "http://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const odata = new OData(TestServiceURL)

// read by filter
// http://services.odata.org/V2/Northwind/Northwind.svc/Customers?$format=json&$filter=Phone eq '030-0074321'
const filter = ODataFilter.newFilter().field("Phone").eqString("030-0074321");
const result = await odata.request("Customers", undefined, ODataParam.newParam().filter(filter))
expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")

```

## Batch requests

use odata `$batch` api for operating multi entities in single http request

```javascript

import { OData } from "c4codata"

const odata = OData.New({
  metadataUri: "http://services.odata.org/V2/(S(fw3rjcrboq25moedupvhuhx3))/OData/OData.svc/$metadata",
  processCsrfToken: false,
})
const bRequest1 = await odata.newBatchRequest({
  collection: "Products",
  entity: {
    ID: 100009
  },
  method: "POST",
  // withContentLength: true, for SAP OData, please set this flag as true
})
const bRequest2 = await odata.newBatchRequest({
  collection: "Products",
  entity: {
    ID: 100012
  },
  method: "POST",
  // withContentLength: true, for SAP OData, please set this flag as true
})
const result = await odata.execBatchRequests([bRequest1, bRequest2])
expect(result[0].status).toEqual(201)
expect(result[1].status).toEqual(201)

```

## ODataFilter

use `ODataFilter` to filter data

```js
// import
import { ODataFilter } from "c4codata";
```

### filter by single field value

```js
// Name eq 'test string'
ODataFilter.newFilter().field("Name").eqString("test string")
```

### filter by multi fields

```js
// Name eq 'test string1' and Name2 eq 'test string2'
ODataFilter
  .newFilter()
  .field("Name").eq("'test string1'")
  .and()
  .field("Name2").eqString("test string2")
```

### filter by one field but multi values

```js
// (Name eq 'test string1') and (Name eq 'test string1' or Name eq 'test string2')
ODataFilter.newFilter().field("Name").eq("'test string1'").and(
  ODataFilter.newFilter().fieldIn("Name", ["test string1", "test string2"])
)
```

## ODataParam

use `ODataParam` to control data size, fields and order

### page

```javascript 
// equal to $format=json&$skip=30&$top=10
ODataParam.newParam().skip(30).top(10)
```

### inline count 

```javascript 
// equal to $format=json&$inlinecount=allpages
ODataParam.newParam().inlinecount(true)
```

### orderby

```javascript
// equal to $format=json&$orderby=CreationDateTime desc
ODataParam.newParam().orderby("CreationDateTime")
```

### multi fields orderby

```javascript
// equal to $format=json&$orderby=A desc,B asc
ODataParam.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }])
```

## Limitation

SAP Cloud for Customer's OData, only support use AND in different fields and OR in same field..

## TO-DO

* Batch requests declaration
* Documents
* Codelist generator
* OAuth Support

## LICENSE

MIT
