const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "./dist"
    },
    devtool : 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                excude: /node_modules/,
            }
        ],
        resolve: {
            extentions: ['.ts', '.js']
        }
    }
}
