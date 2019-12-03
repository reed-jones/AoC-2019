import json from './input'

const update = (val, s, args) => {
    args[s] = val
    return args
}

const getValue = (args, i) => args[i]

const process = (args, pointer = 0, fullStop = false) => {
    const opcode = getValue(args, pointer)
    const param_1 = getValue(args, pointer + 1)
    const param_2 = getValue(args, pointer + 2)
    const param_3 = getValue(args, pointer + 3)
    const y = getValue(args, param_1)
    const x = getValue(args, param_2)
    if (opcode === 1) {
        args = update(y + x, param_3, args)
    } else if (opcode === 2) {
        args = update(y * x, param_3, args)
    } else if (opcode === 99) {
        fullStop = true
    }

    if (!fullStop) {
        [args, fullStop] = process(args, pointer + 4, fullStop)
    }

    return [args, fullStop]
}

export const intCode = (...args) => {
    let fullStop = false;
    while (!fullStop) {
        [args, fullStop] = process(args);
    }

    return args;
}

// 3101844
const restoreGravityAssist = ({ input }, init) => {
    Object.entries(init).forEach(([idx, val]) => {
        input[idx] = val
    })
    return input
}
const input = restoreGravityAssist(json, { 1: 12, 2: 2 })

console.log(intCode(...input)[0])
