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
        // css的webpack配置

        test: /\.css$/,
        // 使用loader顺序为从右向左
        // use: ['style-loader', 'css-loader']

        // css-loader 负责将css进行加载
        // style-loader 负责将样式添加到DOM
        // 写成对象形式可以添加其他设置
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        // less的webpack配置

        test: /\.less$/i,
        use: [{loader: 'style-loader'},{loader: 'css-loader'},{loader: 'less-loader'}]
      },
      {
        // 图片的webpack配置

        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
}