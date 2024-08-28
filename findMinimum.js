function findMinimum() {
    let min = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
        return min;
    }
}
let numbers = findMinimum(1, 2, 3, 4, 5, 7,)
console.log(numbers);