import { fizzBuzz } from "../src/fizzBuzz";

describe("fizzBuzz", () => {
  it.each`
    input | output
    ${3}  | ${"Fizz"}
    ${6}  | ${"Fizz"}
    ${9}  | ${"Fizz"}
    ${12} | ${"Fizz"}
  `(
    "return the multiple of 3-> $input to be the string $output",
    ({ input, output }) => {
      expect(fizzBuzz(input)).toEqual(output);
    }
  );
  it.each`
    input | output
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${4}  | ${"4"}
    ${5}  | ${"Buzz"}
    ${10} | ${"Buzz"}
    ${15} | ${"BuzzFizz"}
    ${30} | ${"BuzzFizz"}
  `(
    "converts a number $input to be the string $output",
    ({ input, output }) => {
      expect(fizzBuzz(input)).toEqual(output);
    }
  );
});
