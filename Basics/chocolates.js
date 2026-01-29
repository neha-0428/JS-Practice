

function chocolates(arr, n) {
        // code here

        let left = 0;
        let right = arr.length - 1;

        while(left !== right) {
            if(arr[left] > arr[right]) {
                left++;
            } else {
                right--;
            }
        }

        return arr[left];
    }


console.log(chocolates([5, 3, 1, 6, 9], 5))
console.log(chocolates([5, 9, 2, 6], 4))