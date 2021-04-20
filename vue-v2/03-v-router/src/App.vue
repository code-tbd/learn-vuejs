<template>
  <div id="app">
    <div id="nav">
      <!-- tag 属性设置router-link 真正的标签 -->
      <router-link to="/" tag="button" replace>Home</router-link> |
      <!-- <router-link to="/about" replace>About</router-link> | -->

      <!-- to="{ path:'', query: {} }" -->
      <router-link :to="{path:'/about',query:{name:'tbd',age:18,height:188}}" replace>About</router-link> |
      <router-link :to="'/user/'+id" replace>User</router-link>
<!-- 
      <button @click="btnClick1">About</button>
      <button @click="btnClick2">User</button> -->
    </div>
    <!-- router-view 占位 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id: 'zhangsan'
    }
  },
  methods: {
    btnClick1() {
      this.$router.push('/about/')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
