function maxSum (arr, k) {
    let sum = 0;

    for(let i=0; i<k; i++) {
        sum += arr[i]
    }

    let maxSum = sum;
    let left = 0;
    let right = k-1;
    while(right < arr.length - 1) {
        sum = sum - arr[left];
        left++;
        right++;
        sum = sum + arr[right];

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(maxSum([1, 2, 3, 4, 5, 1, 7, 0], 4))