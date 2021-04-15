// commonJS导入
const {sum,mul} = require('./js/mathUtils')
// 导入css
require('./style/normal.css')
// 导入less
require('./style/special.less')
// 导入Vue
import Vue from 'vue'
import APP from './vue/app'

console.log(sum(1,2));
console.log(mul(2,3));

// ES6导入
import * as info from './js/info'
console.log(info.name);
console.log(info.height);
console.log(info.age);

document.writeln('<span>你好</span>')




new Vue({
  // 同时写 el 和 template 时
  // template 里的内容会完全替换掉 el 挂载的内容
  el: '#app',

  // 自结束标签</>
  template: '<APP/>',
  components: {
    APP
  }
})