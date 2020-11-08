module.exports = {
  configureWebpack: {
    externals: {
      'AMap': 'AMap',
      'AMapUI': 'AMapUI'
       }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://40.73.59.203:17522/liveserviceweb", //对应服务器的接口
        changeOrigin: true
      },
    }
  }
}