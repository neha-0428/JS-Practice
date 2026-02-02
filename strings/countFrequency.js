
function countFrequency(str) {
    return str.split('').reduce((acc, item) => {
        if(acc[item]) {
            acc[item]++;
        } else {
            acc[item] = 1;
        }
        return acc;
    }, {})
}


function frequencyCount(str) {
    let freq = {}
    for(let i=0; i<str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }
    return freq;
}
console.log(countFrequency('nehakadam'))
console.log(frequencyCount('nehakadam'))