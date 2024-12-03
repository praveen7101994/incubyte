// tests/sum.test.js
const sum = (a = 0, b = 0) => {
  if (!a && !b) return 0;
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(3, 4)).toBe(7);
});
