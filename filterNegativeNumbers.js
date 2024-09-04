function filterNegativeNumbers(numbers) {
    let result = [];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] >= 0) {
            let sum = numbers[i]
            result.push(sum)
        }
        i++;
    }
    return result;
}
let inputnumbers = filterNegativeNumbers([1, 0, -2, -3, -4, -6])
console.log(inputnumbers)