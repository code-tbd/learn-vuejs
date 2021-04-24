import {
  INCREMENT
} from './mutations-types'

import Vue from 'vue'

export default {
  // mutations:转变/方法
  // store中state唯一更新方式就是mutations
  // 官方文档建议统一vuex中mutations的函数名和组件内commit的函数名参数
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },

  // 普通提交风格对应的mutations
  // incrementCount(state, count) {
  //   console.log(count);
  // }

  // 对象提交风格对应的mutations
  incrementCount(state, payload) {
    state.counter += payload.count
  },

  // !!在vue2.x下!!
  // vuex响应式前提：在一开始已经定义好
  addStuProp(state) {
    // 新添加不会触发响应式
    // state.students[0]['address'] = '洛杉矶'
    // 删除不会触发响应式
    // delete state.students[0].id
    Vue.set(state.students[0],'address','洛杉矶')
  },
  forUpdateStu(state) {
    state.students[1].name='haha'
  }
}