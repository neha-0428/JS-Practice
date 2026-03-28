// Find Missing Number (0 to n)

// Array contains numbers from 0 to n, one missing → find it
function missingNum(arr) {

    let n = arr.length

    let sum = 0;
    let actualSum = (n * (n + 1)) / 2;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
    }

    return actualSum - sum;
}

console.log(missingNum([3, 0, 1]))
console.log(missingNum([7, 8, 3, 5, 2, 6, 1, 0]))

// Time Complexity - O(n)
// Space Complexity - O(1)