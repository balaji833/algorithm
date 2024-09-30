function mergesort(arr) {
    if (arr.length) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergesort(leftArr), mergesort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr,...rightArr];
}
let arr =[9,4,5,2,12,5,7,89];
console.log(mergesort(arr));
