<template lang="">
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <template v-slot:icon>
          <img src="@/assets/img/tabbar/shouye.svg" alt="">
        </template>
        <template v-slot:icon-active>
          <img src="@/assets/img/tabbar/shouye-active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:icon>
          <img src="@/assets/img/tabbar/fenlei.svg" alt="">
        </template>
        <template v-slot:icon-active>
          <img src="@/assets/img/tabbar/fenlei-active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:icon>
          <img src="@/assets/img/tabbar/gouwuche.svg" alt="">
        </template>
        <template v-slot:icon-active>
          <img src="@/assets/img/tabbar/gouwuche-active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:icon>
          <img src="@/assets/img/tabbar/wode.svg" alt="">
        </template>
        <template v-slot:icon-active>
          <img src="@/assets/img/tabbar/wode-active.svg" alt="">
        </template>
        <template v-slot:text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style>
  
</style>