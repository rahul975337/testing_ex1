import { makeLowerCase, multiply } from "./Helperfunctions";

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(-10, 10)).toBe(-100);
});

test("lowerCase", () => {
  expect(makeLowerCase("RAHUL")).toBe("rahul");
});
