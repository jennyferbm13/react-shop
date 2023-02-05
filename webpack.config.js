const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  mode: "development",
  resolve: { extensions: [".js", ".jsx"] },
  module: {
    rules: [
      //leer html o jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      //leer html
      { test: /\.html$/, use: [{ loader: "html-loader" }] },
      //leer css/acss
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
