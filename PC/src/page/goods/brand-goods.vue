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
        <el-button type="primary">添加商品品牌</el-button>
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

    <!--<div class="box2">-->
      <!--<div class="add_brand_goods">-->
        <!--<div class="add_brand_goods_title">-->
          <!--添加商品品牌-->
        <!--</div>-->
        <!--<div class="brand_logo">-->
          <!--<div class="brand_logo_title">品牌logo</div>-->
        <!--</div>-->
        <!--<div class="brand_name">-->
          <!--<div class="brand_name_title">品牌名称</div>-->
          <!--<input type="text" />-->
        <!--</div>-->
        <!--<div class="brand_introduce">-->
          <!--<div class="brand_introduce_title">品牌介绍</div>-->
          <!--<textarea name="" rows="" cols=""></textarea>-->
        <!--</div>-->
        <!--<div class="add_brand_goods_btn">-->
          <!--<div class="add_brand_goods_cancel">取消</div>-->
          <!--<div class="add_brand_goods_confirm">确认</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
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

  .box2{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.5);
    display: none;
  }

  .box2 .add_brand_goods{
    width: 600px;
    height: 600px;
    background: #FFFFFF;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -300px;
  }

  .add_brand_goods_title{
    font-size: 16px;
    line-height: 60px;
    margin-top: 10px;
    text-align: center;
  }

  .brand_logo,.brand_name,.brand_introduce{
    width: 400px;
    margin-left: 100px;
    overflow: hidden;
    margin-top: 50px;
  }

  .brand_name,.brand_introduce{
    margin-top: 30px;
  }

  .brand_logo_title,.brand_name_title,.brand_introduce_title{
    float: left;
    margin-right: 50px;
    padding-left: 50px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 32px;
  }

  .brand_name input{
    line-height: 32px;
    width: 220px;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .brand_introduce textarea{
    width: 220px;
    height: 100px;
    padding: 5px;
    box-sizing: border-box;
  }

  .add_brand_goods_btn{
    width: 100%;
    height: 30px;
    overflow: hidden;
    position: relative;
    top: 60px;
  }

  .add_brand_goods_cancel,.add_brand_goods_confirm{
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    float: left;
    cursor: pointer;
  }

  .add_brand_goods_cancel{
    background: #838383;
    float: left;
    margin-left: 150px;
    color: #FFFFFF;
  }

  .add_brand_goods_confirm{
    background: #1E9FFF;
    float: right;
    margin-right: 150px;
    color: #FFFFFF;
  }

  .add_brand_goods_confirm:hover{
    background: #178FE5;
  }
</style>

<script>
  export default {
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
