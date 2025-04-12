export function calculateString(str: string) {
  if (str.length !== 0) {
    if (!isNaN(Number(str)) && Number(str) < 10) {
      return Number(str);
    } else {
      const regex = /[,]/g;
      const numbers = str.split(regex).map(Number);
      return numbers.reduce((a, b) => a + b);
    }
  }
  return 0;
}
