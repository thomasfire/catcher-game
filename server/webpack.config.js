const path = require('path');

module.exports = {
    entry: {
        index: './src/app.ts'
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'server.bundle.js'
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    //devtool: "inline-source-map",
    //mode: "development"
    devtool: false,
    mode: "production"
};