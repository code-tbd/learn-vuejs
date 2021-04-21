<template lang="">
  <div @click="itemClick" class="tab-bar-item">
    <!-- <img src="../../assets/img/shouye.svg" alt="">
    <div>首页</div> -->
    <slot v-if="!isActive" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      default: '#3E88CC',
      type: String
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(()=>{})
    }
  },
}
</script>
<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 12px;
  }

  .tab-bar-item img {
    height: 22px;
    margin-top: 5px;
    vertical-align: middle;
  }

</style>