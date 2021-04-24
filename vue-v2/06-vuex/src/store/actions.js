export default {
  // 异步操作写在action
  updateStu(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // actions中需要使用commit来通过mutation更改state
        context.commit('forUpdateStu')
        console.log(payload);
        resolve('success')
      }, 3000)
    })
  }
}