function findMedian(arrayOfCenter){
let centerElement = Math.floor(arrayOfCenter.length / 2);
let result = [];
if (arrayOfCenter.length % 2 === 0) {
    result = (arrayOfCenter[centerElement - 1] + arrayOfCenter[centerElement]) / 2;
}
else {
    result = arrayOfCenter[centerElement];
}
return result ;
}

let numbers =findMedian([1,2,3,4]);
console.log(numbers);