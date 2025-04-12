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
        i + (i + 1)
      );
    }
  });
});
