module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    externals: {
      'AMap': 'AMap'
    },
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