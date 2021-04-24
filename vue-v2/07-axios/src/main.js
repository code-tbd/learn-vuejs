import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 抽离公共默认属性
axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
axios.defaults.timeout = 5000

// 默认get请求
// axios({
  //   url: 'http://123.207.32.32:8000/home/multidata',
  // }).then(res => {
    //   console.log(res);
// })
axios({
  // url: 'http://123.207.32.32:8000/home/data?type=sell&page=1'
  url: '/home/data',
  // 专门针对get请求的参数拼接,get对应params,post对应data
  params: {
    type: 'sell',
    page: 1
  }
}).then(res => {
  console.log(res); 
})

axios.all([
  axios({
    url: '/home/multidata'
  }),axios({
    url: '/home/data',
    params: {
      type: 'pop',
      page: 3
    }
  })
])
// .then(results => {
//   console.log(results);
// })

// axios.spread 可以拆开结果
// .then(axios.spread((res1,res2)=>{
  // console.log(res1)
  // console.log(res2)
// }))

const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000'
})

const instance2 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5'
})


// 创建axios实例，可以抽离多个服务器基本信息
instance1({
  url: '/home/multidata'
}).then(res=>{
  console.log(res);
})

instance2({
  url: '/home/multidata',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res=>{
  console.log(res);
})

request({
  url: '/home/multidata'
}).then(res=>{
  console.log('我在request里面')
  console.log(res)
}).catch(err=>{
  console.log(err)
})