<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>后台账号管理</el-breadcrumb-item>
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
              :span='3'>
            </el-table-column>
            <el-table-column
              prop="add_time"
              label="添加时间"
              :span='3'>
            </el-table-column>
            <el-table-column
              prop="add_person"
              label="添加人"
              :span='3'
              >
            </el-table-column>
            <el-table-column
              prop="role"
              :span='3'
              label="角色">
            </el-table-column>
            <el-table-column label="操作" fixed="right" :span='3'>
              <template scope="scope">
                <el-button type="text" size="small" @click="DisplayBlock2">修改密码</el-button>
                <el-button type="text" size="small" @click="DisplayBlock">分配角色</el-button>
                <el-button type="text" size="small" @click="open3()">注销账号</el-button>
              </template>
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
          <div class="login_account_title">登录账号：</div><el-input  placeholder="登录账号"></el-input>
        </div>
        <div class="login_password">
          <div class="login_password_title">登录密码：</div><el-input  placeholder="登录密码"></el-input>
        </div>
        <p><el-button type="text" @click="DisplayBlock">分配角色</el-button></p>
        <el-button type="primary" @click="open2">确认</el-button>
        <div class="current_tip">已存在的账号，添加失败</div>
      </div>
    </div>
    <div class="mask"></div>

    <div class="assign_roles popup">
      <div class="assign_roles_title popup_title">分配角色</div>
      <ul>
        <li><el-checkbox label="主管理员" name="type"></el-checkbox></li>
        <li><el-checkbox label="客服" name="type"></el-checkbox></li>
        <li><el-checkbox label="管理员" name="type"></el-checkbox></li>
      </ul>
      <div class="assign_role_btn">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>

    <div class="popup change_password">
      <div class="popup_title">修改密码</div>
      <div class="popup_form">
        <div class="popup_form_title">新密码</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>

      <div class="popup_btn">
        <el-button @click="DisplayNone2">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>

<style>
  .popup_form{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  .popup_form_title{
    width: 25%;
    float: left;
    line-height: 36px;
  }
  .popup_form .el-input{
    width: 70%;
    float: left;
  }
  .popup_form .el-textarea{
    width: 70%;
    float: left;
  }
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
    width: 40%;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  .login_account_title,.login_password_title{
    width: 25%;
    float: left;
    line-height: 36px;
  }
  .login_account .el-input,.login_password .el-input{
    width: 70%;
    float: left;
  }
  .add_background_account p{
    width: 500px;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 10px;
    line-height: 30px;
    text-align: left;
    box-sizing: border-box;
  }
  .add_background_account p .el-button--text span{
    font-size: 16px;
    line-height: 32px;
  }
  .add_background_account .el-button{
    margin: 0 auto;
  }
  .current_tip{
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: red;
    /*display: none;*/
  }
  .assign_roles ul{
    margin-top: 20px;
  }
  .assign_roles ul li{
    width: 25%;
    height: 28px;
    text-align: left;
    margin: 0 auto;
  }
  .assign_role_btn{
    margin: 0 auto;
    margin-top: 20px;
  }
  .assign_role_btn .el-button:nth-child(1){
    float: left;
    margin-left: 20%;
  }
  .assign_role_btn .el-button:nth-child(2){
    float: right;
    margin-right: 20%;
  }
</style>

<script>
  export default {
    methods: {
      open2() {
        this.$confirm('此操作将添加后台账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });
        });
      },
      open3() {
        this.$confirm('此操作将注销账号, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注销成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销'
          });
        });
      },

      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.assign_roles').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.assign_roles').css('display','none');
      },
      DisplayBlock2:function(){
        $('.mask').css('display','block');
        $('.change_password').css('display','block');
      },

      DisplayNone2:function(){
        $('.mask').css('display','none');
        $('.change_password').css('display','none');
      }
    },
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
