const isAscending = (num1, num2) => +num1 <= +num2
const hasDoubles = num => num.toString().split('').some((v, i, t) => {
    if (i < t.length - 1) {
        if (t[i + 1] === v) {
            if (t[i + 2] === v || t[i - 1] === v) {
                return false
            }
            return true
        }
    } else {
        return false
    }
});

const sortDigits = num => num.toString().split('').sort((a, b) => a >= b ? 1 : -1).join('')

export const checkPass = num => {
    return isAscending(num, sortDigits(num)) && hasDoubles(num)
}

let count = 0;
for (let i = 136818; i < 685979; i++) {
    if (checkPass(i)) {
        count++
    }
}
console.log(count)
