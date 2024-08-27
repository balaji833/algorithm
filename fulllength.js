function Add(string) {
    this.string = string;
    this.result = [];
    this.sum = 0;
    for (i = 0; i < string.length; i++) {
        const length = (string[i].length)
        this.result.push(length);
        this.sum += length;

    }
}
const name = new Add(["balaji", "vasanth", "jeeva", "pushparaj"])
console.log(name.sum);