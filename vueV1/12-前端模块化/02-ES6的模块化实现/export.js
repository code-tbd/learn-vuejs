// 定义的同时导出
export let num = 115
export function sum(num1, num2) {
  return num1 + num2
}
export class Person {
  run() {
    console.log('我会走路');
  }
}

// 定义以后统一导出
let name = 'White Star'

function mul(num1, num2) {
  return num1 * num2
}
class Animal {
  jump() {
    console.log('我会跳');
  }
}

export {
  name,
  mul,
  Animal
}

// 默认导出
// 只能存在一个
// 导入时可以重命名
export default function (num1, num2) {
  return num1 - num2
}
