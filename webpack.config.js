// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require('fs');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[name].[has][ext][query]',
    },
    devtool: 'eval-source-map',
    devServer: {
        watchFiles: ['src/template.html'],
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TODO APP :: Larakielcode',
            template: 'src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: 'asset/resource',
            }
        ],
    },
};