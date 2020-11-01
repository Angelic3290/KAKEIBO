<template>
  <div class="wrapper">
    {{ today }}
    <div class="inputs">
      収入
      <input v-model="income" @change="handleIncomeInput"/>
    </div>
    <div class="inputs">
    　支出
      <input v-model="spend" @change="handleSpendInput"/>
    </div>
  </div>
</template>
<script>
import 'normalize.css'
import moment from 'moment'
export default {
  data () {
    return {
      income: 0,
      spend: 0,
    }
  },
  computed: {
    today() {
      moment().format('YYYY/MM/DD')
    }
  },
  created() {
    this.income = this.$localStorage.get('income')
    this.spend = this.$localStorage.get('spend')
  },
  methods: {
    handleIncomeInput() {
      this.$localStorage.set('income', this.income)
    },
    handleSpendInput() {
      this.$localStorage.set('spend', this.spend)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.montly-report-header {
  display: flex;
  padding: 0 20px 0 20px;
  background-color: #0e9aa7;
}
p {
  color: white;
}
.values {
  width: 25%;
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.labels {
  padding-right: 10px;
}
</style>