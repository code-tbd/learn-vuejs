// commonJS导入
const {sum,mul} = require('./js/mathUtils')
// 导入css
require('./style/normal.css')
// 导入less
require('./style/special.less')

console.log(sum(1,2));
console.log(mul(2,3));

// ES6导入
import * as info from './js/info'
console.log(info.name);
console.log(info.height);
console.log(info.age);

document.writeln('<span>你好</span>')