<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">店主管理</el-breadcrumb-item>
        <el-breadcrumb-item>提成管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="commission_">
        <div class="commission_title">系统默认店主提成</div>
        <div class="commission_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="owner_class"
              label="店主级别">
            </el-table-column>
            <el-table-column
              prop="royalty"
              label="级别提成">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作">
            </el-table-column>
          </el-table>
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
        owner_class: '2016-05-02',
        royalty: '王小虎',
        operation: '上海市普陀区金沙江路 1518 弄'
      }, {
        owner_class: '2016-05-02',
        royalty: '王小虎',
        operation: '上海市普陀区金沙江路 1518 弄'
      }, {
        owner_class: '2016-05-02',
        royalty: '王小虎',
        operation: '上海市普陀区金沙江路 1518 弄'
      }, {
        owner_class: '2016-05-02',
        royalty: '王小虎',
        operation: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
  }
</script>

<style>
  .commission_{
    width: 100%;
    min-height: 500px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  }

  .commission_title{
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    margin-top: 20px;
  }

  .commission_form{
    width: 80%;
    margin-left: 10%;
  }

  .commission_form table tr th{
    text-align: center;
  }

  .commission_form table tr td{
    text-align: center;
  }

  .table tr td{
    text-align: center;
    border-color: #303030 !important;
    width: 33%;
  }

  .commission_operate_btn a{
    color: #ffffff;
    padding: 2px 8px;
    background: #303030;
  }

  .commission_operate_btn a:hover{
    color: #FFFFFF !important;
    text-decoration: none;
  }
</style>
