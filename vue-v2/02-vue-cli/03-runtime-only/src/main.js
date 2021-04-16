import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */

// runtime-only 中不可出现 template
// .vue 文件中的 template 由 vue-template-compiler 转换成 render


new Vue({
  el: '#app',
  // render: h => h(App)
  render: createElement => {
    // creatElement('标签名',{标签属性名:属性, ...},['内容'])
    // return createElement('h2', {class: 'test'},['Hello',createElement('button', ['test'])])

    // creatElement(组件)
    return createElement(App)
    
  }
})
