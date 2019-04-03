const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:{
     app: './src/index.js',
    //  multiple entry points
    //  print: './src/second.js'
   },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
   new HtmlWebpackPlugin({
     filename:'index.html',
     title:'MyApp'
   }),
   new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },{
      test :/\.(png|svg|jpg|gif)$/,
      use:[
        'file-loader'
      ]
    }]
  }
};