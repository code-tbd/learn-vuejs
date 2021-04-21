<template lang="">
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .tab-bar {
    display: flex;
    background-color: #c6c6c6;
    text-align: center;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .3);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

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