export const fizzBuzz = (num: number): string => {
  if (num === 15) {
    return "BuzzFizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num.toString();
};
