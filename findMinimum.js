function findMinimum() {
    var min = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
        return min;
    }
}
var input = findMinimum(1, 2, 3, 4, 5, 7,)
console.log(input);