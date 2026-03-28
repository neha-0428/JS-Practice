
function createAdder(x) {

    return function (y) {
        return x + y;
    }
}

const adder = createAdder(10);

console.log(adder(5)) // 15
console.log(adder(2)) // 12


function createTracker() {
    let value = 0;

    return {
        add: function (val) {
            value += val
            return value
        },
        getTotal: function () {
            return value
        }
    }
}

const tracker = createTracker();

console.log(tracker.add(5));
console.log(tracker.add(10));
console.log(tracker.getTotal()); // 15


function once(callback) {
    let called = false;

    return function(...args) {
        if(called) return

        called = true
        return callback(...args)

    }
}

const greet = once(() => console.log("Hello"));

console.log(greet()); // Hello
console.log(greet()); // nothing will print
console.log(greet()); // nothing  will print


function createLimiter(val) {
    let count = 0

    return function() {
        if(count >= val) {
            return "Limit reached"
        }

        count++
        return "Allowed"
    }
}


const limiter = createLimiter(2);

console.log(limiter()) // Allowed
console.log(limiter()) // Allowed
console.log(limiter()) // Limit reached
