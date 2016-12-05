var Path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/boot.js'
    ],
    output: {
        path: Path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: require('./config.js').publicPath
    },

    module: {

        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                include: Path.join(__dirname, 'src/')
            },
            {
                test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.less$/, loader: 'less'
            },
            {
                test: /\.json$/, loader: 'json'
            },
            {
                test: /\.(ttf|eot|png|gif|jpg|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.(html|png)$/,
                loader: "file?name=[path][name].[ext]&context=./src"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          inject: 'body'
        })
    ],
};
