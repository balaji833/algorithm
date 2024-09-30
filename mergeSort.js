function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < mid; i++) {
        leftArr[i] = arr[i];
    }
    for (let i = mid; i < arr.length; i++) {
        rightArr[i - mid] = arr[i];
    }
    return merge(mergesort(leftArr), mergesort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            sortedArr.push(leftArr[i]);
            i++;
        } else {
            sortedArr.push(rightArr[j]);
            j++;
        }
        while (i < leftArr.length) {
            sortedArr.push(leftArr[i]);
            i++;
        }
        while (j < rightArr.length) {
            sortedArr.push(rightArr[j]);
            j++;
        }
    }
    return sortedArr;
}
let arr = [2,3,1,4,6,7,5];
console.log(mergesort(arr));