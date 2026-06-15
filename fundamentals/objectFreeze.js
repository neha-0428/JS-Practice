// Challenge 7: The "Frozen" Middleware Factory (Memory References)

"use strict"
function createMiddlewareFactory(baseConfig) {
    Object.freeze(baseConfig)

    return {
        getConfig () {
            return baseConfig
        },
        updateConfig(key, value) {
            baseConfig[key] = value
        }
    }
}

const appConfig = {
    port: 3000,
    name: 'localhost'
}

const middleware = createMiddlewareFactory(appConfig)
console.log('original middleware', middleware.getConfig())

middleware.updateConfig('name', 'production')

console.log('after update', middleware.getConfig())

/* 
  =============================================================================
  DEBUGGING NOTE: OBSERVED BEHAVIOR (Sloppy Mode vs Strict Mode)
  =============================================================================
  1. IN SLOPPY MODE (Without "use strict"):
     - JavaScript fails silently. 
     - The line `baseConfig[key] = value;` runs but does absolutely nothing.
     - The application configuration remains unchanged ({ port: 3000, theme: "dark" }).
     - No runtime error or alert is given to the developer.

  2. IN STRICT MODE (With "use strict"):
     - JavaScript refuses to fail silently.
     - It instantly throws a runtime TypeError: Cannot assign to read-only property 'theme' of object.
     - This prevents hidden state mutation bugs across your backend architecture.
  =============================================================================
*/