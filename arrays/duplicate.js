// Find Duplicate (One Duplicate)

// Array has n+1 elements, numbers from 1 to n, one duplicate

function findDuplicate(arr) {
    let freq = {}

    for(let i=0; i<arr.length; i++) {
        if(freq[arr[i]]) {
            return arr[i]
        } else {
            freq[arr[i]] = 1
        }
    }
}

console.log(findDuplicate([1,3,4,2,1]))

// Time Complexity - O(n)
// Space Complexity - O(1)