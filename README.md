# C4C OData Javascript Library

[![CircleCI](https://circleci.com/gh/Soontao/c4codata.svg?style=shield)](https://circleci.com/gh/Soontao/c4codata) [![codecov](https://codecov.io/gh/Soontao/c4codata/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/c4codata)

Simplify Code at JS Client for SAP C4C OData (v2) Service

## install

```bash
npm i -g c4codata # global
npm i -S c4codata # in your project
```

## usage

```bash

Usage:
  cli [OPTIONS] [ARGS]

Options:
  -m, --uri STRING       metadata uri
  -u, --user STRING      c4c username
  -p, --pass STRING      c4c password
  -o, --out [STRING]     out file (Default is c4codata.js)
  -s, --separate STRING  out with separate files in directory
  -h, --help             Display help and usage details

```

sample command

```bash
# use following command to generate declaration
odata-js-generator -m https://<your c4c host>/sap/c4c/odata/v1/c4codata/$metadata?sap-label=true -u <your c4c user> -p <your c4c password>
# then, you could use the c4codata.js to operation OData
```

## programming api

```javascript

import { OData, ODataParam, ODataFilter } from "c4codata"

// odata sample service
const TestServiceURL = "http://services.odata.org/V2/Northwind/Northwind.svc/$metadata"
const odata = new OData(TestServiceURL)
// read by object id
const result = await odata.request("Customers", "ALFKI")
expect(result.d["CustomerID"]).toEqual("ALFKI")

// read by filter
const filter = ODataFilter.newFilter().field("Phone").eqString("030-0074321");
const result = await odata.request("Customers", undefined, ODataParam.newParam().filter(filter))
expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")

// read by complex filter
const filter = ODataFilter
  .newFilter()
  .group(
    // phone eq '030-0074321' or '(5) 555-4729'
    ODataFilter.newFilter().fieldIn("Phone", ["030-0074321", "(5) 555-4729"])
  )
  .and().field("CustomerID").eqString("ALFKI") // id eq 'ALFKI'
const param = ODataParam.newParam().filter(filter).inlinecount(true) // with inline count
const result = await odata.request("Customers", undefined, param)
expect(result.d.__count).toEqual("1")
expect(result.d.results[0]["CustomerID"]).toEqual("ALFKI")

```

## ODataParam

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

### multi filed orderby

```javascript
// equal to $format=json&$orderby=A desc,B asc
ODataParam.newParam().orderbyMulti([{ field: "A" }, { field: "B", order: "asc" }])
```

## TO-DO

* Documents
* Codelist generator
* OAuth Support

## LICENSE

MIT
