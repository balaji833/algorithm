function Name(firstname, lastname, age, color) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.color = color;
    this.details = this.firstname + " " + this.lastname + " " + this.age + " " + this.color;
}
const mydetails = new Name("balaji", "bala", 22, "black");
console.log(mydetails.details);