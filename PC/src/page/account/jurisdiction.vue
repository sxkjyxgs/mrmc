<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>后台账号管理</el-breadcrumb-item>
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
              prop="role"
              label="角色"
              :span="2"
            >
            </el-table-column>
            <el-table-column
              prop="jurisdiction"
              label="角色现有权限"
              :span="6"
            >
            </el-table-column>
            <el-table-column
              :span="4"
              label="操作"
            >
              <template scope="scope">
                <el-button type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="tableData.length"
            :page-size="2"
            @current-change="handleCurrentChange"
          >
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
        <el-button type="primary" @click="open2">确认添加</el-button>
      </div>
    </div>
    <div class="mask"></div>
    <div class="assign_role_permissions">
      <div class="assign_role_permissions_title">分配角色权限</div>
      <div class="checkbox_box">
        <div class="assign_checkbox">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">后台账号管理</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedjurisdictions" @change="handleCheckedjurisdictionsChange">
            <el-checkbox v-for="jurisdiction in jurisdictions" :label="jurisdiction" :key="jurisdiction">{{jurisdiction}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

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
    width: 600px;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -330px;
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
  .assign_role_permissions_btn{
    margin: 0 auto;
    margin-top: 20px;
  }
  .checkbox_box{
    overflow: hidden;
  }
  .assign_checkbox{
    width: 50%;
    float: left;
  }
  .assign_checkbox .el-checkbox{
    display: block;
    text-align: left;
    padding-left: 10%;
    box-sizing: border-box;
    margin: 0;
  }

  .assign_checkbox .el-checkbox-group{
    padding-left: 15%;
    box-sizing: border-box;
  }
</style>

<script>
  const jurisdictionOptions = ['后台权限管理', '后台账号管理', '后台账号操作记录'];
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(Element)
  export default {

    methods: {
      open2() {
        this.$confirm('此操作将添加账号角色, 是否继续?', '提示', {
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
      handleCurrentChange(val) {
        this.tableDatas=[];
        for(var i=2*(val-1);i<2*val;i++){
            this.tableDatas.push(this.tableData[i]);
        }
      },
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.assign_role_permissions').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.assign_role_permissions').css('display','none');
      },

      handleCheckAllChange(event) {
        this.checkedjurisdictions = event.target.checked ? jurisdictionOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedjurisdictionsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.jurisdictions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.jurisdictions.length;
      }
    },
    data() {
      return {
        currentPage: 1,
        tableData: [{
          role: '店长',
          jurisdiction: '商品管理'
        }, {
          role: '店员',
          jurisdiction: '商品管理'
        }, {
          role: '店长',
          jurisdiction: '商品管理'
        }],
        checkAll: true,
        jurisdictions: jurisdictionOptions,
        isIndeterminate: true
      }
    }

  }
</script>
