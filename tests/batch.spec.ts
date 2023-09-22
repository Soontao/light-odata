import map from "@newdash/newdash/map";
import { readFile } from "fs/promises"
import { join } from "path";
import { v4 } from "uuid";
import { OData, parseMultiPartContent } from "../src";
import { createSampleV2RamdomSevice, ODATA_SAMPLE_SERVICE_HOST } from "./utils";

describe('test batch multipart parse & format', () => {

  test('should parse multipart', async () => {
    const sample = await readFile(join(__dirname, "./resources/batch/sample.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "ejjeeffe0")
    expect(await responses[0].json()).toMatchSnapshot()
  })

  test('should parse complex multipart', async () => {
    const sample = await readFile(join(__dirname, "./resources/batch/complex-multipart.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "ejjeeffe0")
    expect(await responses[3].text())
  })

  test('should parse standard odata multipart', async () => {
    const sample = await readFile(join(__dirname, "./resources/batch/sample.standard.response"), { encoding: "utf8" })
    const responses = await parseMultiPartContent(sample, "batchresponse_939aeb3e-6c08-4051-a65c-638da9146941")
    expect((await responses[0].json())["d"].length).toEqual(1)
  })



  test('should request batch format', async () => {
    const base = `https://${ODATA_SAMPLE_SERVICE_HOST}/V2/(S(${v4()}))/OData/OData.svc/`
    const odata = OData.New({
      metadataUri: `${base}/$metadata`,
    })
    const testDesc1 = v4(); // a generated uuid
    const testDesc2 = v4();
    // @ts-ignore
    const result = await odata.formatBatchRequests([
      odata.newBatchRequest({
        collection: "Products",
        entity: JSON.stringify({
          ID: 100009,
          Description: testDesc1,
        }),
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

    expect(result.url).toEqual(`${base}/$batch`)
    expect(result.req.body)

  })

  test('should request with batch', async () => {
    const base = createSampleV2RamdomSevice()
    const odata = OData.New({
      metadataUri: `${base}/$metadata`,
    })
    const requests = [
      odata.newBatchRequest({
        collection: "Products",
        params: OData.newParam().skip(1).top(1)
      }),
      odata.newBatchRequest({
        collection: "Products",
        params: OData.newParam().skip(2).top(1)
      }),
      odata.newBatchRequest({
        collection: "Products",
        id: 0
      }),
      odata.newBatchRequest({
        collection: "Products",
        method: "POST",
        entity: {
          ID: 100012,
          Description: "Test Description",
        }
      })
    ]
    const result = await odata.execBatchRequests(requests)
    await Promise.all(
      map(result, async r => {
        var json = await r?.json();
        if (json) {
          expect(json.d);
          expect(json.error).toBeUndefined()
        }
        expect(r?.status == 200 || r?.status == 201).toEqual(true)
      })
    )
  })

})

