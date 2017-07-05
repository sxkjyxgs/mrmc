<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号角色与权限管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="add_account">
        <div class="add_title">添加账号角色</div>
        <div class="add_name">
          <el-input v-model="input" placeholder="填写角色名称"></el-input>
        </div>
        <div class="add_distribution">
          <a href="#" class="permission_url">权限分配</a>
        </div>
        <el-button type="primary" size="small">确认添加</el-button>
      </div>
      <div class="distribution">
        <div class="distribution_title">
          分配角色权限
        </div>
        <div class="distribution_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="name"
              label="角色名">
            </el-table-column>
            <el-table-column
              prop="jurisdiction"
              label="角色现有权限">
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
    <!--<div class="box2">-->
      <!--<div class="permission_assignment">-->
        <!--<div class="permission_assignment_title">分配角色权限</div>-->
        <!--<dl>-->
          <!--<dt><input type="checkbox" value="商品管理" />商品管理</dt>-->
          <!--<dd><input type="checkbox" value="商品分类管理" />商品分类管理</dd>-->
          <!--<dd><input type="checkbox" value="商品品牌管理" />商品品牌管理</dd>-->
          <!--<dd><input type="checkbox" value="商品标签管理" />商品标签管理</dd>-->
        <!--</dl>-->
        <!--<dl>-->
          <!--<dt><input type="checkbox" value="后台账号管理" />后台账号管理</dt>-->
          <!--<dd><input type="checkbox" value="添加后台账号" />添加后台账号</dd>-->
          <!--<dd><input type="checkbox" value="后台权限管理" />后台权限管理</dd>-->
          <!--<dd><input type="checkbox" value="管理后台账号" />管理后台账号</dd>-->
        <!--</dl>-->
        <!--<div class="permission_btn">-->
          <!--<div class="permission_cancel">取消</div>-->
          <!--<div class="permission_confirm">确认</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<style>
  #box{
    position: relative;
  }
  .add_account{
    width: 100%;
    height: 200px;
    margin-top: 30px;
    text-align: center;
  }

  .add_title,.add_name,.add_distribution{
    width: 100%;
    padding: 0 40%;
    box-sizing: border-box;
  }

  .add_title{
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    margin-top: 20px;
  }

  .add_name{
    width: 100%;
    height: 36px;
    overflow: hidden;
  }

  .add_name input{
    width: 100%;
    height: 30px;
    font-size: 14px;
  }

  .add_distribution{
    text-align: left;
    line-height: 48px;
    font-size: 14px;
  }

  .add_distribution a{
    color: #303030;
    text-decoration: none;
  }

  .el-button{
    margin: auto;
  }

  .distribution{
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin-top: 50px;
  }

  .distribution_title{
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    margin-top: 20px;
  }

  .distribution_form{
    width: 80%;
    margin: 0 10%;
  }

  .distribution_form table tr td{
    text-align: center;
  }

  .distribution_form table tr th{
    text-align: center;
  }

  .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }

  .operation a{
    color: #303030;
  }

  .operation a:hover{
    text-decoration: underline;
    color: #303030;
  }

  .operation a:first-child{
    margin-right: 5px;
  }

  .el-pagination {
    float: right;
    margin: 50px 10% 50px 0;
  }

  .box2{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    display: none;
  }

  .box2 .permission_assignment{
    width: 300px;
    height: 500px;
    background: #FFFFFF;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -300px;
  }

  .permission_assignment_title{
    font-size: 16px;
    line-height: 60px;
    margin-top: 10px;
    text-align: center;
    border-bottom: 2px solid #303030;
  }

  .permission_assignment dl{
    width: 70%;
    margin-left: 20%;
    margin-top: 20%;
  }

  .permission_btn{
    width: 100%;
    height: 30px;
    overflow: hidden;
    position: relative;
    top: 60px;
  }

  .permission_cancel,.permission_confirm{
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    float: left;
    cursor: pointer;
  }

  .permission_cancel{
    background: #838383;
    float: left;
    margin-left: 20px;
  }

  .permission_confirm{
    background: #1E9FFF;
    float: right;
    margin-right: 20px;
  }

  .permission_confirm:hover{
    background: #178FE5;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '2016-05-02',
          jurisdiction: '王小虎',
          operation: '上海市普陀区金沙江路 1518 弄'
        }, {
          name: '2016-05-04',
          jurisdiction: '王小虎',
          operation: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '2016-05-01',
          jurisdiction: '王小虎',
          operation: '上海市普陀区金沙江路 1519 弄'
        }, {
          name: '2016-05-03',
          jurisdiction: '王小虎',
          operation: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
