import { fizzBuzz } from "../src/fizzBuzz";

describe("fizzBuzz", () => {
  it.each`
    input | output
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${3}  | ${"Fizz"}
    ${4}  | ${"4"}
    ${5}  | ${"Buzz"}
    ${6}  | ${"Fizz"}
    ${9}  | ${"Fizz"}
  `(
    "converts a number $input to be the string $output",
    ({ input, output }) => {
      expect(fizzBuzz(input)).toEqual(output);
    }
  );
});
