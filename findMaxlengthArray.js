function findMaxLengthArray(numberofarray) {
    let result = [];
    let max = numberofarray[0];
    let i = 0;

    while (i < numberofarray.length) {
        if (numberofarray[i].length> max.length) {
            max = numberofarray[i];
            result.push(max);
        }
        i++;
    }

    return result;
}
let input = findMaxLengthArray([[1, 2, 3], [ 5, 6, 7, 8, 9], [11, 22, 33]]);
console.log(input);
