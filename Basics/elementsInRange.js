
// Given an array arr[] containing positive elements. A and B are two numbers defining a range. 
// The task is to check if the array contains all elements in the given range (inclusive).
function check_elements(arr, n, A, B) {

    for(let i=A; i<=B; i++) {
        if(!arr.includes(i)) {
            return false;
        }
    }

    return true;
}

console.log(check_elements([1, 4, 5, 2, 6, 8, 3], 7, 2, 7))