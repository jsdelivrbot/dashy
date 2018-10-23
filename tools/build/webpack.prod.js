const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
const paths = require('./paths');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
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
                windows: false,
            },
        }),
        new UglifyJsPlugin({
            sourceMap: true,
        }),
        new CompressionWebpackPlugin({
            compressionOptions: {
                numiterations: 15,
            },
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            },
            filename: '[path].gz[query]',
            test: /\.js$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
};
