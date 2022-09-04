## Batch requests

use odata `$batch` api for operating multi entities in **single** HTTP request, it will save a lot of time between client & server (In the case of processing a large number of requests).

```javascript

const runner = async () => {

  const odata = OData.New({
    serviceEndpoint: `https://services.odata.org/V2/(S(${v4()}))/OData/OData.svc/`,
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
