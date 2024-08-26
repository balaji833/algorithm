
function vowelsInString(array) {
   var vowels = ["a", "e", "i", "o", "u"];
   var results = [];
   for (var i = 0; i < array.length; i++) {
       var b = array[i];
       var numberOfVowels = 0;

       for (var j = 0; j < b.length; j++) {
           if (vowels.includes(b[j].toLowerCase())) {
               numberOfVowels++;
           }
       }
       
       results.push(numberOfVowels); 
   }

   return results; 
} 


var name = vowelsInString(["balaji", "santhosh","deepak"]);
console.log(name);  
