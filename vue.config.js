module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/breezy/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mdx$/,
          use: ['babel-loader', '@mdx-js/vue-loader']
        }
      ]
    }
  }
};
