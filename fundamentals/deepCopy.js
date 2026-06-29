// Write a function deepEqual that takes two inputs and returns true if they are deeply equal 
// (contain the same keys and values, even if nested), and false otherwise.

function deepEqual(user1, user2) {

    // console.log(user1, user2)

    // checks for primitives
    if (user1 === user2) {
        return true
    }

    // either of them are null or not object
    if (!user1 || typeof user1 !== 'object' || !user2 || typeof user2 !== 'object') {
        return false
    }

    const keys1 = Object.keys(user1);
    const keys2 = Object.keys(user2);
    
    // checks for the length
    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        let result = deepEqual(user1[key], user2[key])
        if (!result) {
            return false
        }
    }

    return true
}



// const userA = { name: "Neha", details: { age: 23, skills: ['JS'] } };
// const userB = { name: "Neha", details: { age: 23, skills: ['JS'] } };

const userA = { name: "Neha", details: { age: 23, skills: ['JS'] } };
const userB = { name: "Neha", details: { age: 23, skills: ['TS'] } };

console.log(deepEqual(userA, userB));