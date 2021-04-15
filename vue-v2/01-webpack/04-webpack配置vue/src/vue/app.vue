<template>
  <div>
    <span>{{ message }}</span>
    <button class="test" @click="btnClick">点我一下</button>
    <cpn></cpn>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  template: "",
  data() {
    return {
      message: "helloWebpack",
    };
  },
  methods: {
    btnClick() {
      alert("哈哈");
    },
  },
  components: {
    Cpn
  }
};
</script>

<style scoped>
.test {
  color: green;
}
</style>