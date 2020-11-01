<template>
  <div class="wrapper monthly-report">
    <p>月次収支レポート</p>
    <div class="montly-report-header">
      <div class="values">
        <p class="labels">期間</p>
        <el-date-picker
          v-model="targetMonth"
          type="month"
          placeholder="Pick a month"
          @change="handleTargetMonthChange">
        </el-date-picker>
      </div>
       <div class="values">
        <p class="ilabels">収入</p>
        <p style="font-size: 30px;">￥{{ toLocaleNumbers(income) }}</p>
      </div>
      <div class="values">
        <p class="labels">支出</p>
        <p style="font-size: 30px;">￥{{ toLocaleNumbers(spend) }}</p>
      </div>
      <div class="values">
        <p class="labels">残高</p>
        <p style="font-size: 30px;">￥{{ toLocaleNumbers(balance) }}</p>
      </div>
    </div>
    <monthly-report-list :target-month="targetMonth" />
  </div>
</template>
<script>
import 'normalize.css'
import MonthlyReportList from './MonthlyReportList'
export default {
  components: {
    MonthlyReportList
  },
  data () {
    return {
      period: '',
      income: 0,
      spend: 120000,
      balance: 120000,
      name: '',
      targetMonth: '',
    }
  },
  created() {
    this.income = this.$localStorage.get('income')
    this.spend = this.$localStorage.get('spend')
    this.targetMonth = this.$localStorage.get('targetMonth')
  },
  methods: {
    toLocaleNumbers: function (value) {
      return value.toLocaleString()
    },
    handleTargetMonthChange() {
      this.$localStorage.set('targetMonth', this.targetMonth)
    },
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