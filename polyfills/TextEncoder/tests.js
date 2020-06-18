/* eslint-env mocha, browser */
/* global proclaim, Symbol */

describe("TextEncoder", function() {
  it("has a valid constructor", () => {
    proclaim.isInstanceOf(new TextEncoder(), TextEncoder);
  });

  describe("#encoding", function() {
    it("returns 'utf-8' as the encoding", () => {
      var encoder = new TextEncoder();

      proclaim.equal(encoder.encoding, "utf-8");
    });
  });

  describe("#encode", function() {
    it("returns the result of running UTF-8's encoder", () => {
      var encoder = new TextEncoder();
      var usvString = "hello world";
      var uint8Array = encoder.encode(usvString);
      var expectedArray = new Uint8Array([
        104,
        101,
        108,
        108,
        111,
        32,
        119,
        111,
        114,
        108,
        100,
      ]);

      proclaim.deepEqual(uint8Array, expectedArray);
    });
  });
});
