function firstIndex(arr) {
  // code here
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] == 1) {
      return left;
    }

    if (arr[right] == 0) {
      return -1;
    }

    if (arr[right - 1] == 0) {
      return right;
    }

    left++;
    right--;
  }

  return -1;
}

console.log(firstIndex([0, 1, 1, 1, 1, 1, 1, 1]))