import { OData } from "../src";


describe('Fixtures Test Sutie', () => {


  it('should support send with headers', async () => {

    const fetchProxy = jest.fn().mockResolvedValue({ content: { d: [] } })
    const client = OData.New({
      metadataUri: 'http://dummy.com/odata/srv/$metadata',
      fetchProxy,
      commonHeaders: {
        'x-value-header': 'x header value'
      }
    })
    const data = await client.newRequest({ method: "GET", collection: "Dummy" })
    expect(data).toEqual({ d: [] })
    expect(fetchProxy).toHaveBeenLastCalledWith("http://dummy.com/odata/srv/Dummy", {
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "x-value-header": "x header value",
      },
      "method": "GET"
    })
  });

});
