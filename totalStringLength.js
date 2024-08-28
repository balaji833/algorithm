function totalStringLength(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }
    return sum;
}

let input = totalStringLength(["balaji", "vasanth", "pushparaj", "anbu", "arvind", "jeeva", "vijayraj", "gokul", "ragunath"]);
console.log(input);
