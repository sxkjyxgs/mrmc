<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="add_goods">
        <!--<router-link to="/AddGoods">添加商品</router-link>-->
      </div>

      <div class="goods_search">
        <i>搜索</i>
        <select name="" id="">
          <option value="">一级分类</option>
        </select>
        <select name="" id="">
          <option value="">二级分类</option>
        </select>
        <el-input v-model="input" placeholder="输入商品名称搜索"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="add_goods_form">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="serial_number"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="goods_name"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="stock"
            label="库存">
          </el-table-column>
          <el-table-column
            prop="freight_template"
            label="运费模板">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style>
  .add_goods{
    margin: 30px 0;
    overflow: hidden;
  }

  .add_goods button{
    float: right;
    margin-right: 10%;
  }

  .goods_search{
    width: 80%;
    overflow: hidden;
    margin: 0 0 30px 10%;
  }

  .goods_search i{
    float: left;
    margin-left: 10px;
    line-height: 32px;
  }

  .goods_search select{
    float: left;
    height: 36px;
    margin-left: 10px;
  }

  .goods_search .el-input{
    float: left;
    margin-left: 10px;
  }

  .goods_search .el-button{
    margin-left: 10px;
  }

  .add_goods_form{
    width: 80%;
    margin-left: 10%;
  }

  .add_goods_form table tr td{
    text-align: center;
  }

  .add_goods_form table tr th{
    text-align: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        input: '',
        tableData: [{
          serial_number: '序号',
          goods_name: '商品名称',
          stock: '库存',
          freight_template: '运费模板',
          operation: 'operation'
        }, {
          serial_number: '序号',
          goods_name: '商品名称',
          stock: '库存',
          freight_template: '运费模板',
          operation: 'operation'
        }, {
          serial_number: '序号',
          goods_name: '商品名称',
          stock: '库存',
          freight_template: '运费模板',
          operation: 'operation'
        }, {
          serial_number: '序号',
          goods_name: '商品名称',
          stock: '库存',
          freight_template: '运费模板',
          operation: 'operation'
        }]
      }
    }
  }
</script>
