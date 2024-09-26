function sumOfDigits(num) {
    sum = 0;
    while (num > 0) {
        let digits = num % 10
        sum += digits;
        num = Math.floor(num / 10);

    }
    return sum;
}
function sumOfDifferent(num1, num2) {
    let sum1 = sumOfDigits(num1);
    let sum2 = sumOfDigits(num2);
    return Math.abs(sum1 - sum2)

}
let num1 = 1234;
let num2 = 98760;
console.log(sumOfDifferent(num1,num2));
