<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">店主管理</el-breadcrumb-item>
        <el-breadcrumb-item>店主管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="apply_">
        <div class="titlee" style="border:0;">店主列表</div>
        <div class="apply_condition">
          <div class="apply_time">

            <div class="block">
              <el-button type="success" @click="DisplayBlock">添加无团队店主</el-button>
            </div>
          </div>
          <div class="apply_information">
            筛选：
            <select name="">
              <option value="">全部</option>
              <option value="">有团队店主</option>
              <option value="">无团队店主</option>
            </select>

            <input type="text" placeholder="输入账号（手机号）查找店主" style="padding:0 10px;" />
            <el-button type="success">查找</el-button>
          </div>
        </div>

        <div class="apply_form">
          <el-table
            border
            style="width: 100%">
            <el-table-column
              label="何时升级到此级别店主">
            </el-table-column>
            <el-table-column
              label="店主级别">
            </el-table-column>
            <el-table-column
              label="账号">
            </el-table-column>
            <el-table-column
              label="所属团队--团长账号">
            </el-table-column>
            <el-table-column
              label="累计销售金额">
            </el-table-column>
            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
    <div class="mask"></div>
    <div class="add_shopman">
      <div class="add_shopman_title">添加店主</div>
      <div class="add_shopman_btns">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">修改</el-button>
      </div>
    </div>
  </div>
</template>

<style>
  .add_shopman{
    width: 500px;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    left: 50%;
    margin-left: -280px;
    top: 100px;
    text-align: center;
    z-index: 999;
  }
  .add_shopman_title{
    font-size: 16px;
    color: #303030;
    font-weight: bold;
    line-height: 32px;
  }
  .add_shopman_btns{
    margin: 0 auto;
    margin-top: 40px;
  }
  .add_shopman_btns .el-button:nth-child(1){
    float: left;
    margin-left: 25%;
  }
  .add_shopman_btns .el-button:nth-child(2){
    float: right;
    margin-right: 25%;
  }
</style>

<script>
  export default{
    methods: {
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.add_shopman').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.add_shopman').css('display','none');
      }
    }
  }
</script>


