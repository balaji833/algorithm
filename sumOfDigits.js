function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digits = num % 10;
        sum += digits;
        num = Math.floor(num / 10);
    }
    return sum;
}
function digitSumDifferent(num1, num2) {
    let sum1 = sumOfDigits(num1);
    let sum2 = sumOfDigits(num2);
    return Math.abs(sum1 - sum2);
}
let num1=123
let num2=456
console.log(digitSumDifferent(num1,num2));
