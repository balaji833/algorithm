// var a = [1, 2, 3, 4, 5, 6, 7, 8, 12]
// //  var result = a.length;
// for (b = 12; b>= 0; b--) {
//     if (b % 2 == 0) {
//         //     result=a[i]*result;
//         // var result = a.toReversed();
//         console.log(b);
//     }
// }
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12,66,88,22,44]

// var result = a.filter
// (function(number){

//     return number % 2 == 0
// });
// console.log(result);
// var a = ["ragav", "chandru", "vasanth", "balaji", "jeeva"]
// var vowels = ["a", "e", "i", "o", "u"]
// for (i = 0; i < a.length; i++) {
//    var b = a[i];
//    var numberOfConsonants = 0;
//    for (j = 0; j < b.length; j++) {
//       if (vowels.includes(b[j])) {

//       }
//       else{
//          console.log(b[j]+" is a consonants")
//          numberOfConsonants++;
//       }

//    }
//    console.log(numberOfConsonants);
// }
// var nameOfString = ["balaji", "santhosh", "deepak", "ant-", "vasanth"];

// nameOfString.forEach(function(name, index) {
//     console.log( index  +  name);
// });
// var nameOfString = ["balaji", "santhosh", "deepak", "ant-", "vasanth"]; 

// nameOfString.forEach(function(name) {
//     console.log(name.charAt(4));
// });
// function myfunction(a) {
//    for (i=0;i<a.length;i++){
//       console.log(a);
//    }
// }
// myfunction("balaji")
// function sayHello(){
//    return "Hello " + this.name;
//  }

//  var obj = {name: "Sandy"};

//  sayHello(obj);
// var nameOfString = ["balaji", "santhosh", "deepak", "", "vasanth"];
// var index = [0, 1, 2, 3, 4];

// for (var i = 0; i < nameOfString.length; i++) {
//     if (index[i] >= 0 && index[i] < nameOfString[i].length) {
//         var letter = nameOfString[i][index[i]];
//         console.log(`Character at index ${index[i]} of "${nameOfString[i]}" is "${letter}"`);
//     } else {
//         console.log(`Index ${index[i]} is out of bounds for "${nameOfString[i]}"`);
//     }
// }
// Creating a 2x3 two-dimensional array
// let array = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// // console.log(array);
// let array = [
//     [1, 2, 3],
//     [4, 5, 6],
    
// ]
// // Initialize an array to hold the sums
// let result = [];

// // Loop through the first row of the array (assuming all rows have the same length)
// for (let i = 0; i < array[0].length; i++) {
//     let sum = 0;

//     // Loop through each row and add the corresponding element to the sum
//     for (let j = 0; j < array.length; j++) {
//         sum += array[j][i];
//     }

//     // Push the sum to the result array
//     result.push(sum);
// }

// console.log(result); // Output: [5, 7, 9]

var twoDArray = [[2, 3, 4], [2, 3, 4, 4], [12, 13, 14, 15, 90]];
var result = [];
var maxArraySize = 0;

// Find the maximum length of the arrays inside twoDArray
for (var i = 0; i < twoDArray.length; i++) {
  if (twoDArray[i].length > maxArraySize) {
    maxArraySize = twoDArray[i].length;
  }
}

// Iterate column-wise
for (var i = 0; i < maxArraySize; i++) {
  var sum = 0;

  for (var j = 0; j < twoDArray.length; j++) {
    if (i < twoDArray[j].length) {
      // Add the first two numbers
      if (j < 2) {
        sum += twoDArray[j][i];
      }
      // Subtract the next two numbers
      else {
        sum -= twoDArray[j][i];
      }
    }
  }

  result.push(sum);
}

console.log(result);



