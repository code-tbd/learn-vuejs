// 导入
import {num,sum,Person,mul,Animal,name} from "./export.js";

// 使用导入的变量/类/函数
console.log(num);
console.log('sum(1,2): ', sum(1,2));
let p = new Person()
p.run()
console.log('mul(4,5): ', mul(4,5));
let a = new Animal()
a.jump()
console.log(name);

// 导入默认的导出
// 此处不需要用{}
// 可以进行重命名
import rename from "./export.js"
console.log(rename);
console.log('rename(123,22): ', rename(123,22));

// 全部导入
// 全部导入可以把所有的导入名通过自定义命名.的方式来使用
// 避免了变量污染
import * as exportModule from "./export.js"
let p2 = new exportModule.Person()
p2.run()