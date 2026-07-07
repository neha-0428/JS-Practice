Array.prototype.customFilter = function (callback) {
  let results = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this && callback(this[i], i, this)) {
      results.push(this[i]);
    }
  }

  return results;
};

const students = [
  { name: "Neha", age: 23 },
  { name: "Yash", age: 20 },
  { name: "Shubham", age: 18 },
  { name: "Shubhra", age: 12 },
];

let adults = students.customFilter((student) => student.age <= 18);
// console.log(adults);


Array.prototype.customReduce = function (callback, initialValue) {
    let hasInitialValue = initialValue !== undefined
    accumulator = hasInitialValue ? initialValue : this[0]
    let startIndex = hasInitialValue ? 0 : 1

    // Edge Case: Empty array with no initial value throws a TypeError
    if (this.length === 0 && !hasInitialValue) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this)
        }
    }

    return accumulator
}

let nums = [1, 2, 3, 4, 5]
let sum = nums.customReduce((acc, b) => acc + b, 0)
let product = nums.customReduce((acc, b) => acc * b, 1)
let z = [].customReduce((acc, b) => acc * b, 1)
console.log(sum)
console.log(z)
console.log(product)