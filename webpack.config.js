
module.exports = {
    mode: 'development',
    entry: ['./app/main.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }

            }
        ]
    },
    devServer: {
        port: 9090
    }
};