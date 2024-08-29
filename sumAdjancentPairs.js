function sumAdjacentPairs(twonumbers) {
    let result = [];
    for (let i = 0; i < twonumbers.length; i += 2) {
        if (i + 1 < twonumbers.length) {
            let sum = twonumbers[i] + twonumbers[i + 1];
            result.push(sum);
        }
        else {
            result.push(twonumbers[i]);
        }
    }
    return result;
}
let input = sumAdjacentPairs([1, 2, 3, 4, 5, 6]);
console.log(input);