const Path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    performance: {
        hints: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    entry: Path.resolve(__dirname, 'demo', 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'demo', 'dist'),
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.loader.json'
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
