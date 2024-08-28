// var array = [[2, 3, 4], [2, 3, 4,1], [12, 13, 14, 15,8]];
// var result = [];
// var a = Math.max(...array.map(row => row.length));

// for (i = 0; i < a; i++) {
//     var sum = 0;
//     for (j = 0; j < array.length; j++) {
//         sum += (i < array[j].length) ? array[j][i] : 0;
//     }
//     result.push(sum);
// }

// console.log(result);
// var array = [[2, 3, 4], [2, 3, 4, 4], [12, 13, 14, 15]];
// var result = [];
// var a = 0; 
// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > a) {
//         a = array[i].length;
//     }
// }
// for (var i = 0; i < a; i++) {
//     var sum = 0;
//     for (var j = 1; j < array.length; j++) {
//         if (i < array[j].length) { 
//             sum += array[j][i];
//         }
//     }
//     result.push(sum);
// }
// console.log(result);
// function add(number) {
//     if (number <= 0) {
//         return 1;
//     } else {
//         return number * add(number - 1);
//     }
// }
// var a = add(3)
// console.log(a);
// The following function takes an array of objects and a key to sort the array based on the values in ascending order. 
// function factorial(number) {
//     if (number <= 0) {
//         return 1;
//     }
//     else {
//         return number * factorial(number - 1)
//     }
// }
// var a = factorial(10)
// console.log(a);
// var array = [1, 22, 33, 4, 5, 6, 7, 8, 8, 9, 0];
// var length = array.length;
// var centerIndex = Math.floor(length / 2);

// if (length % 2 === 0) {

//     console.log(array[centerIndex - 1], array[centerIndex]);
// } else {
//     console.log(array[centerIndex]);
// }
// for (i = 2; i <= 50; i++){
//     console.log(i);
// }
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0];
let centerElement = a[Math.floor(a.length / 2)];
console.log(centerElement);



let numbers = [1, 2, 3, 2, 3, 3, 4, 4, 4, 4];


function calculateFrequency(arr) {
    let frequency = {};

    arr.forEach(function (value) {
        if (frequency[value]) {
            frequency[value]++;
        } else {
            frequency[value] = 1;
        }
    });

    return frequency;
}


let frequency = calculateFrequency(numbers);
console.log(frequency);
