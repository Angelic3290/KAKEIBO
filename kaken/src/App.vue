<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input v-model="name" @change="setName" />
    {{ getName }}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  localStorage: {
    name: {
      type: String
    },
  },
  data() {
    return {
      name: '' 
    }
  },
  computed: {
    getName() {
      return this.$localStorage.get('name')
    },
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  watch: {
    name() {
      console.log('hoge')
    },
  },
  methods: {
    setName() {
      this.$localStorage.set('name', this.name)
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
