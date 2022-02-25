import * as types from "../src/types";
import * as typesV4 from "../src/types_v4";

describe('Types Test Suite', () => {

  it('should support support Edm object', () => {
    expect(types.EdmV2).not.toBeUndefined()
    expect(typesV4.EdmV4).not.toBeUndefined()
  });

  it('should support convert paylaod object with value', () => {
    expect(JSON.stringify({
      v: 1,
      c: null,
      d: { v: "value" }
    }, types.ODataValueJSONReplacer))
      .toBe("{\"v\":1,\"c\":null,\"d\":{\"v\":\"value\"}}")

    expect(JSON.stringify({
      v: types.EdmV2.RawString.from('2'),
      c: types.EdmV2.DateTime.from(new Date("2022-02-25T00:00:00Z")),
      d: { v: "value" }
    }, types.ODataValueJSONReplacer))
      .toBe("{\"v\":\"2\",\"c\":\"/Date(1645747200000)/\",\"d\":{\"v\":\"value\"}}")


  });

  it('should support deep transform', () => {
    expect(JSON.stringify({
      v: types.EdmV2.RawString.from('2'),
      c: null,
      d: {
        v: typesV4.EdmV4.Date.from(new Date("2022-02-25T00:00:00Z")),
      }
    }, types.ODataValueJSONReplacer))
      .toBe("{\"v\":\"2\",\"c\":null,\"d\":{\"v\":\"2022-02-25\"}}")
  });

  it('should support EdmV2.DateTimeOffset', async () => {
    expect(JSON.stringify({
      v: types.EdmV2.DateTimeOffset.from(new Date("2022-02-25T00:00:00Z")),
    }, types.ODataValueJSONReplacer))
      .toBe("{\"v\":\"/Date(1645747200000)/\"}")
  });

  it('should support EdmV4.DateTimeOffset', async () => {
    expect(JSON.stringify({
      v: typesV4.EdmV4.DateTimeOffset.from(new Date("2022-02-25T00:00:00Z")),
    }, types.ODataValueJSONReplacer))
      .toBe("{\"v\":\"2022-02-25T00:00:00.000Z\"}")
  });

});
