import { fizzBuzz } from "../src/fizzBuzz";

// describe.each([
//   { a: 1, b: 1, expected: 2 },
//   { a: 1, b: 2, expected: 3 },
//   { a: 2, b: 1, expected: 3 }
// ])('.add($a, $b)', ({a, b, expected}) => {
//   test(`returns ${expected}`, () => {
//     expect(a + b).toBe(expected);
//   });

describe("fizzBuzz", () => {
  it.each`
    input | output
    ${1}  | ${"1"}
    ${2}  | ${"2"}
    ${3}  | ${"Fizz"}
  `(
    "converts a number $input to be the string $output",
    ({ input, output }) => {
      expect(fizzBuzz(input)).toEqual(output);
    }
  );
});
