<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about">消息</router-link> ｜
    <router-link to="/about/news">新闻</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h2 v-for="item in $route.query" :key="item">{{item}}</h2>
  </div>
</template>


<style>

</style>