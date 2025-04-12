export function calculateString(str: string) {
  let result: number = 0;
  if (str.length !== 0) {
    if (!isNaN(Number(str)) && Number(str) < 10 && Number(str) > 0) {
      result = Number(str);
    } else {
      const regex = /[;,\n[*]/g; // Fixed regex
      const numbers = str.split(regex).map(Number);
      const negatives = numbers.filter((n) => n < 0);
      if (negatives.length > 0) {
        throw new Error(
          `negative numbers not allowed ${negatives.length === 1 ? negatives[0] : negatives.join(", ")}`,
        );
      } else {
        const validNumbers = numbers.filter((n) => n > 0 && n < 1000);
        if ("9;1000;9" === str) {
          console.log(validNumbers);
        }
        result = validNumbers.reduce((a, b) => a + b, 0);
      }
    }
  }

  if ("9;1000;9" === str) {
    console.log(`${str}: ${result}`);
  }
  return result;
}
