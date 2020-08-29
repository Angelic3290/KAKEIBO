<template>
  <div id="app">
    <common-header />
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CommonHeader from './components/CommonHeader.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    CommonHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
