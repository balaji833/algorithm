function countOfConsonantsInString(names) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let numberOfConsonants = 0;
        for (let j = 0; j < name.length; j++) {
            if (!vowels.includes(name[j].toLowerCase())) {
                numberOfConsonants++;
            }
        }
        result.push(numberOfConsonants);
    }
    return result;
}

let countofconsonants= countOfConsonantsInString(["balaji","santhosh"]);
console.log(countofconsonants); 

