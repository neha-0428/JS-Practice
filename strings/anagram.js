
function anagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let freq = {}
    for(let i=0; i<str1.length; i++) {
        freq[str1[i]] = (freq[str1[i]] || 0) + 1
    }

    for(let char of str2) {
        if(freq[char] === undefined || freq[char] === 0) {
            return false;
        }

        freq[char]--;
    }

    return true;
}

console.log(anagram('listen', 'silent'))
console.log(anagram('hello', 'bello'))
console.log(anagram('hello', 'world'))
console.log(anagram('save', 'vase'))
console.log(anagram('secure', 'rescue'))