// Goal: Encounter TDZ, Block Scope, and Illegal Shadowing syntax errors head-on.

let requestCount = 1

{
    requestCount++
    // var requestCount = 5 will throw illegalShadowing error (redeclared)
    requestCount = 5
}

console.log(requestCount)