// Reverse Only Even Numbers

// Reverse positions of only even numbers, keep odds same

function reverseEven(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if(arr[left] % 2 === 0 && arr[right] % 2 === 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            
            left++
            right--

        } else if (arr[left] % 2 !== 0) {
            left++;

        } else if (arr[right] % 2 !== 0) {
            right--;

        }
    }

    return arr
}

console.log(reverseEven([1,2,3,4,5,6]))
console.log(reverseEven([1,2,3,4,5,6,7,8]))

// Time Complexity - O(n)
// Space Complexity - O(1)