# OData Client

[![npm (scoped)](https://img.shields.io/npm/v/@odata/client)](https://www.npmjs.com/package/@odata/client)
![NPM](https://img.shields.io/npm/l/@odata/client)
![npm](https://img.shields.io/npm/dy/@odata/client)
[![unittest](https://github.com/Soontao/light-odata/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Soontao/light-odata/actions/workflows/nodejs.yml)
[![codecov](https://codecov.io/gh/Soontao/light-odata/branch/main/graph/badge.svg)](https://codecov.io/gh/Soontao/light-odata)

![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@odata/client)
![node-lts (scoped with tag)](https://img.shields.io/node/v-lts/@odata/client/latest)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Soontao_c4codata&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Soontao_c4codata)
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
// import "@odata/client/lib/polyfill" // server side polyfill

// odata.org sample odata service
const serviceEndpoint = "https://services.odata.org/V2/Northwind/Northwind.svc/"
const client = OData.New({ serviceEndpoint })

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
const client = OData.New4({ serviceEndpoint: "https://odata-v4-demo-001.herokuapp.com/odata/" })
```


## SystemQueryOption

use `SystemQueryOption` to control `response size`, `element projection` and `order`

[go to the document](./docs/API.SystemQueryOptions.md)

## ODataFilter

use the `ODataFilter` to filter data

[go to the document](./docs/API.ODataFilter.md)

## EntitySet

use `EntitySet` to perform `CRUD` on a specific entity

[go to the document](./docs/API.EntitySet.md)

## Batch requests

use odata `$batch` api for operating multi entities in **single** HTTP request, it will save a lot of time between client & server (In the case of processing a large number of requests).

[go to the document](./docs/Batch.md)

## Advanced

some advanced topics

- literal in uri
- request interpreter
- server side polyfill

[go to the document](./docs/Advanced.md)

## [CHANGELOG](./CHANGELOG.md)

## [LICENSE](./LICENSE)

## Thanks JetBrains

[![](https://res.cloudinary.com/digf90pwi/image/upload/c_scale,h_100/v1592445332/jetbrains-variant-2-blackandwhite_ppc34r.png)](https://www.jetbrains.com/?from=light-odata)
