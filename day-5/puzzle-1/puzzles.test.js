const esmImport = require("esm")(module /*, options*/);
const { checkPass } = esmImport("./index");

test("111111 is valid", () => {
  expect(checkPass(111111)).toBe(true);
});

test("223450 is Not valid", () => {
  expect(checkPass(223450)).toBe(false);
});

test("123789 is Not valid", () => {
  expect(checkPass(123789)).toBe(false);
});

test('136818 not valid', () => {
    expect(checkPass(136818)).toBe(false);
})

test('685979 not valid', () => {
    expect(checkPass(685979)).toBe(false);
})
