module.exports = {
  entry: { index: "./src/index.js" },
  output: { assetModuleFilename: "favicon/[name][ext]" },
  module: {
    rules: [
      {
        test: /\.(png|xml|ico|svg|webmanifest)/,
        type: "asset/resource",
      },
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
