// Write a curried function logMessage(level) that takes a log severity string ("INFO", "ERROR", or "WARN"), 
// and returns a new function that accepts a message string. When that secondary function is invoked, 
// it should print a cleanly formatted system log string.

function logMessage(level) {
    return function (message) {
        return `[${level}] - ${message} `
    }
}

const errorLogger = logMessage("ERROR");
const infoLogger = logMessage("INFO");

console.log(errorLogger("Database connection failed!")); 
// Should print: "[ERROR] - Database connection failed!"

console.log(infoLogger("Server started successfully on port 5000.")); 
// Should print: "[INFO] - Server started successfully on port 5000."