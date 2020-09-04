const path = require('path');

module.exports = {
    performance: {
        hints: false
    },
    entry: path.resolve(__dirname, 'test', 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'test', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: "ts-loader"

            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
