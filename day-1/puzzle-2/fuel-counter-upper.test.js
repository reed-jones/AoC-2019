const esmImport = require("esm")(module/*, options*/)
const { fuelFromMass } = esmImport('./index')

test('mass 12 uses 2 fuel', () => {
    expect(fuelFromMass(12)).toBe(2);
});

test('mass 14 uses 2 fuel', () => {
    expect(fuelFromMass(14)).toBe(2);
});

test('mass 1969 uses 654 + 216 + 70 + 21 + 5 = 966 fuel', () => {
    expect(fuelFromMass(1969)).toBe(966);
});

test('mass 100756 uses 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346 fuel', () => {
    expect(fuelFromMass(100756)).toBe(50346);
});
