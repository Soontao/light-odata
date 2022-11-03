import { formatBatchRequest } from "../src/batch";
import * as uuid from "uuid";

jest.mock("uuid")

describe('Batch MultiPart Test Suite', () => {

  it('should format multipart', () => {
    const test: any = {
      headers: {
        "Accept": "application/json"
      }
    };

    (uuid.v4 as any)
      .mockReturnValueOnce('eac3918e-1d62-4bbe-a415-469f4f00facf')
      .mockReturnValueOnce("4fb20670-40cb-44ee-b158-cbae40199c97")

    const result = formatBatchRequest([
      {
        url: "https://xxxxxx.odata.public.server.cn/sap/c4c/odata/cust/v1/servicemobileapp/ServiceRequestCollection/?$select=ObjectID&$top=1",
        init: test
      },
      {
        url: "https://xxxxxx.odata.public.server.cn/sap/c4c/odata/cust/v1/servicemobileapp/ServiceRequestCollection/?$skip=3&$inlinecount=allpages&$select=ObjectID&$top=1",
        init: test
      },
      {
        url: "https://xxxxxx.odata.public.server.cn/sap/c4c/odata/cust/v1/servicemobileapp/BO_VOCRootCollection",
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
        url: "https://xxxxxx.odata.public.server.cn/sap/c4c/odata/cust/v1/servicemobileapp/BO_VOCRootCollection",
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

    expect(result).toMatchSnapshot()

  })

});
