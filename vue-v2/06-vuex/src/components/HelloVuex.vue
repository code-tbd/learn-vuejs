<template lang="">
  <div>
    <h2>HelloVuex-counter:{{$store.state.counter}}</h2>
    <h2>HelloVuex-more20Stu:{{$store.getters.more20Stu}}</h2>
    <h2>HelloVuex-more20StuLen:{{$store.getters.more20StuLen}}</h2>
    <h2>HelloVuex-moreAgeStuLen:{{$store.getters.moreAgeStu(23)}}</h2>
    <br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementCount(5)">+5</button>
  </div>
</template>
<script>
  export default {
    methods: {
      increment() {
        // 通过commit调用vuex中的方法
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      },
      incrementCount(count) {
        // 这里的count是payload(负载)
        // 1.普通提交风格
        // this.$store.commit('incrementCount', count)

        // 2.特殊提交风格
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      }
    },
  }
</script>
<style lang="">

</style>