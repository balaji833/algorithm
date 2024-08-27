
function If(number) {
    this.number = number;
    this.result = [];
    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            this.result .push ([number[i] + " is a Even number"]);
        }
        else {
            this.result.push([number[i] + " is a Odd number"]);
        }
    }
}
const obj = new If([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(obj.result);