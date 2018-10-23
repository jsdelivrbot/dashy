module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    module:{
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
        ]
    }
};