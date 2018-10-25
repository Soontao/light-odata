module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './lib/c4codata-umd.js',
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
        test: /\.tsx?$/, loader: "ts-loader", options: {
          configFile : "tsconfig-umd.json"
        }
      }
    ]
  }
}