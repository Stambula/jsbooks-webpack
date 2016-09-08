var webpack = require('webpack'),
    path = require('path');

module.exports = {

  entry: "./js/index.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,
  
  module:
  {
      loaders: 
      [
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },

          {
            test: /\.css$/,
          loader: "css-loader!autoprefixer-loader"
          },

          { 
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'url?limit=10000!img?progressive=true' 
          }
      ]
  }
}
    