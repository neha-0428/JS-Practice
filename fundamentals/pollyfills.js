// map

Array.prototype.myMap = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const result = callback(this[i], i, this)
        newArray.push(result)
    }

    return newArray
}

const nums = [1, 2, 3, 4, 5]
const doubled = nums.myMap(num => num * 2)
// console.log(doubled)

//filter
Array.prototype.myFilter = function (callback) {
    const newArray = []

    for (let i = 0; i < this.length; i++) {
        const filtered = callback(this[i]);
        if (filtered) {
            newArray.push(this[i])
        }
    }

    return newArray
}

const nums1 = [1, 2, 3, 4, 5]
const evenNums = nums.myFilter(num => num % 2 === 0)
console.log(evenNums)