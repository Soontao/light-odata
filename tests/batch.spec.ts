import "jest"
import { readFileSync } from "fs";
import { join } from "path";
import { parseMultiPartContent, formatBatchRequest } from "../src/batch";

describe('test batch multipart parse & format', () => {

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
    console.log(await responses[2].text())
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
            "Id": "TEST0000f4"
          })
        }
      }
    ], "test")

    expect(result)

  })



})

