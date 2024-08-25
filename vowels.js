var a = ["ragav", "chandru", "vasanth", "balaji", "jeeva"]
var vowels = ["a", "e", "i", "o", "u"]
for (i = 0; i < a.length; i++) {
   var b = a[i];
   var numberOfvowels = 0;
   for (j = 0; j < b.length; j++) {
      if (vowels.includes(b[j])) {
         numberOfvowels++;
      }
   }
   console.log(numberOfvowels);
}