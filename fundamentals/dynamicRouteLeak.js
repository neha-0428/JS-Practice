// Challenge 5: The "Dynamic Route" Scope Leak (Function vs Block Scope)

middlewareStack = []

for (var i = 0; i < 3; i++) {
    let index = i
    middlewareStack.push(function () {
        // console.log(i) when i is used, it does not saves value for every iteration
        // whereas when i use index, for every iteration a closure is created 
        // and we can access value through that closure
        console.log(index) 
    })
}

middlewareStack[0]();
middlewareStack[1]();
middlewareStack[2]();