<template>
  <div id="app">
    <h2>App-counter:{{$store.state.counter}}</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

  export default {
    name: 'App',
    components: {
      HelloVuex
    }
  }
</script>

<style>
</style>