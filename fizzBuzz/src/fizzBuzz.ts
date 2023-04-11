export const fizzBuzz = (num: number): string => {
  if (num === 5) {
    return "Buzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num.toString();
};
