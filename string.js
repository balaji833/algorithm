// var maxArraySize = ["ragav", "chandru", "vasanth", "balaji", "jeeva"]
// var console.log( maxArraySize.filter(f)unction (number) {
//     return number.length > 5
// });
// console.log((console.lo)g(


// for ()var i = 0; i <= maxArraySize.length; i++) {
//   if (maxArraySize[i].length > 5) {
//    
//  console.log((maxArraySize[i]);
// )  }
// // }
// var maxArraySize = ["ragav", "chandru", "vasanth", "balaji", "jeeva"];

//     for (let i = 0; i < maxArraySize.length; i++) {
//       let char = maxArraySize[i];
//       if(vowels.includes(char)){

//       }

//       console.log((char);
// )    }
// var integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];
// var number = 3;

// for (var i = integer.length -number; i < integer.length; i++) {
//     if (integer[i] === 3) {
//         console.log((i);
//    ) }
// }



// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }
// console.log((isPalindro)me("12345054321"));
// for (let i = 0; i <= 10; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(("FizzBuzz"));
//     } else if (i % 3 === 0) {
//         console.log(("Fizz");
// /)/     } else if (i % 5 === 0) {
// //         console.log(("Buzz");
// /)/     } else {
//         console.log((i);
//    ) }
// }
// var twoDArray = ["balaji", "santhosh", "deepak", "ant", "vasanth","madhavi",];
// var result="";

// for (i = 0; i < twoDArray.length; i++) {

//   if (i < twoDArray[i].length) {
//     result+=twoDArray[i][i];
//   }
//   else {
//       result+="-";
//     }
//   }
//   console.log(result);

// var twoDArray = [[2, 3, 4,], [2, 3, 4, 4], [12, 13, 14, 15, 90]]
// var result = [];
// var maxArraySize = 0;
// for (i = 0; i < twoDArray.length; i++) {
//   if (twoDArray[i].length > maxArraySize) {
//     maxArraySize = twoDArray[i].length;
//   }
// }
// for (i = 0; i < maxArraySize; i++) {
//   var sum =  0;
//   for (j = 0; j < twoDArray.length; j++) {
//     if (i < twoDArray[j].length) {
//       sum -= twoDArray[j][i];
//     }
//   }
//   result.push(sum);
// }
// console.log(result);
// var twoDArray = [[2, 3, 4,], [2, 3, 4], [12, 13, 14, 9], [1, 2, 3], [1, 2, 3]]
// var result = [];
// var maxArraySize = 0;
// for (i = 0; i < twoDArray.length; i++) {
//   if (twoDArray[i].length > maxArraySize) {
//     maxArraySize = twoDArray[i].length;
//   }
// }
// for (i = 0; i < maxArraySize; i++) {
//   var sum =  0;
//   for (j = 0; j < twoDArray.length; j++) {
//     if (i < twoDArray[j].length) {
//       if (j % 2 === 0) {
//         sum += twoDArray[j][i];
//       }
//       else {
//         sum -= twoDArray[j][i];
//       }
//     }
//   }
//   result.push(sum);
// }
// console.log(result);
// let y = [1, 2, 3, 4, 5, 6, 7]
// for (i = 0; i < y.length; i++) {
//   console.log(y[i])

// }
// console.log(y[y.length - 1]); 
// Function to generate multiplication tables
function MultiplicationTable() {
  let table = '';


  for (let i = 1; i <= 10; i++) {
      
      for (let j = 1; j <= 10; j++) {
          
          table += (i * j).toString().padStart(4, ' ') + ' ';
      }

      table += '\n';
  }

  console.log(table);
}
MultiplicationTable();
