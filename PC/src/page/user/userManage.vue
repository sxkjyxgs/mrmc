<template>
  <div class="userManage">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">用户信息处理</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息查看</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="contents">
        <div class="item1">
          <div class="left">用户信息查看</div>
          <div class="right"><el-button type="success" icon="icon-plus">添加普通用户</el-button></div>
        </div>
        <div class="item2">
          <el-table :data="tableData"  border style="width: 100%">
            <el-table-column prop="username" label="账号（手机号）"  width="180" align="center" header-align="center"></el-table-column>
            <el-table-column prop="restime" label="注册时间" align="center" width="180" header-align="center"></el-table-column>
            <el-table-column prop="logintime" label="上次登录时间"  align="center"  width="180" header-align="center"></el-table-column>
            <el-table-column prop="UserType" label="用户层级"  align="center" width="180" header-align="center"></el-table-column>
            <el-table-column prop="number" label="下单总数"  align="center" width="180"  header-align="center"></el-table-column>
            <el-table-column prop="money" label="下单总额" align="center" width="180"  header-align="center"></el-table-column>
            <el-table-column prop="moneys" label="用户当前奖励金"align="center" header-align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content">
        <div class="titles">
          添加普通用户
        </div>
        <div class="dange">谨慎操作，如此添加用户，用户不需注册即可直接用账号密码登录app。</div>
        <div class="form">
          <el-form  label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号:" prop="resname">
              <el-input  placeholder="未注册的手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="pass">
              <el-input type="password"  placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button>取消</el-button>
              <el-button type="primary" class="right" style="margin-right: 50px;">重置</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Element)
  export default {
    name: 'userManage',
    data() {
      return {
        tableData: [{
          username:'17696018825',
          restime:'2016-05-20  20:50',
          logintime:'2016-05-20  20:50',
          UserType:'普通用户',
          number:'123',
          money:'￥123.00',
          moneys:'142.00'
        },
          {
            username:'17696018825',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'个人店主',
            number:'123',
            money:'￥123.00',
            moneys:'142.00'
          },
          {
            username:'17696018825',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'普通用户',
            number:'123',
            money:'￥123.00',
            moneys:'142.00'
          },
          {
            username:'17696018825',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'普通用户',
            number:'123',
            money:'￥123.00',
            moneys:'142.00'
          }
        ]
      }
    }
  }

</script>
<style>
  .contents{
    margin-top: 30px;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .item2{
    padding:20px;
    box-sizing: border-box;
  }
  .broad{
    margin-bottom:30px;
  }
  .item1{
    padding:20px;
  }
  .dange{
    padding:20px 20px 0 20px;
  }
</style>
