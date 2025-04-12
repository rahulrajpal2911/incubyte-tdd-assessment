import { calculateString } from "../src/StringCalculator";

describe("String Calculator TDD Kata", () => {
  it("function should exist", () => {
    expect(calculateString("0")).toBeDefined();
  });

  //An empty string returns `0`.
  it("Should return `0` if empty string found", () => {
    expect(calculateString("0")).toBe(0);
  });

  //A single number returns the number itself.
  it("Should return number if it's single digit", () => {
    for (let i = 0; i < 10; i++) {
      expect(calculateString(i.toString())).toBe(i);
    }
  });

  //Two numbers, comma-delimited, return their sum.
  it("Should return sum if delimiter is a comma", () => {
    for (let i = 0; i < 10; i++) {
      expect(calculateString(`${i.toString()},${(i + 1).toString()}`)).toBe(
        i + (i + 1),
      );
    }
  });

  //Support different delimiters:
  it("Should support different delimiters", () => {
    expect(calculateString("//;\n1;2")).toBe(3);
  });

  //Calling add with a negative number will throw an exception:
  //negative numbers not allowed <negative_number>
  it("Should throw an exception if negative number found", () => {
    expect(() => calculateString("-1")).toThrow(
      "negative numbers not allowed -1",
    );
  });

  //Calling add with a negative number will throw an exception:
  //negative numbers not allowed <negative_number>
  it("Should throw an exception if multiple negative number found", () => {
    expect(() => calculateString("-1;-3;2")).toThrow(
      "negative numbers not allowed -1, -3",
    );
  });
});
