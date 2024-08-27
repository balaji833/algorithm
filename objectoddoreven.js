
function If(number) {
    this.number = number;
    this.result = [];
    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            this.result.push([number[i] + " is a even"])
        }
        else {
            this.result.push([number[i] + " is a odd"])
        }
    }

}
const obj1 = new If([2, 2, 3]);
console.log(obj1.result);