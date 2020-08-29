import Vue from 'vue'
import Router from 'vue-router'
import MonthlyReport from '@/components/MonthlyReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hoge',
      name: 'MonthlyReport',
      component: MonthlyReport
    }
  ]
})
