
// Find the largest number in an array
function findLargest(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

//time complexity = O(n)
//space complexity = O(1)
console.log(findLargest([3, 7, 2, 9, 1]))

// Find the smallest number in an array
function findSmallest(arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

//time complexity = O(n)
//space complexity = O(1)
console.log(findSmallest([3, 7, 2, 9, 1]))

// Find the second largest number in an array
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = null;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] < largest && (secondLargest === null || arr[i] > secondLargest)) {
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

//time complexity = O(n)
//space complexity = O(1)
// console.log(findSecondLargest([10, 5, 20, 8, 15]))
// console.log(findSecondLargest([10, 10, 9]))
// console.log(findSecondLargest([9, 9, 9]))
console.log(findSecondLargest([-5, -2, -10]))

// Find the difference between the largest and smallest number
function difference(arr) {
    let max = arr[0];
    let min = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return max - min;
}

//time complexity = O(n)
//space complexity = O(1)
console.log(difference([3, 7, 2, 9, 1]))

// Count how many times the largest number appears
function countLargestNum(arr) {
    let count = 0;
    let max = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            count = 1;
        } else if(arr[i] === max) {
            count++;
        }
    }

    return count;
}

// //time complexity = O(n)
// //space complexity = O(1)
console.log(countLargestNum([1, 3, 7, 7, 2, 7]))

// Find the largest even number in an array
function largestEven(arr) {
    let max = -1;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(largestEven([1, 3, 7, 10, 2, 8]))