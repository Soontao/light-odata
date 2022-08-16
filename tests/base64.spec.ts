import { encode, encodeJs, decode, decodeJs } from "../src/base64";


describe('base64 Test Suite', () => {

  it('should be same', () => {

    for (let idx = 0; idx < 100; idx++) {
      // generate a random string
      const input = Math.random().toString(36);
      expect(encode(input)).toBe(encodeJs(input));
      expect(decode(encode(input))).toBe(decodeJs(encodeJs(input)));
    }

  });

});
