const sumMix = require("./sumMixedArray.js");

describe("Example tests", () => {
  it("should return 42", () => {
    expect(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])).toEqual(42);
  });
});

describe("More example tests", () => {
  it("should return 42", () => {
    expect(Object.is(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42)).toBe(true);
  });
});
