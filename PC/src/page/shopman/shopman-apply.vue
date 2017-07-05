<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">店主管理</el-breadcrumb-item>
        <el-breadcrumb-item>店主申请管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="apply_">
        <div class="apply_title">店主申请管理</div>
        <div class="apply_condition">
          <div class="apply_time">
            申请时间：
            <div class="block">
              <el-date-picker
                v-model="value6"
                type="daterange"
                placeholder="选择日期范围">
              </el-date-picker>
            </div>
          </div>
          <div class="apply_information">
            申请信息：
            <select name="">
              <option value="">全部</option>
              <option value="">升级到个人店主</option>
              <option value="">升级到高级店主</option>
              <option value="">升级到公司店主</option>
            </select>
            <input type="text" value="根据账号查找" />
            <a href="#" class="apply_search_btn">搜索</a>
          </div>
        </div>

        <div class="apply_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="apply_time"
              label="申请时间">
            </el-table-column>
            <el-table-column
              prop="apply_account"
              label="申请账号">
            </el-table-column>
            <el-table-column
              prop="current_level"
              label="当前级别">
            </el-table-column>
            <el-table-column
              prop="accumulated_sales"
              label="累计销售金">
            </el-table-column>
            <el-table-column
              prop="subordinate_team"
              label="所属团队">
            </el-table-column>
            <el-table-column
              prop="inpofmation_detail"
              label="申请信息详情">
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

<style>
  .apply_{
    width: 100%;
    min-height: 500px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  }

  .apply_title{
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    margin-top: 20px;
  }

  .apply_condition{
    padding: 0 10% 50px 10%;
  }

  .apply_time{
    float: left;
    line-height: 32px;
    margin-right: 10px;
  }

  .apply_time .block{
    float: right;
  }

  .apply_information{
    float: right;
    line-height: 32px;
  }

  .apply_information select{
    height: 36px;
    margin-left: 10px;
  }

  .apply_information input{
    height: 32px;
    margin-left: 10px;
  }

  .apply_search_btn{
    padding: 8px 18px;
    border-radius: 3px;
    background: #1E9FFF;
    color: #FFFFFF;
    margin-left: 10px;
  }

  .apply_search_btn:hover{
    background: #178FE5;
    color: #FFFFFF;
    text-decoration: none;
  }

  .apply_form{
    width: 80%;
    margin-left: 10%;
  }

  .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }

  .apply_form table tr td{
    text-align: center;
  }

  .apply_form table tr th{
    text-align: center;
  }

  .table tr td a{
    color: #303030;
    margin: 0 5px;
  }
</style>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
          }, {
            text: '最近一个月',
              onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
              onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
          },
          value6: '',
          value7: '',

        tableData: [{
          apply_time: '2016-05-02',
          apply_account: '王小虎',
          current_level: '上海市普陀区金沙江路 1518 弄',
          accumulated_sales: '100',
          subordinate_team: '上行',
          inpofmation_detail: '好',
          operation: '好'
        }, {
          apply_time: '2016-05-02',
          apply_account: '王小虎',
          current_level: '上海市普陀区金沙江路 1518 弄',
          accumulated_sales: '100',
          subordinate_team: '上行',
          inpofmation_detail: '好',
          operation: '好'
        }, {
          apply_time: '2016-05-02',
          apply_account: '王小虎',
          current_level: '上海市普陀区金沙江路 1518 弄',
          accumulated_sales: '100',
          subordinate_team: '上行',
          inpofmation_detail: '好',
          operation: '好'
        }, {
          apply_time: '2016-05-02',
          apply_account: '王小虎',
          current_level: '上海市普陀区金沙江路 1518 弄',
          accumulated_sales: '100',
          subordinate_team: '上行',
          inpofmation_detail: '好',
          operation: '好'
        }]
      }
    }
  }


</script>
