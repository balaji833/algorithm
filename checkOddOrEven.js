function checkOddOrEven(number) {
    let result=[];
    for (let i = 0; i < number.length; i++){
        if (number[i] % 2 === 0) {
            result.push (number[i] + " is a Even")
        }
        else {
            result.push (number[i] + " is a odd")
        }
        return result;
    }
}
var input = checkOddOrEven([2])
console.log(input);