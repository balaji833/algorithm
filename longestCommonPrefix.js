function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        let newprefix = "";
        for (let k = 0; k < j; k++) {
            newprefix += prefix[k];
        }
        prefix = newprefix;
        if (prefix === "") return "";
    }
    return prefix;
}
let  strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));