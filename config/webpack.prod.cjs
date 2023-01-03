const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const MB = 1024 * 1024;

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(`${__dirname}/../`, "build"),
    clean: true,
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.[contenthash].html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new WorkboxPlugin.GenerateSW({
      dontCacheBustURLsMatching: /^(style|index)\..+\.(css|js)$/gi,
      maximumFileSizeToCacheInBytes: 1 * MB,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
