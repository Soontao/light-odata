# C4C OData Javascript Library

 [![CircleCI](https://circleci.com/gh/Soontao/c4codata.svg?style=shield)](https://circleci.com/gh/Soontao/c4codata)
 [![codecov](https://codecov.io/gh/Soontao/c4codata/branch/master/graph/badge.svg)](https://codecov.io/gh/Soontao/c4codata)
 [![npm version](https://badge.fury.io/js/c4codata.svg)](https://badge.fury.io/js/c4codata)
 [![GitHub top language](https://img.shields.io/github/languages/top/Soontao/c4codata.svg)](https://github.com/Soontao/c4codata)
 [![npm](https://img.shields.io/npm/dy/c4codata.svg)](https://www.npmjs.com/package/c4codata)
 [![GitHub repo size in bytes](https://img.shields.io/github/repo-size/Soontao/c4codata.svg)](https://github.com/Soontao/c4codata)

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

## ODataFilter

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

* Documents
* Codelist generator
* OAuth Support

## LICENSE

MIT
