function concatenateNthCharacters(strings) {
  let result = "";

  for (let i = 0; i < strings.length; i++) {
    let currentString = strings[i];

    if (i < currentString.length) {
      result += currentString[i];
    } else {
      result += "-";
    }
  }

  return result;
}

let concatenatedNthCharacters = concatenateNthCharacters(["balaji", "santhosh", "deepak", "ant"]);
console.log(concatenatedNthCharacters);
