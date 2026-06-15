
function memoize(callback) {
    let cache = {}

    return function(...args) {
        let key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            return cache[key];
        }

        let result = callback(...args)
        cache[key] = result

        return result
    }
}

const fn = (x) => x * 2;

const cacheFn = memoize(fn);

console.log(cacheFn(2)) // calculates
console.log(cacheFn(2)) // returns cached result
console.log(cacheFn(5)) // calculates
console.log(cacheFn(7)) // calculates
console.log(cacheFn(5)) // returns cached result
