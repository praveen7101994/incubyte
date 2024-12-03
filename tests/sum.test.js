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

test("handles newlines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("4\n5\n6")).toBe(15);
});

function add(numbers) {
  if (!numbers) return 0;
  const parts = numbers.split(/,|\n/);
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
