const path = require('path');

module.exports = {
    performance: {
        hints: false
    },
    entry: path.resolve(__dirname, 'demo', 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'demo', 'dist'),
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
