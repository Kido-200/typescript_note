const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        //给入口文件单独提供一个名称
        'app': './src/index.tsx'
    },
    output: {
        //修改输出文件名,不要写死 hash长度为8
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        //拆包
        splitChunks: {
            //webpack会把npm modules下面的包抽离出来，单独打包成vendors
            chunks: 'all'
        }
    }
}
