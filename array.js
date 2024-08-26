
function array(strings) {
  var result = "";

  for (var i = 0; i < strings.length; i++) {
    var currentString = strings[i];

    if (i < currentString.length) {
     
      result += currentString[i];
    } else {

      result += "-";
    }
  }

  return result;
}

var a = array(["balaji", "santhosh", "deepak","ant"]);
console.log(a); 
