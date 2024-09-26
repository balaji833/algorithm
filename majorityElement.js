function majorityElement(array) {
    let count = 0;
    let result = null;
    for (let i = 0; i < array.length; i++) {
        if (count === 0) {
            result = array[i];
        }
        if (array[i] === result) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === result) {
            count++;
        }
    }

     if(count > Math.floor(array.length / 2)) {
        return result
     }
     else{
        return -1;
     }
}

let array = [6,5,5];
console.log(majorityElement(array));
