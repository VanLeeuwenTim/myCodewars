const validatePin = require("./validatePin");

describe("test validatePin", () => {
  it("should return False for pins with length other than 4 or 6", () => {
    expect(validatePin("123")).toBe(false);
    expect(validatePin("12345")).toBe(false);
    expect(validatePin("1234567")).toBe(false);
  });

  it("should return False for pins which contain characters other than digits", () => {
    expect(validatePin("abcd")).toBe(false);
    expect(validatePin("11av")).toBe(false);
    expect(validatePin("a1234")).toBe(false);
  });

  it("should return True for valid pins", () => {
    expect(validatePin("1111")).toBe(true);
    expect(validatePin("123456")).toBe(true);
  });
});
