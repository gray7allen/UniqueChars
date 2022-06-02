function hasUniqueChars(word) {
    let obj = {};
    for (let i = 0; i <word.length; i++) {
        let uChar = word[i];
        if (obj[uChar]) return false;
        obj[uChar] = true;
    }
    return true;
}

console.log(hasUniqueChars('Rerun'))
console.log(hasUniqueChars('boolean'))