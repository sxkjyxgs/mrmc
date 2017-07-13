<template>
  <div class="userManage">
    <div class="box">
      <div class="broad">其他服务>>运费模板</div>
      <div class="contents">
        <div class="titlee" style="border:0;">
          运费模板
        </div>
        <div class="item1">
          <div class="right"><el-button type="success" icon="icon-plus">添加运费模板</el-button></div>
        </div>
        <div class="item2">
          <el-table
            border
            style="width: 100%">
            <el-table-column
              label="序号">
            </el-table-column>
            <el-table-column
              label="模板名称">
            </el-table-column>
            <el-table-column
              label="默认运费">
            </el-table-column>
            <el-table-column
              label="地址">
            </el-table-column>
            <el-table-column
              label="免邮设置">
            </el-table-column>
            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="add_user" >
        <div class="titles">
          添加运费模板
        </div>

          <el-form  label-width="100px" class="demo-ruleForm" style="padding-top:30px;">
            <el-form-item label="模板名称" prop="resname">
              <el-input  ></el-input>
            </el-form-item>
            <el-form-item label="默认运费（元）" prop="pass">
              <el-input  type="number" placeholder="输入数字（仅限数字）"></el-input>
            </el-form-item>
              <el-button type="primary">添加费默认运费地区</el-button>
            <div>
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="non_default_area"
                  label="非默认运费地区">
                </el-table-column>
                <el-table-column
                  prop="freight"
                  label="运费">
                </el-table-column>
                <el-table-column
                  prop="operation"
                  label="操作">
                </el-table-column>
              </el-table>
            </div>
            <div class="free_setting">
              <div class="free_setting_left">免邮设置<el-radio class="radio"  label="1" name="yes">不免邮</el-radio></div>
              <div class="free_setting_right"><el-radio class="radio" label="2" >订单满额免邮</el-radio><el-input  placeholder="免邮金额"></el-input></div>
            </div>

            <div class="bill_demo_btn">
              <el-button>取消</el-button>
              <el-button type="primary">添加</el-button>
            </div>
          </el-form>




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
          non_default_area:'1',
          freight:'2016-05-20  20:50',
          operation:'修改  删除'
        },
          {
            non_default_area:'2',
            freight:'2016-05-20  20:50',
            operation:'修改  删除'
          },
          {
            non_default_area:'3',
            freight:'2016-05-20  20:50',
            operation:'修改  删除'
          }
        ]
      }
    }
  }

</script>
<style>
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

  .add_user{
    margin: 100px auto 0;
    overflow: hidden;
    width:600px;
    border:1px solid #ff3366;
    border-radius: 7px;
  }

  .add_user_title{
    width: 100%;
    height: 60px;
    font-size: 16px;
    background: #ffffff;
    line-height: 60px;
    text-align: center;
    color: #303030;
  }

  .form{
    text-align: center;
  }

  .el-form{
    width: 80%;
    display: block;
    margin:auto!important;
  }

  .el-form .el-button{
    float: right;
    margin-bottom: 30px;
  }

  table tr td{
    text-align: center !important;
  }

  table tr th{
    text-align: center !important;
  }

  .free_setting{
    overflow: hidden;
  }

  .free_setting_left{
    width: 50%;
    float: left;
    line-height: 32px;
    margin-top: 30px;
  }

  .free_setting_left .el-radio{

    margin-left: 10%;
  }

  .free_setting_right{
    width: 45%;
    float: right;
    padding-left: 5%;
    line-height: 32px;
    margin-top: 30px;
  }

  .free_setting_right .el-input{
    width: 100px;
    float: right;
  }

  .bill_demo_btn{
    width: 100%;
    height: auto;
    margin-top: 30px;
    overflow: hidden;
  }

  .bill_demo_btn .el-button:nth-child(1){
    float: left;
    margin-left: 30%;
  }

  .bill_demo_btn .el-button:nth-child(2){
    float: right;
    margin-right: 30%;
  }
</style>
