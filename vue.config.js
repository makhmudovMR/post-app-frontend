module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",//"https://kedco-admin.tua.ng/",
        ws: true,
        changeOrigin: true,
        pathRewrite:{'^/api':'/'},
        logLevel: "debug"
      },
    },
  },
}