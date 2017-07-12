<template>
  <div id="box">
    <div class="box">
      <div style="width:100%;float:left;">
        <el-breadcrumb separator="/" class="left">
          <el-breadcrumb-item :to="{ path: '/' }">业务管理</el-breadcrumb-item>
          <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="success" class="right">添加一级商品分类</el-button>
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
                   <el-button type="success" class="right">添加二级商品分类</el-button>
                 </li>
                 <li>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
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
                   <el-button :plain="true" type="info">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
                   <el-button :plain="true" type="info">上移</el-button>
                   <el-button :plain="true" type="info">下移</el-button>
                 </li>
                 <li>
                   <span class="margin30">礼袋</span>
                   <el-button :plain="true" type="info">修改</el-button>
                   <el-button :plain="true" type="info">删除</el-button>
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
                  <el-button type="success" class="right">添加二级商品分类</el-button>
                </li>
                <li>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
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
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
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
                  <el-button type="success" class="right">添加二级商品分类</el-button>
                </li>
                <li>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
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
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>
                <li>
                  <span class="margin30">礼袋</span>
                  <el-button :plain="true" type="info">修改</el-button>
                  <el-button :plain="true" type="info">删除</el-button>
                  <el-button :plain="true" type="info">上移</el-button>
                  <el-button :plain="true" type="info">下移</el-button>
                </li>

              </ul>
            </li>
          </ul>
        </li>
      </ul>

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
</style>
