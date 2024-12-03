test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

function add(numbers) {
  if (!numbers) return 0;
  return -1;
}
