<template>
  <div id="box">
    <div class="box">
      <div style="width:100%;float:left;">
        <el-breadcrumb separator="/" class="left">
          <el-breadcrumb-item :to="{ path: '/' }">业务管理</el-breadcrumb-item>
          <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="success" class="right" @click="DisplayBlock">添加一级商品分类</el-button>
      </div>
      <ul class="boxx">
         <li class="shows">
           <div class="titlee">送礼礼盒</div>
           <ul>
             <li class="self">
               <div class="left left-title">一级商品</div>
               <ul class="right right-list">
                 <div class="img-box">
                   <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1500286899&di=895509c86877025244b6199b04b41a66&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aede5f5b1c1b91c8701a18bfb58.jpg">
                 </div>
                 <li>
                   <span class="left" style="font-size: 20px;color:#ff3366;margin-right:30px;">送礼礼盒</span>
                   <el-button type="success" class="right" @click="DisplayBlock2">添加二级商品分类</el-button>
                 </li>
                 <li>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
               </ul>
             </li>
             <li class="self">
               <div class="left left-title">二级商品</div>
               <ul class="right right-list">
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button @click="open2">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>

               </ul>
             </li>
           </ul>
         </li>
        <li class="shows">
          <div class="titlee">送礼礼盒</div>
          <ul>
            <li class="self">
              <div class="left left-title">一级商品</div>
              <ul class="right right-list">
                <div class="img-box">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1500286899&di=895509c86877025244b6199b04b41a66&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aede5f5b1c1b91c8701a18bfb58.jpg">
                </div>
                <li>
                  <span class="left" style="font-size: 20px;color:#ff3366;margin-right:30px;">送礼礼盒</span>
                  <el-button type="success" class="right" @click="DisplayBlock2">添加二级商品分类</el-button>
                </li>
                <li>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
              </ul>
            </li>
            <li class="self">
              <div class="left left-title">二级商品</div>
              <ul class="right right-list">
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>

              </ul>
            </li>
          </ul>
        </li>
        <li class="shows">
          <div class="titlee">送礼礼盒</div>
          <ul>
            <li class="self">
              <div class="left left-title">一级商品</div>
              <ul class="right right-list">
                <div class="img-box">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1500286899&di=895509c86877025244b6199b04b41a66&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aede5f5b1c1b91c8701a18bfb58.jpg">
                </div>
                <li>
                  <span class="left" style="font-size: 20px;color:#ff3366;margin-right:30px;">送礼礼盒</span>
                  <el-button type="success" class="right" @click="DisplayBlock2">添加二级商品分类</el-button>
                </li>
                <li>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
              </ul>
            </li>
            <li class="self">
              <div class="left left-title">二级商品</div>
              <ul class="right right-list">
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button @click="open2">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mask"></div>
    <div class="add_Class_a">
      <div class="add_class_a_title">添加一级分类</div>
      <div class="class_a_name">
        <div class="class_a_name_title">一级分类名称：</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="class_a_img">
        <div class="class_a_img_title">一级分类图片：</div>
        <div class="class_a_img_box"></div>
      </div>
      <div class="add_class_a_btns">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
    <div class="add_Class_b">
      <div class="add_class_b_title">添加二级分类</div>
      <div class="class_b_name">
        <div class="class_b_name_title">二级分类名称：</div>
        <el-input placeholder=""></el-input>
      </div>
      <div class="add_class_b_btns">
        <el-button @click="DisplayNone2">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>
<style>
  .boxx{
    width:100%;
    padding:20px 0;
  }
  .shows{
    width:100%;
    height:auto;
    border:1px solid #838383;
    overflow: hidden;
    margin:50px   0;
  }
  .self{
    width:50%;
    float: left;
    display: flex;
  }
  .img-box{
    width:200px;
    height:200px;
    overflow: hidden;
  }
  .img-box img{
    width:100%;
  }
  .left-title{
    border-right:1px solid #838383;
    width:10%;
    display: flex;
    align-items: center;
    padding:20px;
    height:342px;
  }
  .titlee{
    width:100%;
    height:50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color:#ff3366;
    border-bottom:1px solid #838383;
  }
  .right-list{
    width:90%;
    box-sizing: border-box;
    padding:20px;
    border-right:1px solid #838383;
    height:auto;
  }
  .right-list:nth-child(1){
    border:0;
  }
  .right-list li{
    width:100%;
    margin: 10px;
    display: flex;
    line-height: 36px;
  }
  .el-button {
    margin: 0 20px 0 0;
  }
  .margin30{
    margin-right:30px;
  }
  .add_Class_a,
  .add_Class_b{
    width: 500px;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    top: 200px;
    left: 50%;
    text-align: center;
    z-index: 999;
    margin-left: -280px;
    display: none;
  }
  .add_class_a_title,
  .add_class_b_title{
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
  }
  .class_a_name,
  .class_b_name{
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 30px;
  }
  .class_a_name .class_a_name_title,
  .class_b_name .class_b_name_title
  {
    float: left;
    width: 25%;
    line-height: 36px;
    text-align: left;
  }
  .class_a_name .el-input,
  .class_b_name .el-input
  {
    width: 70%;
    float: right;
  }
  .class_a_img,
  .class_b_img
  {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 30px;
  }
  .class_a_img .class_a_img_title,
  .class_b_img .class_b_img_title
  {
    width: 30%;
    float: left;
    text-align: left;
    line-height: 36px;
  }
  .class_a_img_box,
  .class_b_img_box
  {
    width: 100px;
    height: 60px;
    background: #cccccc;
    float: left;
  }
  .add_class_a_btns,
  .add_class_b_btns
  {
    margin: 0 auto;
    margin-top: 40px;
  }
  .add_class_a_btns .el-button:nth-child(1),
  .add_class_b_btns .el-button:nth-child(1)
  {
    float: left;
    margin-left: 25%;
  }
  .add_class_a_btns .el-button:nth-child(2),
  .add_class_b_btns .el-button:nth-child(2)
  {
    float: right;
    margin-right: 25%;
  }
</style>

<script>
  export default{
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.add_Class_a').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.add_Class_a').css('display','none');
      },

      DisplayBlock2:function(){
        $('.mask').css('display','block');
        $('.add_Class_b').css('display','block');
      },

      DisplayNone2:function(){
        $('.mask').css('display','none');
        $('.add_Class_b').css('display','none');
      },
    }
  }
</script>
