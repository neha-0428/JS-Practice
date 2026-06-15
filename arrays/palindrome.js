// Check if Array is Palindrome

// 👉 Same forward and backward

function palindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false
        }

        left++
        right--
    }

    return true;
}

console.log(palindrome([1,2,3,2,1]))
console.log(palindrome([1,4,3,2,1]))

// Time Complexity - O(n)
// Space Complexity - O(1)