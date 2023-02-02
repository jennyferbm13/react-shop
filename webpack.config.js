const path = require("path");
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
      },
    ],
  },
};
