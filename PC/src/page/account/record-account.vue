<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>后台账号操作记录</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="operation_record_list">
        <div class="operation_record mid">后台账号操作记录</div>

        <div class="operation_record_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="时间">
            </el-table-column>
            <el-table-column
              prop="account"
              label="账号">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作">
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  html,body{
    font-size: 14px;
    font-family: "微软雅黑";
  }

  i{
    font-style: normal;
  }

  .box{
    width: 100%;
    height: 100%;
    min-height: 600px;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .operation_record_list{
    width: 100%;
    margin-top: 30px;
  }

  .mid{
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    margin-top: 10px;
  }

  .operation_record_form{
    width: 80%;
    margin-left: 10%;
  }

  .operation_record_form table tr th{
    text-align: center;
  }

  .operation_record_form table tr td{
    text-align: center;
  }

  .operation_record_form .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }
</style>

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
