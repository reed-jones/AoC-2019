import fs from 'fs'

export const fuelFromMass = mass => (mass / 3 >> 0) - 2

fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;

    const ans = data.toString() // convert buffer to string
        .split("\n") // split on newlines
        .filter(a => a) // remove empty lines
        .map(fuelFromMass) // convert mass to fuel
        .reduce((a, c) => a + c, 0); // calculate sum

    console.log(ans)
  });
