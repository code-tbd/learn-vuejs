// 导入node中的path
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的__dirname通过node获得,再使用resolve拼接路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 用下面这种方式使用loader顺序为从右向左
        // use: ['style-loader', 'css-loader']

        // css-loader 负责将css进行加载
        // style-loader 负责将样式添加到DOM
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ]
  }
}