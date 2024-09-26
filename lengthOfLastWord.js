function lengthOfLastWord(str) {
    let length = 0;
    let i = str.length - 1;
    while (i >= 0 && str[i] === ' ') {
        i--;
    }
    while (i >= 0 && str[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}
let str = "balaji hello"
console.log(lengthOfLastWord(str));
