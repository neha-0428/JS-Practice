// Check if Array is Sorted

// Return true if array is sorted (ascending), else false

function sorted(arr) {
    if(arr.length < 1) return true

    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            return false
        }
    }

    return true
}

console.log(sorted([1]))
console.log(sorted([1,2,2,3]))
console.log(sorted([1,2,5,3]))

// Time Complexity - O(n)
// Space Complexity - O(1)