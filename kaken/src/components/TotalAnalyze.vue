<template>
  <div class="wrapper">
    <p class="title">
      まとめ
    </p>
    <el-date-picker
      v-model="selectedMonth"
      type="month"
      placeholder="Pick a month"
    >
    </el-date-picker>
     <div style="width: 500px; height: 500px;" >
    <Graph :chartData="chartData" />
    </div>
  </div>
</template>
<script>
import 'normalize.css'
import moment from 'moment'
import Graph from './Graph'
export default {
  components: {
    Graph,
  },
  data() {
    return {
      targetPeropd: '',
      editKey: '',
      tempIncome: '',
      tempSpend: '',
      tempMemo: '',
      data: [],
      selectedMonth: '',
    }
  },
  watch: {
    selectedMonth() {
      console.log(this.selectedMonth)
    }
  },
  computed: {
    target() {
      return moment(this.targetMonth).format('M')
    },
    chartData() {
      return {
          labels: this.getLabels(),
          datasets: [{
            label: ['分類毎の支出'],
            backgroundColor: ['#f87979', '#f87978', '#f87998', '#f87999', '#123456', '#112233', '#223344', '#334455'],
            data: [40, 30, 10, 25,10,10, 10, 10,]
          }],
      }
    },
  },
  created() {
    const data = this.$localStorage.get('data')
    if(data.length === 0) {
      console.log('aaaaa')
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
      this.data = this.$localStorage.get('data')
    }
  },
  methods: {
    getLabels() {
      return [
        '食費',
      '家賃',
      '光熱費',
      '交際費',
      '雑費',
      '通信費',
      '交通費',
      '日用品費',]
    },
    getFirstPeriod() {
      console.log(moment().endOf('month').format('YYYY/MM/DD'))
      console.log(moment().startOf('month').format('YYYY/MM/DD'))
      return moment().endOf('month').diff(moment().startOf('month'), 'days') + 1
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
      this.$localStorage.set('data', this.data)
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