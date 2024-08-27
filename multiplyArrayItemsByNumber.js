function multiplyArrayItemsByNumber(arrayOfNumbers, number) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        arrayOfNumbers[i] = arrayOfNumbers[i] * number
    }
}

let input = [1, 2, 3, 4, 5, 9];
multiplyArrayItemsByNumber(input, 2);
console.log(input)