// Find the second largest element in array (without sorting)

function secondLargest(arr) {
    if(arr.length < 2) return null

    let largest = arr[0]
    let secondLargest = -Infinity;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }

    // return secondLargest;
    return secondLargest === -Infinity ? null : secondLargest;

}

console.log(secondLargest([3, 7, 5, 9, 2]))
console.log(secondLargest([9, 7]))
console.log(secondLargest([5,5,5]))
console.log(secondLargest([1]))


// Time Complexity - O(n)
// Space Complexity - O(1)