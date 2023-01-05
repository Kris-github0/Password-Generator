const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/favicon", to: "favicon" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
