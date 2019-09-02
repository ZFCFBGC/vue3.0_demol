// vue.config.js的基础配置
// const autoprefixer = require('autoprefixer')
// const pxtorem = require("postcss-pxtorem");
module.exports = {
  //将部署应用程序包的基本URL（baseUrl在Vue CLI 3.3之前称为）
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
  productionSourceMap: false, // 生产环境 sourceMap
  lintOnSave: false, //关闭eslint
  //http://118.178.131.231:81/mobile
  // webpack打包时，入口，出口，性能检测
  configureWebpack: {
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  },
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0", // can be overwritten by process.env.HOST
    port: 8888,
    disableHostCheck: true,
    https: false,
    hotOnly: false,
    proxy: "http://elm.cangdu.org",
    before: app => {}
  }
};
