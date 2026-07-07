// Write a custom function named customPromiseAllSettled(promisesArray). It must accept an array of promises and return a single promise. This promise must wait for every input item to finish, then resolve with an array of objects structured exactly like this:

// For success: { status: "fulfilled", value: data }

// For failure: { status: "rejected", reason: err }

function customPromiseAllSettled(promiseArray) {
    let data = []
    let err = []
    let completedCount = 0;

    return new Promise((res, rej) => {
        promiseArray.foeEach((item, index) => {
            Promise.resolve(item)
                .then(value => {
                    data[index] = value
                    completedCount++

                    if (completedCount === promiseArray.length) {
                        resolve(data, err)
                    }
                })
                .catch(error => {
                    err[index] = error
                    completedCount++
                })
        })
    })
}