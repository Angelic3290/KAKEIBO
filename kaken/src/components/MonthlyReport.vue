<template>
  <div class="wrapper">
    <p>月次収支レポート</p>
    <div class="montly-report-header">
      <div class="values">
        <p class="labels">期間</p>
        <el-date-picker
          v-model="period"
          type="date"
          placeholder="Pick a day">
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
    <monthly-report-calender />
  </div>
</template>
<script>
import 'normalize.css'
import MonthlyReportCalender from './MonthlyReportCalender'
export default {
  components: {
    MonthlyReportCalender
  },
  data () {
    return {
      period: '',
      income: 120000,
      spend: 120000,
      balance: 120000,
    }
  },
  methods: {
    toLocaleNumbers: function (value) {
      return value.toLocaleString()
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