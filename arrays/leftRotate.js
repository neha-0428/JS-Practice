// Left Rotate Array by 1

function leftRotate(arr, k) {
    
    for(let i=0; i<k; i++) {
        let temp = arr[0]

        for(let j=1; j<arr.length; j++) {
            arr[j-1] = arr[j]
        }

        arr[arr.length-1] = temp    
    }

    return arr
    

}

console.log(leftRotate([1,2,3,4], 1))
console.log(leftRotate([1,2,3,4,5], 2))

// Time Complexity - Dont know how to calculate
// Space Complexity - O(1)


// for every outer loop, a inner loop runs n times

// 👉 Outer loop = k
// 👉 Inner loop = n

// ✅ Final:

// O(n * k)