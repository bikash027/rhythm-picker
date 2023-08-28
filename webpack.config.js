const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new MiniCssExtractPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // clean: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     exclude: /\.file.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            {
                test: /\.file.css$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.opus$/i,
                type: "asset/resource",
            },
        ],
    },
    watchOptions: {
        poll: 1000,
        ignored: ['**/node_modules', '**/dist']
    },
    optimization: {
        runtimeChunk: 'single',
    },
};