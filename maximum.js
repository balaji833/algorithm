function maximum() {
    var max = Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max){
            max = arguments[i]
        }
        return max;
    }
}
var a = (1,2,3,4,6,6,7,8,8,9,9)
console.log(a)