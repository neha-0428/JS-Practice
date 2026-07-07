
function infiniteAdd(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }
    }
}

console.log(infiniteAdd(2)(3)(5))
