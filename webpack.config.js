const isProduction = process.argv.indexOf('production') > -1;
const mode = isProduction ? 'production' : 'development';

const configNode = {
    mode,
    entry: {
        '../dist/index': './src/ts/index',
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
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
    },
    target: 'node'
}

const configNodeWeb = {
    mode,
    entry: {
        '../docs/js/ls-docs.min': './src/ts/index',
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
    },
    target: 'web'
}

module.exports = [configNode, configNodeWeb];