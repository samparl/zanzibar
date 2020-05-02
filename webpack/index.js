const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackTemplate = require('html-webpack-template');
const path = require('path');
const outputPath = path.resolve(__dirname, '../dist');
console.log({outputPath})

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  mode: "production",
  devtool: "source-map",
  resolve: {

    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: "ts-loader",
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    hot: true,
    port: 8080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'My App',
      // inject: false,
      template: HTMLWebpackTemplate,
      base: '/',
      xhtml: true,
      meta: [
        {
          name: 'description',
          content: 'Forging the future.'
        }
      ],
      appMountIds: ['root'],
    }),
  ]
};