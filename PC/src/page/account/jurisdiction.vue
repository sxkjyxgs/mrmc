<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号角色与权限管理</el-breadcrumb-item>
      </el-breadcrumb>


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
              fixed="right"
              label="操作"
              width="200">
              <template scope="scope">
                <el-button type="text" size="small">权限分配</el-button>
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="block">
          <el-pagination page-size='5'
            layout="prev, pager, next"
            :total="20">
          </el-pagination>
        </div>
      </div>

      <div class="add_account">
        <div class="add_title">添加账号角色</div>
        <div class="add_name">
          <el-input  placeholder="填写角色名称"></el-input>
        </div>
        <div class="add_distribution">
          <i class="permission_url" @click="DisplayBlock">权限分配</i>
        </div>
        <el-button type="primary" size="large">确认添加</el-button>
      </div>
    </div>
    <div class="mask"></div>
    <div class="assign_role_permissions">
      <div class="assign_role_permissions_title">分配角色权限</div>
      <dl>
        <dt><el-checkbox label="商品管理" name="type"></el-checkbox></dt>
        <dd><el-checkbox label="商品分类管理" name="type"></el-checkbox></dd>
        <dd><el-checkbox label="商品品牌管理" name="type"></el-checkbox></dd>
        <dd><el-checkbox label="商品标签管理" name="type"></el-checkbox></dd>
      </dl>
      <dl>
        <dt><el-checkbox label="后台账号管理" name="type"></el-checkbox></dt>
        <dd><el-checkbox label="添加后台账号" name="type"></el-checkbox></dd>
        <dd><el-checkbox label="后台权限管理" name="type"></el-checkbox></dd>
        <dd><el-checkbox label="管理后台账号" name="type"></el-checkbox></dd>
      </dl>
      <div class="assign_role_permissions_btn">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>

<style>
  #box{
    position: relative;
  }
  .add_account{
    width: 100%;
    height: 200px;
    text-align: center;
    border-top: 1px solid #c4c4c4;
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
  .add_distribution i{
    text-decoration: none;
    cursor: pointer;
    color: #ff3366;
  }
  .el-button{
    margin: auto;
  }
  .distribution{
    width: 100%;
    height: auto;
    padding-bottom: 50px;
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
    margin: 50px 10% 0 0;
  }
  .assign_role_permissions{
    width: 300px;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -180px;
    z-index: 9999;
    text-align: center;
    display: none;
  }
  .assign_role_permissions_title{
    font-size: 16px;
    font-weight: bold;
    color: #303030;
    text-align: center;
    line-height: 32px;
    border-bottom: 1px solid #303030;
  }
  .assign_role_permissions dl{
    margin-top: 20px;
  }
  .assign_role_permissions dl dt{
    padding-left: 15%;
    height: 28px;
    text-align: left;
  }
  .assign_role_permissions dl dd{
    padding-left: 30%;
    height: 28px;
    text-align: left;
  }
  .assign_role_permissions_btn{
    margin: 0 auto;
    margin-top: 20px;
  }
</style>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(Element)
  export default {
    methods: {
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.assign_role_permissions').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.assign_role_permissions').css('display','none');
      }
    },
    data() {
      return {
        tableData: [{
          name: '2016-05-02',
          jurisdiction: '王小虎'
        }, {
          name: '2016-05-04',
          jurisdiction: '王小虎'
        }, {
          name: '2016-05-01',
          jurisdiction: '王小虎'
        }, {
          name: '2016-05-03',
          jurisdiction: '王小虎'
        }]
      }
    }
  }
</script>
