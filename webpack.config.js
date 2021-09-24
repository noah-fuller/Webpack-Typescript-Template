const path = require("path");

module.exports = {
  stats: "errors-only",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      // Aliases go here
      // "*Alias Name*": path.resolve(__dirname, "src/*Alias Path*"),
    },
  },
  output: {
    filename: "bundle.js",
  },
};
