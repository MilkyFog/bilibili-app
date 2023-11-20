/**
 * vue-cli的配置文件 90%是webpack的配置
 */
const { defineConfig } = require('@vue/cli-service')
const UnoCSS = require("@unocss/webpack").default;
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir)

// 必须使用CommonJS导出 webpack加载配置是node环境 node环境默认模块化标准是CommonJS
// webpack运行打包过程是webpack环境 webpack环境既支持CommonJS也支持ESModule
module.exports = defineConfig({ 
  transpileDependencies: true,
  configureWebpack: {
    plugins: [UnoCSS()],
    resolve: {
      alias: {
        '@': resolve("src")
      }
    }
  },
  devServer: { // 开发服务器的配置
    proxy: { // 配置代理
      "/x": { // 以/x开头的请求 开启代理
        target: 'https://api.bilibili.com/',
        onProxyReq(proxyReq) { // 添加消息头
          console.log('onProxyReq')
          proxyReq.setHeader('origin', 'https://bilibili.com')
          proxyReq.setHeader('referer', 'https://www.bilibili.com/v/channel')
        }
      },
      '/a': {
        target: 'https://wwww.baidu.com'
      }
    }
  }
})
