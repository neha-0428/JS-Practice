
// Sum of all numbers
function sum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// time complexity - O(n)
// space complexity - O(1)
console.log(sum([1, 2, 3, 4, 5]))

// Sum of only even numbers
function sumOfEven(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// time complexity - O(n)
// space complexity - O(1)
console.log(sumOfEven([1, 2, 3, 4, 5, 6]))

// Count how many numbers are greater than 10
function countNum(arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > 10) {
            count++;
        }
    }

    return count;
}

// time complexity - O(n)
// space complexity - O(1)
console.log(countNum([5, 12, 8, 20, 1, 15]))

// Sum of numbers at even indexes
function sumOfNum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        if(i % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}

// time complexity - O(n)
// space complexity - O(1)
console.log(sumOfNum([10, 20, 30, 40, 50]))

// Difference between sum of even numbers and odd numbers
function sumDiff(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return evenSum - oddSum;
}

// time complexity - O(n)
// space complexity - O(1)
console.log(sumDiff([1, 2, 3, 4, 5]))