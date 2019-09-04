require("@babel/polyfill");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  entry: ["@babel/polyfill","./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      regenerator: true
    })
  ]
};
