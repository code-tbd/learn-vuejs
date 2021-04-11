const nums = [100,50,30,2,300,1000]


// 高阶函数：filter() 过滤
// 高阶函数：map() 映射
// 高阶函数：reduce( callbackfn( preValue, currentValue ), 初始值 ) 汇总


// 50，30，2
// 100，60，4
// 164
let result = nums.filter(n=>n<100).map(n=>n*2).reduce((pre,n)=>pre+n,0)

console.log(result);