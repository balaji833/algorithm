table = "";
for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
        table += (i * j).toString().padStart(3, " ") + " "
    }
    table += "\n"

}
console.log(table);