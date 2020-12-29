<template>
  <div class="wrapper">
    <p class="title">
      収支入力
    </p>
    <el-date-picker
      v-model="selectedMonth"
      @change="createField()"
      type="month"
      placeholder="Pick a month"
    >
    </el-date-picker>
    <div class="iae">
      <div class="list-header">
        <p class="date">
          日付
        </p>
        <p class="income">
          収入 
        </p>
        <p class="spend">
          支出
        </p>
      </div>
      <div v-for="(item) in data" :key="item.date" class="data-list">
        <div class="date">
          <p>
            {{ item.date }}
          </p>
        </div>
        <div class="income">
          <el-input placeholder="Please input" style="width:50%" v-model="item.income"></el-input>
        </div>
        <div class="spend">
          <el-input placeholder="Please input" style="width:50%" v-model="item.spend"></el-input>
        </div>
      </div>
    </div>
    <el-button type="success" round @click="handleSubmit">適用</el-button>
  </div>
</template>
<script>
import 'normalize.css'
import moment from 'moment'
export default {
  data() {
    return {
      storageData: [],
      targetPeropd: '',
      editKey: '',
      tempIncome: '',
      tempSpend: '',
      tempMemo: '',
      data: [],
      selectedMonth: '',
      typeOptions: [
      {value: '1',　　label:'食費'},
      {value: '2',　　label:'家賃'},
      {value: '3',　　label:'光熱費'},
      {value: '4',　　label:'交際費'},
      {value: '5',　　label:'雑費'},
      {value: '6',　　label:'通信費'},
      {value: '7',　　label:'交通費'},
      {value: '8',　　label:'日用品費'},
      ],
    }
  },
  computed: {
    target() {
      return moment(this.targetMonth).format('M')
    },
  },
  created() {
    this.selectedMonth = moment().format('YYYY/MM')
    this.storageData = this.$localStorage.get('data')
    const v = this.storageData.find(v => v.yearMonth === this.selectedMonth)
    const data = v ? v.data : []
    if(data.length === 0) {
      let i = 0
      const defaultPeriod = this.getFirstPeriod()
      while(i != defaultPeriod) {
        this.data.push({
            date: moment().startOf('month').add(i, 'days').format('M/DD'),
            income: 0,
            spend: 0,
            memo: '',
        })
        i++
      }
    } else {
      this.data = data
    }
  },
  methods: {
    createField() {
      this.selectedMonth = moment(this.selectedMonth).format('YYYY/MM')
      this.storageData = this.$localStorage.get('data')
      const v = this.storageData.find(v => v.yearMonth === this.selectedMonth)
      const data = v ? v.data : []
      if(data.length === 0) {
       let i = 0
       this.data = []
       const defaultPeriod = this.getPeriod()
        while(i != defaultPeriod) {
          this.data.push({
              date: moment(this.selectedMonth).startOf('month').add(i, 'days').format('M/DD'),
              income: 0,
              spend: 0,
              memo: '',
          })
          i++
        }
      } else {
        this.data = data
      }
    },
    getFirstPeriod() {
      return moment().endOf('month').diff(moment().startOf('month'), 'days') + 1
    },
    getPeriod() {
      return moment(this.selectedMonth).endOf('month').diff(moment(this.selectedMonth).startOf('month'), 'days') + 1
    },
    handleEditButton(index) {
      this.tempIncome = this.data[index].income
      this.tempSpend = this.data[index].spend
      this.tempMemo  = this.data[index].memo
      this.editKey = index
    },
    handleCompleteButton(index) {
      this.data[index].income = this.tempIncome
      this.data[index].spend = this.tempSpend
      this.data[index].memo = this.tempMemo
      this.editKey = ''
    },
    initTempData() {
      this.tempIncome = ''
      this.tempSpend = ''
      this.tempMemo  = ''
    },
    isEdit(key) {
      return false
    },
    handleSubmit() {
      const data = this.storageData.filter(v => v.yearMonth !== this.selectedMonth)
      data.push({
          yearMonth: this.selectedMonth,
          data: this.data,
        })
      console.log(data)
      this.$localStorage.set('data', data)
      console.log('complete')
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.iae {
  width: 100%;
}
.list-header {
  display: flex;
  justify-content: center;
}
.data-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.date {
  width: 5%;
  font-size: 18px;
}
.income {
  width: 30%;
  font-size: 18px;
}
.spend {
  width: 30%;
  font-size: 18px;
}
.memo {
  width: 35%;
  font-size: 18px;
}
</style>