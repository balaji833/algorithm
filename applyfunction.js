function multi(a, b) {
    return a * b;
}
const numbers = [2, 2];
const result = multi.apply(null, numbers);
console.log(result)