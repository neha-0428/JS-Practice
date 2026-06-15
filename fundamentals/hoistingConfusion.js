// Goal: Write code that behaves unpredictably due to hoisting, 
// then refactor it to clean, modern code.

function processData() {
    
    // for (var i = 0; i < 3; i++) {
    //     setTimeout(() => {
    //         console.log(i)
    //     }, 100)
    // } // prints 3 3 3 due to var

    // case 1: changed var to let
    // for (let i = 0; i < 3; i++) {
    //     setTimeout(() => {
    //         console.log(i)
    //     }, 100) // prints 0 1 2 due to let
    // }

    // case2: added a IIFE (immediately invoked function expression)
    for (var i = 0; i < 3; i++) {
        (function (currentI) {
            setTimeout(() => {
                console.log(currentI)
            }, 100)
        })(i)
    }

}

processData()