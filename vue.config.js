const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    outputDir: 'dist',
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: config => {
        // 关闭预加载 https://blog.csdn.net/sinat_35538827/article/details/87969834
        config.plugins.delete('prefetch')
    },
    devServer: {
        port: 8086,
        proxy: {
            '/nacos': {
                target: 'http://nacos.lishicloud.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/nacos': '/'
                }
            },
            '/api/management': {
                target: 'http://material.lishicloud.com',
                changeOrigin: true
            },
        }
    },

})