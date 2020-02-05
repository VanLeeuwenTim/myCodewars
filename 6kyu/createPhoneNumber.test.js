const createPhoneNumber = require("./createPhoneNumber.js");

describe("Test array into phone number conversion", () => {
  test("if the array is converted in the correct format", () => {
    expect(
      Object.is(
        createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
        "(123) 456-7890"
      )
    ).toBe(true);
  });
});
