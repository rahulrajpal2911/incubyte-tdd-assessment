export function calculateString(str: string) {
  let result = 0;
  if (str.length !== 0) {
    if (!isNaN(Number(str)) && Number(str) < 10 && Number(str) > 0) {
      result = Number(str);
    } else {
      const regex = /[,/\n;]/g;
      const numbers = str.split(regex).map(Number);
      const negatives = numbers.filter((n) => n < 0);
      if (negatives.length > 0) {
        throw new Error(
          `negative numbers not allowed ${negatives.length === 1 ? negatives[0] : negatives.join(", ")}`,
        );
      }
      const value = numbers.reduce((a, b) => {
        return a + b;
      });
      result = value;
    }
  }
  return result;
}
