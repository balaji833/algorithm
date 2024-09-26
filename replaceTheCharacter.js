function replaceTheCharacrter(strs, tragetchar, replacechar) {
    let newstring = "";
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === tragetchar) {
            newstring += replacechar;
        } else {
            newstring += strs[i];
        }

    }
    return newstring;
}
let strs = "balaji"
let tragetchar = "a"
let replacechar = "i"
console.log(replaceTheCharacrter(strs, tragetchar, replacechar));
