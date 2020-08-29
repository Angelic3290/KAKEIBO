<template>
  <div class="wrapper">
    <el-table
      :data="monthlyData"
      style="width: 100%;"
      align="center"
      border
    >
      <el-table-column
        prop="monday"
        label="月"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tuesday"
        label="火"
        width="180">
      </el-table-column>
      <el-table-column
        prop="wednesday"
        label="水">
      </el-table-column>
      <el-table-column
        prop="thursday"
        label="木"
        width="180">
      </el-table-column>
      <el-table-column
        prop="friday"
        label="金"
        width="180">
      </el-table-column>
      <el-table-column
        prop="saturday"
        label="土">
      </el-table-column>
      <el-table-column
        prop="sunday"
        label="日">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import 'normalize.css'
export default {
  data () {
    return {
      monthlyData: [{
          monday: '￥1200',
          tuesday: '￥1200',
          wednesday: '￥1200',
          thursday: '￥1200',
          friday: '￥1200',
          saturday: '￥1200',
          sunday: '￥1200',
        },
        {
          monday: '￥1200',
          tuesday: '￥1200',
          wednesday: '￥1200',
          thursday: '￥1200',
          friday: '￥1200',
          saturday: '￥1200',
          sunday: '￥1200',
        },
        {
          monday: '￥1200',
          tuesday: '￥1200',
          wednesday: '￥1200',
          thursday: '￥1200',
          friday: '￥1200',
          saturday: '￥1200',
          sunday: '￥1200',
        },
        {
          monday: '￥1200',
          tuesday: '￥1200',
          wednesday: '￥1200',
          thursday: '￥1200',
          friday: '￥1200',
          saturday: '￥1200',
          sunday: '￥1200',
        },]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
}
</style>