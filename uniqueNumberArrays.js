function mergeUniqueNumber(arr1, arr2) {
    const sortedArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] !== arr1[i]) {
                sortedArr.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] !== arr2[j]) {
                sortedArr.push(arr2[j]);
            }
            j++;
        } else {
            if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] !== arr1[i]) {
                sortedArr.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    
    while (i < arr1.length) {
        if (sortedArr[sortedArr.length - 1] !== arr1[i]) {
            sortedArr.push(arr1[i]);
        }
        i++;
    }

    
    while (j < arr2.length) {
        if (sortedArr[sortedArr.length - 1] !== arr2[j]) {
            sortedArr.push(arr2[j]);
        }
        j++;
    }

    return sortedArr;
}


let arr1 = [ 2, 2, 3, 4, 5];
let arr2 = [5, 1, 1, 1, 1, 6, 6, 7, 8, 9, 9, 0];
console.log(mergeUniqueNumber(arr1, arr2));

