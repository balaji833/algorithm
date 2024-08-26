
function median(arrayOfCenter){
var centerElement = Math.floor(arrayOfCenter.length / 2);
var result = [];
if (arrayOfCenter.length % 2 === 0) {
    result = (arrayOfCenter[centerElement - 1] + arrayOfCenter[centerElement]) / 2;
}
else {
    result = arrayOfCenter[centerElement];
}
return result ;
}

var a =median([1,2,3,4]);
console.log(a);
