const vowels = ["a", "e", "i", "o", "u"];
function countVowelsInStrings(names) {
    let results = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let numberOfVowels = 0;

        for (let j = 0; j < name.length; j++) {
            if (vowels.includes(name[j])) {
                numberOfVowels++;
            }
        }
        results.push(numberOfVowels);
    }
    return results;
}
let countOfVowels = countVowelsInStrings(["balaji", "santhosh", "deepak", "ant"]);
console.log(countOfVowels);