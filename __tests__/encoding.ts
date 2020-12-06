import {signedLEB128, unsignedLEB128} from "../src/encoding";

describe("encoding", () => {
  test("signedLEB128", () => {
    const expected = new Int8Array([10]);
    expect(signedLEB128(10)).toMatchObject(expected);
  });

  test("unsignedLEB128", () => {
    const expected = new Int8Array([15]);
    expect(unsignedLEB128(15)).toMatchObject(expected);
  })
});
