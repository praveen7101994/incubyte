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

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//a\n1a2a3")).toBe(6);
});

test("throws an exception for negative numbers", () => {
  expect(() => add("1,-1")).toThrow("negative numbers not allowed: -1");
  expect(() => add("1,-1,2,-3")).toThrow("negative numbers not allowed: -1,-3");
});

function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1];
  }

  const parts = numbers.split(delimiter);
  const nums = parts.map((num) => parseInt(num));
  const negativeNums = nums.filter((num) => num < 0);

  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNums.join(",")}`);
  }
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}
