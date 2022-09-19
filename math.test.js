const { divide, multiply, subtract, sum } = require("./math");

describe("Math", () => {
  it("should sum 2 + 2 to be 4", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });

  it("should multiply 3 * 3 to be 9", () => {
    const result = multiply(3, 3);
    expect(result).toBe(9);
  });

  it("should divide 3 / 3 to be 1", () => {
    const result = divide(3, 3);
    expect(result).toBe(1);
  });

  it("should subtract 3 - 3 to be 9", () => {
    const result = subtract(3, 3);
    expect(result).toBe(0);
  });
});

test("Array", () => {
  let days = ["Monday", "Tuesday", "Wednesday"];
  expect(days).toContain("Tuesday");
  expect(days).not.toContain("Friday");
});
