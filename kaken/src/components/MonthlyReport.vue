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
          @change="handleTargetMonthChange">0
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
import moment from 'moment'

export default {
  components: {
    MonthlyReportList
  },
  data () {
    return {
      period: '',
      income: 0,
      spend: 0,
      balance: 0,
      name: '',
      targetMonth: '',
      storageData: [],
      data: [],
    }
  },
  created() {
    this.targetMonth = moment().format('YYYY/MM')
    this.storageData = this.$localStorage.get('data')
    const temp = this.storageData.find(v => v.yearMonth === this.targetMonth)
    this.data = temp ? temp.data : []
    console.log(this.data)
    let totalIncome = 0
    let totalSpend = 0
    let totalBalance = 0
    for (let i = 0; i < this.data.length; i++) {
      console.log(parseInt(this.data[i].income))
      console.log(parseInt(this.data[i].spend))
      totalIncome += parseInt(this.data[i].income)
      totalSpend += parseInt(this.data[i].spend)
    }
    this.income= totalIncome
    this.spend = totalSpend
    this.balance= totalIncome - totalSpend
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