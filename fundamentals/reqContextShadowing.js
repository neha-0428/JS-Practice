// Challenge 6: The Request Context Shadowing (Express-like Middleware)

const GLOBAL_NAMESPACE = 'GLOBAL'

function apiGatewayMock() {
    let requestNamespace = 'GATEWAY'

    // return function handleRequest() {
    //     let requestNamespace = 'LOCAL'
    //     {
    //         // due to var now requestNamespace it throws redeclared error
    //         var requestNamespace = "LOCAL"
    //     }
    // }

    return function handleRequest() {
        const localNamespace = 'LOCAL'

        console.log({
            global: GLOBAL_NAMESPACE,
            parent: requestNamespace,
            local: localNamespace
        })

    }
}


apiGatewayMock()()