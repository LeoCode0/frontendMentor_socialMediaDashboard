const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}