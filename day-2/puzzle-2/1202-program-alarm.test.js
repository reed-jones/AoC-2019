const esmImport = require("esm")(module /*, options*/);
const { intCode } = esmImport("./index");

test("1,9,10,3,2,3,11,0,99,30,40,50 results in 3500", () => {
  expect(intCode(1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50).find(a => true)).toBe(3500);
});

test("1,0,0,0,99 becomes 2", () => {
  expect(intCode(1, 0, 0, 0, 99).find(a => true)).toBe(2);
});

test("2,3,0,3,99 becomes 2", () => {
  expect(intCode(2, 3, 0, 3, 99).find(a => true)).toBe(2);
});

test("2,4,4,5,99,0 becomes 2", () => {
  expect(intCode(2, 4, 4, 5, 99, 0).find(a => true)).toBe(2);
});

test("1,1,1,4,99,5,6,0,99 becomes 30", () => {
  expect(intCode(1, 1, 1, 4, 99, 5, 6, 0, 99).find(a => true)).toBe(30);
});

/**
 * Full Array Tests
 */
test("1,0,0,0,99 becomes 2", () => {
  expect(intCode(1, 0, 0, 0, 99)).toStrictEqual([2, 0, 0, 0, 99]);
});

test("2,3,0,3,99 becomes 2", () => {
  expect(intCode(2, 3, 0, 3, 99)).toStrictEqual([2, 3, 0, 6, 99]);
});

test("2,4,4,5,99,0 becomes 2", () => {
  expect(intCode(2, 4, 4, 5, 99, 0)).toStrictEqual([2, 4, 4, 5, 99, 9801]);
});

test("1,1,1,4,99,5,6,0,99 becomes 30", () => {
  expect(intCode(1, 1, 1, 4, 99, 5, 6, 0, 99)).toStrictEqual([
    30,
    1,
    1,
    4,
    2,
    5,
    6,
    0,
    99
  ]);
});
