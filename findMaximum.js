function findMaximum() {
    let max = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max){
            max = arguments[i]
        }
        return max;
    }
}
let numbers =   (1,2,3,4,5,6,7,8,9)
console.log(numbers);