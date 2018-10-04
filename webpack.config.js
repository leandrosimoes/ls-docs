const isProduction = process.argv.indexOf('production') > -1;
const mode = isProduction ? 'production' : 'development';

const config = {
    mode,
    entry: {
        '../dist/js/ls-docs.min': './src/ts/ls-docs',
        '../docs/js/ls-docs.min': './src/ts/ls-docs'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: 'ts-loader'
            }
        ]
    }
}

module.exports = config;