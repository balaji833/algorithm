function findMaximum() {
    let max = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max){
            max = arguments[i]
        }
        return max;
    }
}
let numbers = findMaximum(1,2,3,4,6,6,7,8,8,9,9)
console.log(numbers);