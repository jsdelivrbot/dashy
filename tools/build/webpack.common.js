const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = {

  // Entry and output
  entry: paths.entryJs,
  output: {
    filename: 'dashy-[chunkhash].js'
  },

  // Base path for source files are in the src directory, or node_modules directory
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  },

  // Watch options
  watchOptions: {
    ignored: /node_modules/
  },

  // Loader configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [paths.packagesDir],
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env' ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=fonts/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader?name=images/[name].[ext]'
          }
        ]
      }
    ]
  },
  // Plugin configuration
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.entryHtml,
      filename: 'index.html'
    }),
    new webpack.ProgressPlugin()
  ] 
};