import fs from 'fs'

// export const fuelFromMass = mass => (mass / 3 >> 0) - 2
export const fuelFromMass = (mass, acc = 0) => {
    const m = (mass / 3 >> 0) - 2

    if (m > 0) {
        // while there is still mass
        // calculate needed fuel
        return acc + fuelFromMass(m, m)
    }

    return acc
}

fs.readFile('./input.txt', (err, data) => {
    if (err) throw err;

    const ans = data.toString() // convert buffer to string
        .split("\n") // split on newlines
        .filter(a => a) // remove empty lines
        .map(m => fuelFromMass(m)) // convert mass to fuel
        .reduce((a, c) => a + c, 0); // calculate sum

    console.log(ans)
  });
