// 导入node中的path
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的__dirname通过node获得,再使用resolve拼接路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}