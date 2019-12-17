const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { 
    polyfills: './src/polyfills.js',
    index: './src/index.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
};