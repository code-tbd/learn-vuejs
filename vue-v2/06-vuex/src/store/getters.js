export default {
  // 类似computed 计算
  // getters中函数参数传入(state,getters)
  more20Stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  more20StuLen(state, getters) {
    return getters.more20Stu.length
  },
  // 通过return function可以传入参数
  moreAgeStu(state) {
    return function (age) {
      return state.students.filter(s => s.age > age)
    }
  }
}