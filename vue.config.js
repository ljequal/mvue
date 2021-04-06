let baseUrl = 'http://192.168.88.104:9999';
// let baseUrl = 'http://172.20.35.3:9990';
module.exports = {
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        })
    },
    transpileDependencies: ['avue-plugin-transfer', 'avue-plugin-ueditor'],
    //配置转发代理
    devServer: {
        proxy: {
            '/v1': {
                target: 'http://192.168.88.29:9002',
                // target: 'http://192.168.88.53:9002',
                ws: true,
                pathRewrite: {
                    '^/v1': ''
                }
            },
            '/auth': {
                target: baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/auth': '/auth'
                }
            },
            '/code': {
                target: baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/code': '/code'
                }
            },
            '/admin': {
                target: baseUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/admin': '/admin'
                }
            },
        }
    }
};