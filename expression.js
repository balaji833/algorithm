// let day = 7;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Monday';
//     break;
//   case 2:
//     dayName = 'Tuesday';
//     break;
//   case 3:
//     dayName = 'Wednesday';
//     break;
//   case 4:
//     dayName = 'Thursday';
//     break;
//   case 5:
//     dayName = 'Friday';
//     break;
//   case 6:
//     dayName = 'Saturday';
//     break;
//   case 7:
//     dayName = 'Sunday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName);  
// let fruit = 'orange';
// let category;

// switch (fruit) {
//     case "apple":
//     case "banana":
//     case "orange":
//         category = "fruit";
//         break;
//     case "carrot":
//     case "broccoli":
//     case "brinjal":
//         category = 'vegetable';
//         break;
//     default:
//         category = 'unknown';
// }

// console.log(category);  
// var a = ["ragav", "chandru", "vasanth", "balaji", "jeeva"];
// var vowels = "aeiou";

// for (var i = 0; i < a.length; i++) {
//     var word = a[i];
//     var count = 0;

//     for (var j = 0; j < word.length; j++) {
//         if (vowels.includes(word[j])) {
//             count++;
//         }
//     }

//     console.log( count );
// }
// function findMaxNumber(arr) {

//     return Math.max(...arr);

// }
// let a = findMaxNumber([112,3,4,5,6,78,9,1000])
// console.log(a);


// function factorial(number) { 

//   if (number === 0 || number === 1) { 

//     return 1; 

//   } else { 

//     return number * factorial(number - 1); 


//   } 

// } 
// let a = factorial(2);
// console.log(a);/
// function reverseString(str) {
  
//   return  str.split('').reverse().join(''); 
// }

// // console.log(reverseString("balaji"));
// var a = ["balaji", "santhosh", "deepak", "ant"];

// // Define the indices of characters you want to access
// var indices = [0, 1, 2, 3]; // Corresponding to 1st, 2nd, 3rd, and 4th letters

// // Loop through the array
// for (var i = 0; i < a.length; i++) {
//     // Check if the index for characters is within bounds for the current string
//     if (indices[i] < a[i].length) {
//         // Print the specific character
//         console.log(a[i][indices[i]]);
//     } else {
//         // Print a message if the index is out of bounds
//         console.log(`Index ${indices[i]} out of bounds for element ${i}`);
//     }
// }
// function greet() {
//     console.log( 'hi ' + this.name);
// }

// const person = { name: 'Bob' };

// greet.call(person);
// var array = ["balaji", "santhosh", "deepak", "ant", "vasanth"];
// var result = "";

// for (i = 0; i < array.length; i++) {
  
    
//     if (i === 0) { // First element
//       console.log("First letter: " +array [i][0]); // Should be 'b'
//     }
    
//     if (i === 1) { // Second element
//       console.log("Second letter: " + array[i][1]); // Should be 'a'
//     }
//    else {
//     console.log("-");
//   }
// }
// var array = ["balaji", "santhosh", "deepak", "ant", "vasanth"];


// var result ="";

// for (i = 0; i < array.length; i++) {

//   if ( i===0) {
//     console.log(array[i][0]);
   
//   }
//   if ( i===1) {
//     console.log(array[i][1]);
   
//   }
//   if ( i===2) {
//     console.log(array[i][2]);
   
//   }
//   if ( i===3) {
//     console.log(array[i][3]);
   
//   }
//   if ( i===4) {
//     console.log(array[i][4]);
   
//   }
//   else {
//      console.log("-");
//   }

// }
var array = ["balaji", "santhosh", "deepak", "ant", "vasanth"];
var result="";

for (i = 0; i < array.length; i++) {

  if (i < array[i].length) {
    result+=array[i][array[i].length-1-i];
  }
  else {
      result+="-";
    }
  }
  console.log(result);



