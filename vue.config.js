const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    outputDir: 'dist',
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: config => {
        // 关闭预加载 https://blog.csdn.net/sinat_35538827/article/details/87969834
        config.plugins.delete('prefetch')
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#ff0000',
                        'link-color': '#0000ff',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    // pluginOptions: {
    //     'style-resources-loader': {
    //         preProcessor: 'less',
    //         patterns: [path.resolve(__dirname, "./src/theme/theme.less")],
    //     }
    // },
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