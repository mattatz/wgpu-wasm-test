const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/bootstrap.tsx"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bootstrap.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
    ]
  },
  experiments: {
    asyncWebAssembly: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".wasm"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, '../wasm'),
    })
  ]
};