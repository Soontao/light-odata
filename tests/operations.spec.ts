import { OData } from "../src";
import "../src/polyfill";
import { createSampleV2RamdomSevice } from "./utils";

describe('Function/Action Test Suite', () => {

  const randomV2Service = createSampleV2RamdomSevice()

  it('should support call FunctionImport with parameters', async () => {
    const client = OData.New({ metadataUri: randomV2Service })
    const response = await client.functionImport("GetProductsByRating", { rating: 4 })
    expect(response.error).toBeUndefined()
    expect(response['d']).toHaveLength(1)
  });

  it('should support call FunctionImport with params', async () => {
    const client = OData.New({ metadataUri: randomV2Service })
    const response = await client.functionImport("GetProductsByRating", {}, client.newParam().custom("rating", 4))
    expect(response.error).toBeUndefined()
    expect(response['d']).toHaveLength(1)
  });

  it('should support call FunctionImport with params directly', async () => {
    const client = OData.New({ metadataUri: createSampleV2RamdomSevice() })
    const response = await client.functionImport("GetProductsByRating", { rating: 3 })
    expect(response.error).toBeUndefined()
    expect(response.d).toHaveLength(8)
  });

  it('should support call FunctionImport with parameters & params', async () => {
    const client = OData.New({ metadataUri: randomV2Service })
    const response = await client.functionImport("GetProductsByRating", { rating: 4 }, client.newParam().format("json"))
    expect(response.error).toBeUndefined()
    expect(response['d']).toHaveLength(1)
  });

  it('should response error node without parameters', async () => {
    const client = OData.New({ metadataUri: randomV2Service })
    const response = await client.functionImport("GetProductsByRating")
    expect(response.error).not.toBeUndefined()
  });

});
