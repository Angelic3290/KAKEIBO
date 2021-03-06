import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MonthlyReport from '@/components/MonthlyReport'
import DailyReportInput from '@/components/DailyReportInput'
import TotalAnalyze from '@/components/TotalAnalyze'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hoge',
      name: 'MonthlyReport',
      component: MonthlyReport
    },
    {
      path: '/dailyInput',
      name: 'dailyInput',
      component: DailyReportInput
    },
    {
      path: '/totalAnalyze',
      name: 'totalAnalyze',
      component: TotalAnalyze
    }
  ]
})
