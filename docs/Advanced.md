
## Advanced

### Literal in URI

> just use the `EdmV2`/`EdmV2`.`Type`.`from` to create literal object, and then framework could process it correct in url/body 

```ts
test("Read by GUID ID (Guid)", async () => {
  const odata = OData.New({
    serviceEndpoint: "https://services.odata.org/v4/OData/OData.svc/",
    version: "v4",
  });
  const result = await odata.newRequest<any>({
    collection: "Advertisements",
    id: EdmV4.Guid.from("f89dee73-af9f-4cd4-b330-db93c25ff3c7"),
  });
  expect(result.error).toBeUndefined();
  expect(result.Name).toEqual("Old School Lemonade Store, Retro Style");
});
```

### Fetch Proxy

> there is an option which named `fetchProxy`, developer could use ti customize all requests input and output 


```ts
const client = OData.New({
  serviceEndpoint: 'xxxxx',
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
  serviceEndpoint: 'http://dummy.com/odata/srv/',
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
