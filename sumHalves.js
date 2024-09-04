function sumHalves(array) {
    let result = [];
    let i = 0;
    while (i < array.length / 2) {
        let sum = array[i] + array[array.length / 2 + i];
        result.push(sum);
        i++;
    }
    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumHalves(array));
