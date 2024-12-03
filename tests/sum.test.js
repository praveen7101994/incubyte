test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
  expect(add("1")).toBe(1);
  expect(add("42")).toBe(42);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
  expect(add("42")).toBe(42);
});

test("returns the sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("10,20")).toBe(30);
});

function add(numbers) {
  if (!numbers) return 0;
  const parts = numbers.split(",");
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
