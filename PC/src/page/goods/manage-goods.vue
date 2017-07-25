<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="add_goods">
        <el-button type="success" class="right addGoods" @click="shows()">添加商品</el-button>
      </div>

      <div class="goods_search">
        <div class="left">
          <i style="margin-top: 10px;">搜索</i>
          <select name="" style="margin-top: 10px;" >
            <option value="">一级分类</option>
          </select>
          <select name=""  style="margin-top: 10px;">
            <option value="">二级分类</option>
          </select>
        </div>
        <div class="right">
          <input placeholder="输入商品名称搜索" style="height:30px;"></input>
          <el-button type="success" style="margin-top: 0px;!important;">搜索</el-button>
        </div>
      </div>
      <div class="add_goods_form">
        <el-table
          border
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="serial_number"
            :span="1"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="goods_name"
            :span="2"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="stock"
            :span="1"
            label="库存">
          </el-table-column>
          <el-table-column
            :span="2"
            prop="freight_template"
            label="运费模板">
          </el-table-column>
          <el-table-column
            :span="5"
            fixed="right"
            label="操作">
            <template scope="scope">
              <el-button type="text" size="small">上移</el-button>
              <el-button type="text" size="small">下移</el-button>
              <el-button type="text" size="small">置顶</el-button>
              <el-button type="text" size="small">置底</el-button>
              <el-button type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style>
  .add_goods{
    width:100%;
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
    methods:{
      shows:function(){
        this.$router.push('/AddGoods');
      }
    },
    data() {
      return {
        input: '',
        tableData: [{
          serial_number: '1',
          goods_name: '商品名称',
          stock: '111',
          freight_template: '运费模板'
        }, {
          serial_number: '2',
          goods_name: '商品名称',
          stock: '222',
          freight_template: '运费模板'
        }, {
          serial_number: '3',
          goods_name: '商品名称',
          stock: '333',
          freight_template: '运费模板'
        }, {
          serial_number: '4',
          goods_name: '商品名称',
          stock: '444',
          freight_template: '运费模板'
        }]
      }
    }
  }
</script>
