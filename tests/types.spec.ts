import { formatId } from "../src";
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
      .toMatchSnapshot()

    expect(JSON.stringify({
      v: types.EdmV2.RawString.from('2'),
      c: types.EdmV2.DateTime.from(new Date("2022-02-25T00:00:00Z")),
      d: { v: "value" }
    }, types.ODataValueJSONReplacer))
      .toMatchSnapshot()
  });

  it('should support deep transform', () => {
    expect(JSON.stringify({
      v: types.EdmV2.RawString.from('2'),
      c: null,
      d: {
        v: typesV4.EdmV4.Date.from(new Date("2022-02-25T00:00:00Z")),
      }
    }, types.ODataValueJSONReplacer))
      .toMatchSnapshot()
  });

  it('should support EdmV2.DateTimeOffset', async () => {
    expect(JSON.stringify({
      v: types.EdmV2.DateTimeOffset.from(new Date("2022-02-25T00:00:00Z")),
    }, types.ODataValueJSONReplacer))
      .toMatchSnapshot()
  });

  it('should support EdmV4.DateTimeOffset', async () => {
    expect(JSON.stringify({
      v: typesV4.EdmV4.DateTimeOffset.from(new Date("2022-02-25T00:00:00Z")),
    }, types.ODataValueJSONReplacer))
      .toMatchSnapshot()
  });

  it('should support format Edm.String', () => {
    expect(JSON.stringify({ ID: types.EdmV2.String.from("v1") }, types.ODataValueJSONReplacer)).toMatchSnapshot()
    expect(JSON.stringify({ ID: typesV4.EdmV4.String.from("v1") }, types.ODataValueJSONReplacer)).toMatchSnapshot()
  });

  it('should support format-id for url', () => {
    expect(formatId(1)).
      toMatchInlineSnapshot(`"(1)"`)
    expect(formatId({ ID: 1 })).
      toMatchInlineSnapshot(`"(ID=1)"`)
    expect(formatId('1')).
      toMatchInlineSnapshot(`"('1')"`)
    expect(formatId({ ID: '1' })).
      toMatchInlineSnapshot(`"(ID='1')"`)
    expect(formatId({ ID: 'f0b3e560-b0c9-47ba-b90b-7913181e131f' })).
      toMatchInlineSnapshot(`"(ID=f0b3e560-b0c9-47ba-b90b-7913181e131f)"`)
    expect(formatId({ ID: types.Guid.from('f0b3e560-b0c9-47ba-b90b-7913181e131f') })).
      toMatchInlineSnapshot(`"(ID=f0b3e560-b0c9-47ba-b90b-7913181e131f)"`)
  });

});
