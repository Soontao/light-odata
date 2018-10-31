const { join } = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: join(__dirname, './lib'),
    filename: "c4codata-umd.js",
    libraryTarget: 'umd'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.umd.json"
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      cache: true
    })]
  }
}