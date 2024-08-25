function multi(a) {
    return this.number * a;
}
const obj = {
    number: 3
};

var b = multi.apply(obj, [2]);
console.log(b);