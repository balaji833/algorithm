function multiplesOfThreeAndEven(numbers) {
    let result = [];
    let i = 0;
    while (i < numbers.length) {
        let number = numbers[i]; 

        if (number % 3 === 0 && number % 2 === 0) { 
            result.push(number); 
        }
        i++;
    }

    if (result.length === 0) {
        result.push("No numbers divisible by both 3 and 2.");
    }

    return result;
}

let input = multiplesOfThreeAndEven([1, 2, 3, 4, 5, 7, 8, 9, ]);
console.log(input);
