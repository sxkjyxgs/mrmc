<template>
  <div id="box">
    <div class="box">
      <div class="add_goods_title">添加商品</div>
      <div class="add_goods_img">
        <div class="add_goods_img_title">商品图片</div>
        <div class="add_goods_imgs"></div>
      </div>
      <div class="add_goods_name">
        <div class="add_goods_name_title">商品名称</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="add_goods_pay">
        <div class="add_goods_pay_title">商品销售价</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="add_goods_cost">
        <div class="add_goods_cost_title">商品成本价</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="add_goods_stock">
        <div class="add_goods_stock_title">商品库存</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="add_goods_classify">
        <div class="add_goods_classify_title">商品分类</div>
        <div class="add_goods_classify_select">
          <select name="" id="">
            <option value="">选择一级分类</option>
          </select>
          <select>
            <option value="">选择二级分类</option>
          </select>
        </div>
      </div>
      <div class="add_goods_brand">
        <div class="add_goods_brand_title">商品品牌</div>
        <select>
          <option value="">无品牌</option>
          <option value="">品牌一</option>
          <option value="">品牌二</option>
        </select>
      </div>
      <div class="add_goods_details">
        <div class="add_goods_details_title">商品详情</div>
        <textarea cols="30" rows="10"></textarea>
        <textarea cols="30" rows="10"></textarea>
        <textarea cols="30" rows="10"></textarea>
      </div>
      <div class="add_goods_specifications">
        <div class="add_goods_specifications_title">用户可选规格：</div>
        <el-button type="primary" @click="DisplayBlock">添加规格</el-button>
      </div>
      <div class="specifications_show">
        <el-button type="primary">修改或删除</el-button>
        <div class="specifications_show1">红色</div>
        <div class="specifications_show2">红色</div>
      </div>
      <div class="add_goods_royalty">
        <div class="add_goods_royalty_title">店主可得提成金</div>
        <el-input v-model="input" placeholder=""></el-input>
      </div>
      <p class="add_goods_royalty_tip">所有店主最多可分得提成金 <span>20.21</span>元</p>
      <div class="shopman_commission">
        <div class="shopman_commission_title">店主层级提成</div>
        <div class="shopman_commission_table">
          <table>
            <tr>
              <td>个人店主</td>
              <td>公司店主</td>
              <td>高级店主</td>
            </tr>
            <tr>
              <td>50%</td>
              <td>30%</td>
              <td>20%</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="add_goods_template">
        <div class="add_goods_template_title">运费模板</div>
        <select name="" id="">
          <option value="">系统默认模板</option>
          <option value="">模板名称1</option>
        </select>
      </div>
      <div class="add_goods_btns">
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
    <div class="mask"></div>
    <div class="add_specifications">
      <div class="add_specifications_color">
        <div class="add_specifications_color_title">颜色</div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="choose_specifications">
        <div class="choose_specifications_title">可选规格</div>
        <ul>
          <li>红色</li>
          <li>黄色</li>
        </ul>
      </div>
      <el-button type="primary" @click="DisplayNone">添加规格</el-button>
    </div>
  </div>
</template>

<style>
  .add_goods_title{
    font-size: 16px;
    text-align: center;
    line-height: 32px;
    margin-top: 30px;
  }
  .add_goods_img,
  .add_goods_name,
  .add_goods_pay,
  .add_goods_cost,
  .add_goods_stock,
  .add_goods_classify,
  .add_goods_brand,
  .add_goods_details,
  .add_goods_specifications,
  .specifications_show,
  .add_goods_royalty,
  .shopman_commission,
  .add_goods_template{
    width: 40%;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  .add_goods_img_title,
  .add_goods_name_title,
  .add_goods_pay_title,
  .add_goods_cost_title,
  .add_goods_stock_title,
  .add_goods_classify_title,
  .add_goods_brand_title,
  .add_goods_details_title,
  .add_goods_specifications_title,
  .add_goods_royalty_title,
  .shopman_commission_title,
  .add_goods_template_title{
    width: 30%;
    text-align: center;
    float: left;
    line-height: 36px;
  }
  .add_goods_imgs{
    width: 200px;
    height: 140px;
    background: #cccccc;
    float: left;
  }
  .add_goods_name .el-input,
  .add_goods_pay .el-input,
  .add_goods_cost .el-input,
  .add_goods_stock .el-input
  {
    width: 70%;
    float: right;
  }
  .add_goods_royalty .el-input{
    width: 30%;
    float: left;
  }
  .add_goods_classify select,
  .add_goods_brand select{
    width: 150px;
    height: 36px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    float: left;
  }
  .add_goods_classify select:nth-child(2){
    margin-left: 20px;
  }
  .add_goods_details_title{
    height: 300px;
  }
  .add_goods_details textarea{
    display: block;
    width: 200px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #c0ccda;
    margin-top: 20px;
  }
  .add_goods_details textarea:nth-child(2){
    margin-top: 0px;
  }
  .specifications_show .el-button{
    float: left;
    margin-left: 30px;
  }
  .specifications_show1,
  .specifications_show2{
    width: 100px;
    height: 34px;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1px solid #c0ccda;
    text-align: center;
    line-height: 34px;
    float: left;
    margin-left: 20px;
  }
  .add_goods_royalty_tip{
    width: 40%;
    margin: 0 auto;
    padding-left: 40px;
    font-size: 12px;
    line-height: 24px;
    text-align: left;
  }
  .add_goods_royalty_tip span{
    color: #ff3366;
  }
  .shopman_commission_table table{
    border-collapse:collapse;
  }
  .shopman_commission_table table tr td{
    width: 100px;
    height: 34px;
    border: 1px solid #c0ccda;
  }
  .add_goods_template select{
    width: 150px;
    height: 34px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
  }
  .add_goods_btns{
    width: 40%;
    margin: 0 auto;
    margin-top: 50px;
  }
  .add_goods_btns .el-button:nth-child(1){
    float: left;
    margin-left: 30%;
  }
  .add_goods_btns .el-button:nth-child(2){
    float: right;
    margin-right: 30%;
  }
  .add_specifications{
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
  .add_specifications_color,
  .choose_specifications{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  .add_specifications_color_title,
  .choose_specifications_title{
    float: left;
    width: 30%;
    text-align: center;
    line-height: 36px;
  }
  .add_specifications_color .el-input{
    float: right;
    width: 70%;
  }
  .choose_specifications ul{
    width: 69%;
    min-height: 200px;
    overflow: hidden;
    border: 1px solid #303030;
    float: right;
  }
  .choose_specifications ul li{
    width: 50%;
    text-align: center;
    height: 24px;
    line-height: 24px;
    margin: 0;
  }
  .add_specifications .el-button{
    margin: 0 auto;
    margin-top: 50px;
  }
</style>

<script>
  export default{
    methods: {
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.add_specifications').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.add_specifications').css('display','none');
      }
    }
  }
</script>



