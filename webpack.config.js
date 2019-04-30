const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { 
      main: './src/index.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    open:true,  
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
        title: 'Main page',
        filename: 'index.html',
        template: './src/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
        title: 'Test page',
        filename: 'test.html',
        template: './src/pages/test.pug'
    }),
    new ExtractTextPlugin({filename: 'style.css'})
  ]
};