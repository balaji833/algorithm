// odd row addtion
// even row subraction progarm

var twoDArray = [[2, 3, 4,], [2, 3, 4], [12, 13, 14, 9], [1, 2, 3], [1, 2, 3]]
var result = [];
var maxArraySize = 0;
for (i = 0; i < twoDArray.length; i++) {
  if (twoDArray[i].length > maxArraySize) {
    maxArraySize = twoDArray[i].length;
  }
}
for (i = 0; i < maxArraySize; i++) {
  var sum =  0;
  for (j = 0; j < twoDArray.length; j++) {
    if (i < twoDArray[j].length) {
      if (j % 2 === 0) {
        sum += twoDArray[j][i];
      }
      else {
        sum -= twoDArray[j][i];
      }
    }
  }
  result.push(sum);
}
console.log(result);


// row addition program in two dimensional array


var twoDArray = [[2, 3, 4,], [2, 3, 4, 4], [12, 13, 14, 15, 90]]
var result = [];
var maxArraySize = 0;
for (i = 0; i < twoDArray.length; i++) {
  if (twoDArray[i].length > maxArraySize) {
    maxArraySize = twoDArray[i].length;
  }
}
for (i = 0; i < maxArraySize; i++) {
  var sum =  0;
  for (j = 0; j < twoDArray.length; j++) {
    if (i < twoDArray[j].length) {
      sum += twoDArray[j][i];
    }
  }
  result.push(sum);
}
console.log(result);