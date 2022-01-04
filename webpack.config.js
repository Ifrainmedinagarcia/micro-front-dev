const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const rulesForJs = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  },
};

const rulesForCss = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"],
};

const rules = [rulesForJs, rulesForCss];

module.exports = (env, arg) => {
  const { mode } = arg;
  const isProduction = mode === "production";
  return {
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/index.html" }),
      new ModuleFederationPlugin({
        name: "MFE1",
        filename: "remoteEntry.js",
        exposes: {
          "./index": "./src/index",
        },
      }),
    ],
    module: { rules },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
    },
    devtool: "source-map",
  };
};
