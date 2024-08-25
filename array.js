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