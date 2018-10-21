const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const fs = require('fs');

// interesting - https://github.com/tol-is/create-react-app-monorepo-example/blob/master/config/paths.js
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('..');
const dashySrc = resolveApp('../../node_modules/@dashy');
console.log('appSrc, dashySrc', appSrc, dashySrc);

module.exports = (env, argv) => ({

  // Entry and output
  entry: './src/index.js',
  output: {
    filename: 'dashy.js'
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
        include: [appSrc],
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
      template: './src/index.html',
      filename: 'index.html'
    }),
    argv.mode === 'development'
      ? false
      : new FaviconsWebpackPlugin({
          logo: path.resolve('./static/favicon/icon-home.png'),
          prefix: 'icons-[hash]/',
          persistentCache: true,
          inject: true,
          title: 'Dashy',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        })
  ].filter(Boolean)
});
