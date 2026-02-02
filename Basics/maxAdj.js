function maxAdj(arr) {
  // code here

  let result = []
  for(let i=0; i<arr.length - 1; i++) {
    if(arr[i] > arr[i+1]) {
        result.push(arr[i])
    } else {
        result.push(arr[i + 1])
    }
  }

  return result
}


console.log(maxAdj([1, 2, 2, 3, 4, 6]))