const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const config = {
    entry: "./src/index.jsx",
    output: {
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: ["babel-loader"]
        },
        {
          test: /.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new CopyPlugin([{ from: '_redirects', to: '' }]),
      new HtmlWebpackPlugin({
        template: "./src/index.html"s
      })
    ],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
      hot: true,
      port: 9007,
      historyApiFallback: true,
    }
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    );
  }

  return config;
};