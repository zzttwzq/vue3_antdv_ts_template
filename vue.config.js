const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "/web/",
    transpileDependencies: true,
    devServer: {
        port: 8081
    }
})