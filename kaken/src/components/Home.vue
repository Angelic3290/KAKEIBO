<template>
  <div class="wrapper">
    <div>
       <router-link to="/hoge">収支一覧</router-link>
    </div>
    <div>
      <router-link to="/dailyInput">支出入力</router-link>
    </div>
  </div>
</template>
<script>
import 'normalize.css'
import moment from 'moment'
export default {
   data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style scoped>
.wrapper {
  width: 100%;
}

</style>