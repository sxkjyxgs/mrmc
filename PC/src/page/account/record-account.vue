<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>后台账号操作记录</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="operation_record_list">
        <div class="operation_record title">后台账号操作记录</div>
        <div class="operation_record_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="account"
              label="账号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作">
            </el-table-column>
          </el-table>

          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          account: '王小虎',
          operation: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          account: '王小虎',
          operation: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          account: '王小虎',
          operation: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          account: '王小虎',
          operation: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style>
  .el-pagination{
    float: right;
    margin-top: 20px;
  }

  .title{
    font-style: 16px;
    text-align: center;
    line-height: 32px;
    margin: 20px 0;
  }
</style>
