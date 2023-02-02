const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // leer html
module.expors = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },

  resolve: {
    extensions: { extensions: [".js", ".jsx"] },
  },
  module: {
    rules: [
      //quiero que lea extensiones de js y jsx
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
        },
      },
      //leer html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
