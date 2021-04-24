import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

const state = {
  // 变量
  counter: 0,
  students: [
    { id: 101, name: 'jkl', age: 32 },
    { id: 102, name: 'whj', age: 22 },
    { id: 103, name: 'tbd', age: 18 },
    { id: 104, name: 'ws', age: 26 }
  ]
}

// 单一状态树：一个项目只使用一个store
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    // modules中添加的模块会被自动添加进根模块的state中
    moduleA,
    moduleB
  }
})
