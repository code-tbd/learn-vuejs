// commonJS导入
const {sum,mul} = require('./mathUtils')

console.log(sum(1,2));
console.log(mul(2,3));

// ES6导入
import * as info from './info'
console.log(info.name);
console.log(info.height);
console.log(info.age);