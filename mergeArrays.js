function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        mergedArray[mergedArray.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArray[mergedArray.length] = arr2[i];
    }
    return mergedArray;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
console.log(mergeArrays(arr1,arr2));
