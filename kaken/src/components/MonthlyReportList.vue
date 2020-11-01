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
        <p class="memo">
          メモ
        </p>
        <p class="buttons">
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
        <div class="memo">
          <p v-if="isEdit(index)">
        　  {{ item.memo }}
          </p>
          <el-input v-else placeholder="Please input" style="width:100%" v-model="tempMemo"></el-input>
        </div>
        <div class="buttons">
          <p>
            <el-button type="primary" icon="el-icon-edit" circle @click="handleEditButton(index)"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="handleCompleteButton(index)"></el-button>
          </p>
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
      data: [
        {
          date: '1/1',
          income: 12000,
          spend: 12000,
          memo: '',
        },
        {
          date: '1/2',
          income: 12000,
          spend: 12000,
          memo: '',
        },
        {
          date: '1/3',
          income: 12000,
          spend: 12000,
          memo: '',
        },
        {
          date: '1/4',
          income: 12000,
          spend: 12000,
          memo: '',
        },
        {
          date: '1/5',
          income: 12000,
          spend: 12000,
          memo: '',
        },
      ],
      editKey: '',
      tempIncome: '',
      tempSpend: '',
      tempMemo: '',
    }
  },
  computed: {
    target() {
      return moment(this.targetMonth).format('M')
    },
  },
  methods: {
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