<template>
  <div id="app">
    <common-header />
    <router-view/>
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
  },
  localStorage: {
    name: {
      type: String
    },
    reportPeriodStart: {
      type: String,
    },
    reportPeriodEnd: {
      type: String,
    },
    income: {
      type: Number,
    },
    spend: {
      type: Number,
    },
    balance: {
      type: Number,
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
}
</style>
