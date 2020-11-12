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
        target: process.env.VUE_APP_BASE_URL, //对应服务器的接口
        changeOrigin: true,
        ws: true
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}