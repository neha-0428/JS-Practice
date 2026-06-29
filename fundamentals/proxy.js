// Complete the handler for a proxy that wraps a dbConfig object with these 
// strict production rules:
// If anyone tries to write a property value that is an empty string (""),
// throw an Error: "Value cannot be empty".
// If anyone tries to add a brand new key that wasn't originally in the dbConfig object,
// throw an Error: "Cannot add new configurations dynamically".

const dbConfig = {
    host: "localhost",
    port: 5432
};

const securityHandler = {
    set: function (target, prop, value) {

        if (value === '') {
            throw new Error('Value cannot be empty');
        }

        if (!(prop in target)) {
            throw new Error('Cannot add new configurations dynamically')
        }

        target[prop] = value
        return true

    }
}

const secureConfig = new Proxy(dbConfig, securityHandler)

// secureConfig.host = ""; // Should throw Error: "Value cannot be empty"
// secureConfig.password = "secret123"; // Should throw Error: "Cannot add new configurations dynamically"
secureConfig.port = 8080; // Should work perfectly!