import "jest"
import "isomorphic-fetch"
import { readFileSync } from "fs";
import { join } from "path";
import { parseMultiPartContent, formatBatchRequest } from "../src/batch";
import { OData } from "../src/request";
import { v4 } from "uuid";

describe('test batch multipart parse & format', () => {

  beforeEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
  });

  test('should parse multipart', async () => {
    const sample = readFileSync(join(__dirname, "./resources/batch/sample.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "ejjeeffe0")
    expect(await responses[0].json()).toEqual({
      "d": {
        "results": [
          {
            "__metadata": {
              "uri": "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/ServiceRequestCollection('00163E20C9511ED7B6C53C069E784637')",
              "type": "cust.ServiceRequest",
              "etag": "W/\"datetimeoffset'2018-01-16T03%3A02%3A26.5744460Z'\""
            },
            "ObjectID": "00163E20C9511ED7B6C53C069E784637"
          }
        ]
      }
    })
  })

  test('should parse complex multipart', async () => {
    const sample = readFileSync(join(__dirname, "./resources/batch/complex-multipart.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "ejjeeffe0")
    expect(await responses[3].text())
  })

  test('should parse standard odata multipart', async () => {
    const sample = readFileSync(join(__dirname, "./resources/batch/sample.standard.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "batchresponse_939aeb3e-6c08-4051-a65c-638da9146941")
    expect((await responses[0].json())["d"].length).toEqual(1)
  })


  test('should format multipart', () => {
    const test: RequestInit = {
      headers: {
        "Accept": "application/json"
      }
    }

    const result = formatBatchRequest([
      {
        url: "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/ServiceRequestCollection/?$select=ObjectID&$top=1",
        init: test
      },
      {
        url: "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/ServiceRequestCollection/?$skip=3&$inlinecount=allpages&$select=ObjectID&$top=1",
        init: test
      },
      {
        url: "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/BO_VOCRootCollection",
        init: {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Content-Length": "100000"
          },
          body: JSON.stringify({
            "Description": "VOC OData 测试",
            "Id": "TEST0000f44"
          })
        }
      },
      {
        url: "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/BO_VOCRootCollection",
        init: {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Content-Length": "100000"
          },
          body: JSON.stringify({
            "Description": "VOC OData 测试",
            "Id": "TEST0000f4s"
          })
        }
      }
    ], "test")

    expect(result)

  })


  test('should request batch get', async () => {
    const odata = OData.New({
      metadataUri: "http://services.odata.org/V2/(S(dj5xyxxt14bkddw5m33kfqxz))/OData/OData.svc/$metadata",
      processCsrfToken: false,
    })
    const result = await odata.execBatchRequests([
      odata.newBatchRequest({
        collection: "Products",
        params: OData.newParam().top(1).inlinecount(true)
      }),
      odata.newBatchRequest({
        collection: "Products",
        params: OData.newParam().skip(1).top(1).inlinecount(true)
      })
    ])
    const resultObjects = await Promise.all(result.map(r => r.json()));
    expect(resultObjects[0]["d"]["__count"]).toEqual("9")
    expect(resultObjects[1]["d"]["__count"]).toEqual("9")
  })

  test('should request batch create', async () => {
    const odata = OData.New({
      metadataUri: `http://services.odata.org/V2/(S(${v4()}))/OData/OData.svc/$metadata`,
      processCsrfToken: false,
    })
    const testDesc1 = v4(); // a generated uuid
    const testDesc2 = v4();
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

    // assert
    result[0].json().then(r1 => expect(r1.d["Description"]).toEqual(testDesc1))
    result[1].json().then(r1 => expect(r1.d["Description"]).toEqual(testDesc2))

  })

})

