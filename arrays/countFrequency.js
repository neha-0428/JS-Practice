// Count Frequency Without Extra Space (Brute Thinking)

// 👉 Count how many times each element appears

function countFrequency(arr) {

    for(let i=0; i<arr.length; i++) {
        let alreadySeen = false;

        for(let k=0; k < i; k++) {
            if(arr[k] === arr[i]) {
                alreadySeen = true
                break;
            }
        }

        if(alreadySeen) continue;

        let count = 0;
        for(let j=0; j<arr.length; j++) {

            if(arr[i] === arr[j]) {
                count++;
            }
        }

        console.log('count of ' + arr[i] + ' = ' + count)
    }
}

function countFrequencyArr(arr) {

    let freq = []

    for(let i=0; i<arr.length; i++) {
        let alreadySeen = false;

        for(let k=0; k < i; k++) {
            if(arr[k] === arr[i]) {
                alreadySeen = true
                break;
            }
        }

        if(alreadySeen) continue;

        let count = 0;
        for(let j=0; j<arr.length; j++) {

            if(arr[i] === arr[j]) {
                count++;
            }
        }

        
        freq.push([arr[i], count])
    }

    return freq;
}

console.log(countFrequencyArr([1,2,1,3,2,1]))

// Time Complexity - O(n)
// Space Complexity - O(1)