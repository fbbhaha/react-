/*
 * @Description: 代理服务器文件，将跨域的接口使用node服务器进行转发
 * @Author: bb f
 * @Date: 2021-08-09 21:48:59
 * @LastEditors: bb f
 * @LastEditTime: 2021-08-10 10:57:15
 */

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // 代理的接口名
        proxy('/api1', {
            target: 'http://localhost:5000', // 代理后所需转发的目标服务器
            changeOrigin: true, // 开启此项后可以在请求头host中显示源服务器的地址
            pathRewrite: { '^/api1': '' }, // 重写请求路径，此项是将接口中的 /api1 字符串替换掉
        })
    ),
        app.use(
            proxy('/api2', {
                target: 'http://localhost:5001',
                changeOrigin: true,
                pathRewrite: { '^/api2': '' },
            })
        );
};
