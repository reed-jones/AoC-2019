const esmImport = require("esm")(module /*, options*/);
const { solution } = esmImport("./index");

test("5 === 5", () => {
  expect(5).toBe(5);
});



// "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(',').map(a => ({
//     direction: a.substring(0, 1),
//     distance: +a.substring(1, 10)
// })) // draw in terminal
// U62,R66,U55,R34,D71,R55,D58,R83
// = distance 159

// R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
// U98,R91,D20,R16,D67,R40,U7,R15,U6,R7
// = distance 135
