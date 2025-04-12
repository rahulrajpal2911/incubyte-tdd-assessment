import { calculateString } from "../src/StringCalculator";

describe("String Calculator TDD Kata", () => {
  it("function should exist", () => {
    expect(calculateString("0")).toBeDefined();
  });

  it("Should return `0` if empty string found", () => {
    expect(calculateString("0")).toBe(0);
  });

  it("Should return number if it's single digit", () => {
    for (let i = 0; i < 10; i++) {
      expect(calculateString(i.toString())).toBe(i);
    }
  });

  it("Should return sum if delimiter is a comma", () => {
    for (let i = 0; i < 10; i++) {
      expect(calculateString(`${i.toString()},${(i + 1).toString()}`)).toBe(
        i + (i + 1),
      );
    }
  });

  it("Should support custom delimiters", () => {
    expect(calculateString("//[1[2")).toBe(3);
    expect(calculateString("//[1[2[6")).toBe(9);
  });

  it("Delimiters should be of any length", () => {
    expect(calculateString("//[***]\n1***2***3")).toBe(6);
  });

  it("Should support different delimiters", () => {
    expect(calculateString("//;\n1;2")).toBe(3);
    expect(calculateString("//;\n1;2;6")).toBe(9);
  });

  it("Should ignore Numbers > 1000", () => {
    expect(calculateString("9;1000;9")).toBe(18);
  });

  it("Should throw an exception if negative number found", () => {
    expect(() => calculateString("-1")).toThrow(
      "negative numbers not allowed -1",
    );
  });

  it("Should throw an exception if multiple negative number found", () => {
    expect(() => calculateString("-1;-3;2")).toThrow(
      "negative numbers not allowed -1, -3",
    );
  });
});
