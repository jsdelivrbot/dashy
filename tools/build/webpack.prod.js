const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  plugins: [
    new FaviconsWebpackPlugin({
      logo: paths.entryFavicon,
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
  ]
};
