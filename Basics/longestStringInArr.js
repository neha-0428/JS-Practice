function longest(arr) {
        // code here
        let maxLengthIndex = 0;
        let maxLength = 0;
        for(let i=0; i<arr.length; i++) {
            if(arr[i].length > maxLength) {
                maxLengthIndex = i;
                maxLength = arr[i].length;
            }
        }

        return arr[maxLengthIndex]
    }

console.log(longest(['abc', 'cb', 'a']))
