// 导入node中的path
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的__dirname通过node获得,再使用resolve拼接路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    // publicPath 任何涉及到的url都会在前面添加指定的路径
    publicPath: 'dist/'
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

        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当图片大小小于limit时，会将图片编译成base64字符串形式
              // 当图片大于limit时，需要使用file-loader模块进行加载
              limit: 8192,

              // [name]-原名 [hash:n]n位哈希 [ext]扩展名
              name: 'img/[name].[hash:8].[ext]'
            },
          },
        ],
      },
    ]
  },
}