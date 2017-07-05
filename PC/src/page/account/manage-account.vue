<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理后台账号</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="account_list">
        <div class="account_list_title mid">后台账号列表</div>
        <div class="distribution_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="account"
              label="账号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="add_time"
              label="添加时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="add_person"
              label="添加人">
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色">
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

      <div class="add_background_account">
        <div class="add_background_account_title mid">添加后台账号</div>
        <div class="login_account">
          登录账号：<el-input v-model="input" placeholder="登录账号"></el-input>
        </div>
        <div class="login_password">
          登录密码：<el-input v-model="input" placeholder="登录密码"></el-input>
        </div>
        <p><el-button type="text">分配角色</el-button></p>
        <el-button type="primary" size="large">大型按钮</el-button>
        <div class="current_tip">已存在的账号，添加失败</div>
      </div>
    </div>
    <!--<div class="box3">-->
      <!--<div class="assign_roles_page">-->
        <!--<div class="assign_roles_page_title">分配角色权限</div>-->
        <!--<ul>-->
          <!--<li><input type="checkbox" value="" />主管理员</li>-->
          <!--<li><input type="checkbox" value="" />客服</li>-->
          <!--<li><input type="checkbox" value="" />管理员</li>-->
        <!--</ul>-->
        <!--<div class="assign_btn">-->
          <!--<div class="assign_cancel">取消</div>-->
          <!--<div class="assign_confirm">确认</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<style>
  .box{
    width: 100%;
    height: 100%;
    min-height: 600px;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .location{
    font-size: 18px;
  }

  .location a{
    font-size: 18px;
    color: #303030;
    text-decoration: none;
  }

  .location a:hover{
    text-decoration: underline;
  }

  .account_list{
    margin-top: 30px;
    overflow: hidden;
  }

  .distribution_form{
    width: 80%;
    margin-left: 10%;
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

  .operation a:last-child{
    margin-left: 5px;
  }

  .account_list_title{
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    margin-top: 10px;
  }

  .add_background_account{
    height: auto;
    border-top: 0;
    text-align: center;
    overflow: hidden;
  }

  .add_background_account_title{
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    margin-top: 10px;
  }

  .login_account,.login_password{
    width: 500px;
    margin-left: 35%;
    font-size: 16px;
    margin-top: 30px;
    line-height: 30px;
    text-align: left;
  }

  .login_account input,.login_password input{
    width: 400px;
    height: 30px;
    padding-left: 10px;
    float: right;
  }
  .login_account .el-input{
    float: right;
  }

  .login_password .el-input{
    float: right;
  }

  .add_background_account p{
    width: 500px;
    margin-left: 35%;
    font-size: 16px;
    margin-top: 30px;
    line-height: 30px;
    text-align: left;
    box-sizing: border-box;
  }

  .add_background_account p .el-button--text span{
    font-size: 16px;
    line-height: 32px;
  }

  .add_confirm_btn{
    width: 500px;
    height: 30px;
    text-align: center;
    color: #FFFFFF;
    background: #1E9FFF;
    margin-left: 35%;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
  }

  .add_confirm_btn:hover{
    background: #178FE5;
  }

  .current_tip{
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: red;
    /*display: none;*/
  }

  /*.box3{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*background: rgba(0,0,0,0.5);*/
    /*display: none;*/
  /*}*/

  /*.box3 .assign_roles_page{*/
    /*width: 300px;*/
    /*height: 350px;*/
    /*background: #FFFFFF;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
    /*margin-left: -150px;*/
    /*margin-top: -300px;*/
  /*}*/

  /*.assign_roles_page_title{*/
    /*font-size: 16px;*/
    /*line-height: 60px;*/
    /*margin-top: 10px;*/
    /*text-align: center;*/
  /*}*/

  /*.assign_roles_page ul{*/
    /*overflow: hidden;*/
    /*margin-top: 40px;*/
  /*}*/

  /*.assign_roles_page ul li{*/
    /*list-style: none;*/
    /*line-height: 30px;*/
    /*padding-left: 70px;*/
  /*}*/

  /*.assign_btn{*/
    /*width: 100%;*/
    /*height: 30px;*/
    /*overflow: hidden;*/
    /*position: relative;*/
    /*top: 80px;*/
  /*}*/

  /*.assign_cancel,.assign_confirm{*/
    /*width: 100px;*/
    /*height: 30px;*/
    /*text-align: center;*/
    /*line-height: 30px;*/
    /*float: left;*/
    /*cursor: pointer;*/
  /*}*/

  /*.assign_cancel{*/
    /*background: #838383;*/
    /*float: left;*/
    /*margin-left: 20px;*/
  /*}*/

  /*.assign_confirm{*/
    /*background: #1E9FFF;*/
    /*float: right;*/
    /*margin-right: 20px;*/
  /*}*/

  /*.assign_confirm:hover{*/
    /*background: #178FE5;*/
  /*}*/

</style>

<script>
  export default {
    data() {
    return {
      tableData: [{
        account: '账号',
        add_time:'添加时间',
        add_person: '添加人',
        role: '角色',
        operation: '操作'
      }, {
        account: '账号',
        add_time:'添加时间',
        add_person: '添加人',
        role: '角色',
        operation: '操作'
      }, {
        account: '账号',
        add_time:'添加时间',
        add_person: '添加人',
        role: '角色',
        operation: '操作'
      }, {
        account: '账号',
        add_time:'添加时间',
        add_person: '添加人',
        role: '角色',
        operation: '操作'
      }]
    }
  }
  }
</script>
