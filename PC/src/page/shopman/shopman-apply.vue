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
            申请时间：时间插件
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
              prop="current_level"
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
    border: 1px solid #303030;
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
    width: 100%;
    padding: 0 10% 50px 10%;
  }

  .apply_time{
    float: left;
    line-height: 32px;
    margin-right: 10px;
  }

  .apply_information{
    float: right;
    line-height: 32px;
  }

  .apply_information select{
    height: 32px;
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
    width: 100%;
    padding: 0 10% 50px 10%;
  }

  .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }

  .table tr td a{
    color: #303030;
    margin: 0 5px;
  }
</style>
