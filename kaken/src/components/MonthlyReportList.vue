<template>
  <div class="wrapper">
    <p class="title">
      {{ target }}月の収支
    </p>
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
      <div v-for="(item, index) in data" :key="item.date" class="data-list">
        <div class="date">
          <p>
            {{ item.date }}
          </p>
        </div>
        <div class="income">
          <p v-if="isEdit(index)">
            ￥{{ item.income }}
          </p>
          <el-input v-else placeholder="Please input" style="width:50%" v-model="tempIncome"></el-input>
        </div>
        <div class="spend">
          <p v-if="isEdit(index)">
            ￥{{ item.spend }}
          </p>
          <el-input v-else placeholder="Please input" style="width:50%" v-model="tempSpend"></el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'normalize.css'
import moment from 'moment'
export default {
  props: {
    targetMonth: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      data: [],
      editKey: '',
      tempIncome: '',
      tempSpend: '',
      tempMemo: '',
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
    this.data = v ? v.data : []
  },
  methods: {
    getCategory(id){
      const option = this.typeOptions.find(v => v.value === id)
      return option ? option.label : ''
    },
    handleEditButton(index) {
      this.tempIncome = this.data[index].income
      this.tempSpend = this.data[index].spend
      this.tempMemo  = this.data[index].memo
      this.editKey = index
    },
    handleCompleteButton(index) {
      const data = this.storageData.filter(v => v.yearMonth !== this.selectedMonth)
      data.push({
          yearMonth: this.selectedMonth,
          data: this.data,
        })
      this.$localStorage.set('data', data)
      this.editKey = index
    },
    initTempData() {
      this.tempIncome = ''
      this.tempSpend = ''
      this.tempMemo  = ''
    },
    isEdit(key) {
      return key !== this.editKey
    },
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
  width: 20%;
  font-size: 18px;
}
.buttons {
  width: 10%;
}
</style>