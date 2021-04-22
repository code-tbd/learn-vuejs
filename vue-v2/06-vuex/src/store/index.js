import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 单一状态树：一个项目只使用一个store
export default new Vuex.Store({
  // 变量
  state: {
    counter: 0,
    students: [
      {id: 101, name: 'jkl', age: 12},
      {id: 102, name: 'whj', age: 22},
      {id: 103, name: 'tbd', age: 18},
      {id: 104, name: 'ws', age: 26}
    ]
  },

  // mutations:转变/方法
  // store中state唯一更新方式就是mutations
  mutations: {
    increment(state) {
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
    }
  },

  // 类似computed 计算
  getters: {
    // getters中函数参数传入(state,getters)
    more20Stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20StuLen(state, getters) {
      return getters.more20Stu.length
    },
    // 通过return function可以传入参数
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },

  // 异步操作写在action
  actions: {
  },


  modules: {
  }
})
