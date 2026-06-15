// Count frequency of each number
function countFreq(arr) {
    let freqCounter = {};
    for(let i=0; i<arr.length; i++) {
        let key = arr[i];
        if(freqCounter[key]) {
            freqCounter[key]++;
        } else {
            freqCounter[key] = 1;
        }
    }

    return freqCounter;
}

//time complexity - O(n)
//space complexity - O(n) - object can grow with input size
console.log(countFreq([1, 2, 2, 3, 3, 3]))

// Find the first number that appears more than once
function firstMoreThanOnce(arr) {
    let freqCounter = {}
    for(let i=0; i<arr.length; i++) {
        let key = arr[i];
        if(freqCounter[key]) {
            return key;
        } else {
            freqCounter[key] = 1;
        }
    }

    return null;
}

//time complexity - O(n)
//space complexity - O(n)
console.log(firstMoreThanOnce([2, 1, 2, 1]))

// Count how many numbers appear exactly once
function countExactlyOne(arr) {
    let freqCounter = {}
    for(let i=0; i<arr.length; i++) {
        let key = arr[i]
        if(freqCounter[key]) {
            freqCounter[key]++;
        } else {
            freqCounter[key] = 1;
        }
    }

    let count = 0;
    for(let value of Object.values(freqCounter)) {
        if(value === 1) {
            count++;
        }
    }

    return count;
}

//time complexity - O(n)
//space complexity - O(n)
console.log(countExactlyOne([1, 2, 2, 3, 4, 4, 5]))

// Find the number with the highest frequency
function highestFrequency(arr) {
    let freq = {};
    let highestFreq = null;
    for(let i=0; i < arr.length; i++) {
        let key = arr[i];

        if(freq[key]) {
            freq[key]++;
            if(freq[key] > (freq[highestFreq] || 0)) {
                highestFreq = key;
            }
        } else {
            freq[key] = 1;
        }
    }

    return highestFreq;
   
}

//time complexity - O(n)
//space complexity - O(n)
console.log(highestFrequency([1, 2, 2, 3, 3, 3, 4, 3, 5, 5, 5, 5, 5]))
// console.log(highestFrequency([1, 2, 4, 3, 5]))
// console.log(highestFrequency([1, -11]))

// Return all numbers that appear more than once
function moreThanOnce(arr) {
    let freq = {};
    let moreThanOnceArr = [];
    for(let i=0; i<arr.length; i++) {
        let key = arr[i]
        freq[key] = (freq[key] || 0) + 1;

        if(freq[key] == 2) {
            moreThanOnceArr.push(key)
        }
    }

    return moreThanOnceArr;
}

//time complexity - O(n)
//space complexity - O(n)
// console.log(moreThanOnce([1, 2, 2, 3, 3, 4, 5, 5]))
console.log(moreThanOnce([1, 2, 2, 2]))