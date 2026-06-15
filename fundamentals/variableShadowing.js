// Write a script that handles user configuration updates for a backend server.

const globalConfig = {
    port: 3000,
    theme: 'dark'
}

function updateConfig (newSetting) {

    console.log('original', globalConfig)

    let updatedConfig = {}

    if (true) {
        updatedConfig = { ...globalConfig }
        updatedConfig.theme = newSetting.theme

    }

    return updatedConfig

}

const newConfig = updateConfig({
    port: 5000,
    theme: 'light'
})
console.log(newConfig, globalConfig)