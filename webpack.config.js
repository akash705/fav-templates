const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env={mode:mode='production'})=>{
  env.mode = env.mode || 'production'
  return{
    mode:env.mode,
    entry:{
      app: './src/index.js',
     //  multiple entry points
     //  print: './src/second.js'
    },
   output: {
     filename: '[name].main.js',
     path: path.resolve(__dirname, 'dist')
   },
// for same dependencies
   //  optimization: {
  //   splitChunks: {
  //      chunks: 'all'
  //    }
  //  },
   devtool: 'inline-source-map',
   plugins:[
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       filename:'index.html',
       template:'./index.html',
       title:'MyApp'
     }),
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
     },{
       test: /\.scss$/,
       use: ['style-loader', 'css-loader', 'sass-loader']
     }]
   }
  }
};