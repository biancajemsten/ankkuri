const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
// const Dotenv = require("dotenv-webpack");

const config = mode => {
  console.log(mode);
  let env;
  if (mode.ENVIRONMENT === "development") {
    env = dotenv.config({ path: "./.env" }).parsed;
  } else env = process.env;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  console.log(new webpack.DefinePlugin(envKeys));
  return {
    entry: ["react-hot-loader/patch", "./src/App.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        { test: /\.(png|jpg|jpeg|svg)$/, use: "file-loader" }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "react-dom": "@hot-loader/react-dom"
      }
    },
    devServer: {
      contentBase: "./dist"
    },
    plugins: [new webpack.DefinePlugin(envKeys)]
  };
};

module.exports = config;
