function createCounter(initialValue) {
    let val = initialValue;

    return {
        increment: function () {
            return ++val
        },
        decrement: function () {
            return --val;
        },
        value: function() {
            return val
        }
    }
}

const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.value())