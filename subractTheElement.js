function subractTheElement(numbers) {
    let result = [];
    let i = 0;
    while (i < numbers.length / 2) {
        let sum = numbers[i] - numbers[numbers.length - 1 - i];
        result.push(sum);
        i++;
    }
    return result;
}
let input = subractTheElement([1, 2, 3, 4, 5]);
console.log(input);