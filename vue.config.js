module.exports = {
  runtimeCompiler: true,
  configureWebpack:{
    resolve:{
      alias:{
        "components":"@/components",
        "views":"@/views",
        "assets":"@/assets",
        "common":"@/common",
        "network":"@/network",
      }
    }
  },
  devServer: {
    // 设置代理
    // port: 8080,
    proxy: {
      "/v1": {
        target: "http://127.0.0.1/", // 域名
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/v1": "/"
        }
      }
    },

  }


}