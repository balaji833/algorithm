function multi(a, b) {
    return a * b;
}
const numbers = [2,4];
const result = multi.apply(null, numbers);
console.log(result)





function division(a){
    return a/2;
}
const number=[4];
const ans=division.call(null,number);
console.log(ans);


