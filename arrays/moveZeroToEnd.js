// Move All Zeros to End

// Move all 0s to end while maintaining order of others

function moveZeroToEndWhileMaintainingOrder(arr) {

    // let left = 0;
    // for (let i=1; i<arr.length; i++) {
    //     if(arr[left] !== 0) {
    //         left++
    //     } else if(arr[i] !== 0) {
    //         arr[left] = arr[i]
    //         arr[i] = 0;
    //         left++;
    //     }
    // }

    // return arr

    let insertPos = 0

    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== 0) {
            arr[insertPos] = arr[i]
            insertPos++;
        }
    }

    while(insertPos < arr.length) {
        arr[insertPos++] = 0
    }

    return arr

}

console.log(moveZeroToEndWhileMaintainingOrder([0,1,0,3,12]))
console.log(moveZeroToEndWhileMaintainingOrder([0,0,0,3,0,12]))
console.log(moveZeroToEndWhileMaintainingOrder([1,0,0,3,0,12]))


// Time Complexity - O(n)
// Space Complexity - O(1)