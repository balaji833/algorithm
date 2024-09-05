function filterMultiplesOfThreeAndEven(numbers) {
    let result = [];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 3 === 0) {
            let number = numbers[i];
            if (number % 2 === 0) {
                result.push(number);
            }
        }
        i++;
    }
    return result;
}

let filteredNumbers = filterMultiplesOfThreeAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 30, 11, 12, 13, 14, 15]);
console.log(filteredNumbers);
