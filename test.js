var sum = require("./");

test("test 1+2 ->3", () => {
  expect(() => {
    sum(1, 2);
  }).toBe(3);
});

test("test int and char ->throw error", () => {
  expect(() => {
    sum(1, "a");
  }).toThrow("invalid input");
});
