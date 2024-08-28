function alternateSumColumns(twoDArray) {
    let result = [];
    let maxArraySize = 0;
    for (let i = 0; i < twoDArray.length; i++) {
      if (twoDArray[i].length > maxArraySize) {
        maxArraySize = twoDArray[i].length;
      }
    }
    for (let i = 0; i < maxArraySize; i++) {
      let sum =  0;
      for (let j = 0; j < twoDArray.length; j++) {
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
    return result;
  }
  
  let input = alternateSumColumns([[2, 3, 4], [2, 3, 4, 4], [12, 13, 14, 15, 90]]);
  console.log(input);