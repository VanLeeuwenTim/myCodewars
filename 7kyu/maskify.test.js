const maskify = require("./maskify");

describe("Test maskify function", () => {
  test("if all but the last four chars are changed to #", () => {
    expect(Object.is(maskify("4556364607935616"), "############5616")).toBe(
      true
    );
  });
});
