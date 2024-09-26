function rightRatation(array, right) {
    let n = array.length;
    right = right % n;
    let result = [];
    for (let i = 0; i < right; i++) {
        result[i] = array[n - right + i];
    }
    for (let i = n - 1; i >= right; i--) {
        array[i] = array[i - right];
    }
    for (let i = 0; i < right; i++) {
        array[i] = result[i];
    }
    return array;
}

let array= [1,2,3,4,5];
let left = 1;
console.log(rightRatation(array,left));









