const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

module.exports = {
  lintOnSave: false,
  outputDir: 'docs',
  baseUrl: 'flexible-pc-full-screen',
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
}
