function Length(string) {
    this.string = string;
    this.result = [];
   
    for (i = 0; i < string.length; i++){
        this.result.push([string[i].length])
    }
   
}
const obj = new Length(["balaji","ant"]);
console.log(obj.result);




