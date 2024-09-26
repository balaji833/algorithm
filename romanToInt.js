function romanToInt(roman) {
    const romanMap = { "I": 1, "v": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentVal = romanMap[roman[i]];
        const value= romanMap[roman[i + 1]];
        if (value && currentVal < value) {
            total -= currentVal;
        }
        else {
            total += currentVal;

        }
    }
    return total;
}
let roman = "IMX";
console.log(romanToInt(roman));
