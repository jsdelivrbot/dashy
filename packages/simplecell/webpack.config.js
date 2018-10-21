const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => ({

  // Entry and output
  entry: './src/index.js',
  output: {
    filename: 'index.js',
  },

  // Base path for source files are in the src directory, or node_modules directory
  resolve: {
    modules: [
      path.join(__dirname, './src'), 
    ]
  },

  // External files
  externals : [
    nodeExternals(),
    nodeExternals({
      //modulesFromFile: true
      modulesDir: path.resolve(__dirname, '../../node_modules')
    }),
  ],

  // Watch options
  watchOptions: {
    ignored: /node_modules/
  },

  // Loader configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'url-loader'
            }
          }
        ]
      }
    ]
  },

  // Plugin configuration
  plugins: []

});