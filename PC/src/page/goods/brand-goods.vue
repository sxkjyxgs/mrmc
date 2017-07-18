<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">业务管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品品牌</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="brand_">
        <div class="brand_title mid">
          商品品牌列表
        </div>
        <el-button type="success" @click="DisplayBlock">添加商品品牌</el-button>
        <div class="brand_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="brand_logo"
              label="品牌logo">
            </el-table-column>
            <el-table-column
              prop="brand_name"
              label="品牌名称">
            </el-table-column>
            <el-table-column
              prop="brand_introduction"
              label="品牌介绍">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="mask"></div>
    <div class="add_commodity_brand">
      <div class="add_commodity_brands_title">添加商品品牌</div>
      <div class="brand_logo">
        <div class="brand_logo_title">品牌logo</div>
        <div class="brand_logo_img">

        </div>
      </div>
      <div class="brand_name">
        <div class="brand_name_title">品牌名称</div>
        <el-input></el-input>
      </div>
      <div class="brand_introduce">
        <div class="brand_introduce_title">品牌介绍</div>
        <el-input
          type="textarea"
          :rows="2"
          v-model="textarea">
        </el-input>
      </div>
      <div class="add_commodity_brand_btn">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">确认</el-button>
      </div>
    </div>
  </div>
</template>

<style>
  .brand_{
    width: 100%;
    min-height: 500px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  }
  .brand_title{
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    margin-top: 20px;
  }
  .brand_ button{
    float: right;
    margin: 50px 10% 20px 0;
  }
  .brand_form{
    width: 80%;
    margin-left: 10%;
  }
  .brand_form table tr td{
    text-align: center;
  }
  .brand_form table tr th{
    text-align: center;
  }
  .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }
  .table tr td:nth-child(4){
    width: 35%;
  }
  .brand_operate_btn a{
    margin: 0 5px;
    color: #303030;
  }
  .add_commodity_brand{
    width: 500px;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -280px;
    z-index: 999;
    text-align: center;
    display: none;
  }
  .add_commodity_brands_title{
    font-size: 16px;
    line-height: 32px;
    color: #303030;
    text-align: center;
    font-weight: bold;
  }
  .brand_logo,.brand_name,.brand_introduce{
    width: 70%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 20px;
  }
  .brand_logo_title,.brand_name_title,.brand_introduce_title{
    float: left;
    line-height: 36px;
  }
  .brand_logo_img{
    width: 200px;
    height: 120px;
    background: #cccccc;
    float: left;
    margin-left: 20px;
  }
  .brand_name .el-input{
    width: 75%;
    float: left;
    margin-left: 20px;
  }
  .brand_introduce .el-textarea{
    width: 75%;
    float: left;
    margin-left: 20px;
  }
  .add_commodity_brand_btn{
    overflow: hidden;
    margin: 0 auto;
    margin-top: 30px;
  }
  .add_commodity_brand_btn .el-button:nth-child(1){
    float: left;
    margin-left: 30%;
  }
  .add_commodity_brand_btn .el-button:nth-child(2){
    float: right;
    margin-right: 30%;
  }
</style>

<script>
  export default {
    methods: {
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.add_commodity_brand').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.add_commodity_brand').css('display','none');
      }
    },
    data() {
      return {
        tableData: [{
          brand_logo: '品牌logo',
          brand_name: '品牌名称',
          brand_introduction: '品牌介绍',
          operation: '操作'
        }, {
          brand_logo: '品牌logo',
          brand_name: '品牌名称',
          brand_introduction: '品牌介绍',
          operation: '操作'
        }, {
          brand_logo: '品牌logo',
          brand_name: '品牌名称',
          brand_introduction: '品牌介绍',
          operation: '操作'
        }, {
          brand_logo: '品牌logo',
          brand_name: '品牌名称',
          brand_introduction: '品牌介绍',
          operation: '操作'
        }]
      }
    }
  }
</script>
