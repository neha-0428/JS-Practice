function firstOccurence(str) {
    let freq = {}
    for(let i=0; i<str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }

    for(let i=0; i<str.length; i++) {
        if(freq[str[i]] === 1) {
            return str[i]
        }
    }

    return -1;
}

console.log(firstOccurence('aaibbcde'))