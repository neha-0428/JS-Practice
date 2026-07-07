// Implement the inner logic for an createSecureCounter factory function. It must return three methods: increment(), decrement(), and getSecretLog(). The actual numeric count value must be completely inaccessible from the outside world. Additionally, ensure that if getSecretLog() is called more than twice, it returns "Access Denied" and permanently locks the counter from further increments or decrements.

function createSecureCounter(counter) {

    let trackCount = 0;
    let locked = false;
    
    return {
        increment: function () {
            if (!locked) {
                return counter++
            }
        },
        decrement: function () {
            if (!locked) {
                return counter--
            }
        },
        getSecureLog: function () {
            trackCount++;
            if (trackCount > 2) {
                locked = true;
                return "Access Denied"
            }
            console.log('counter', counter)
            return;
        }
    }
}

const counter = createSecureCounter(1)
console.log(counter.getSecureLog())
counter.increment()
console.log(counter.getSecureLog())
counter.decrement()
console.log(counter.getSecureLog())
console.log(counter.getSecureLog())
console.log(counter.getSecureLog())
counter.increment()
console.log(counter.getSecureLog())