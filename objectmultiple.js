function Loop(number) {
    this.number = number;
    this.square = [];
    for (i = 0; i < number.length; i++) {
        this.square.push(number[i] * number[i])
    }
}
const numobj = new Loop([1, 2, 3, 4, 5]);
console.log(numobj.square)
