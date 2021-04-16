// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

const cpn = {
  template: '<span>{{message}}</span>',
  data() {
    return {
      message: 123
    }
  },
}

new Vue({
  el: '#app',
  // render: h => h(App)
  render: createElement => {
    // creatElement('标签名',{标签属性名:属性, ...},['内容'])
    // return createElement('h2', {class: 'test'},['Hello',createElement('button', ['test'])])

    // creatElement(组件)
    return createElement(cpn)
    
  }
})



// runtime-compiler
// template -> ast -> render -> vdom -> UI

// runtime-only
// render -> UI