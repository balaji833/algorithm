
// for (i = 0; i < 3; i++)
//     console.log(array[i])

// var b = [2, 4, 5, 6, 7, 8, 9]
// for (i = 0; i < array.length; i++) {
//     console.log(b[i])
// }
// for (i = 0; i <= 50+50; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }



// for (i = 0; i <= 50; i++) {
//     console.log(i * 2)
// }


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
// let centerIndex = array[Math.floor(array.length / 2)]
// console.log(centerIndex);
var array = [1, 2, 3, 4, 5, 6]
var centerElement = Math.floor(array.length / 2);
var result = [];
if (array.length % 2 === 0) {
    result = (array[centerElement - 1] + array[centerElement]) / 2;
}
else {
    result = array[centerElement];
}
console.log(result);
