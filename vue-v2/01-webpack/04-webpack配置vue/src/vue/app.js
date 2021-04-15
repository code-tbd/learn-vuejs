export default {
  template: `
  <div>
    <span>{{message}}</span>
    <button @click="btnClick">点我一下</button>
  </div>
  `,
  data() {
    return {
      message: 'helloWebpack'
    }
  },
  methods: {
    btnClick() {
      alert("哈哈")
    }
  }
}