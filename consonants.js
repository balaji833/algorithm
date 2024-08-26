function consonants(array) {
    var vowels = ["a", "e", "i", "o", "u"];
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var b = array[i];
        var numberOfConsonants = 0;
        for (var j = 0; j < b.length; j++) {
            if (!vowels.includes(b[j].toLowerCase())) {
                numberOfConsonants++;
            }
        }
        result.push(numberOfConsonants);
    }
    return result;
}

var name = consonants(["balaji","santhosh"]);
console.log(name); 

