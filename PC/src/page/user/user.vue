<template>
  <div id="boxs">
    <div class="content">
      <div class="titles">
        登录信息
      </div>
      <ul>
        <li>用户名：<span>admin</span></li>
        <li>上次登录时间：<span>2017-08-07</span></li>
        <li>上次登录地址：<span>杭州市</span></li>
        <li>ip地址：<span>196.12.0.14</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  Vue.use(Element)
  export default {
    name: 'boxs'
  }
</script>
<style>
  .titles{
    width:100%;
    height:60px;
    background: #ff3366;
    line-height: 60px;
    text-align: center;
    color:#fff;
  }
  .content{
    width:400px;
    border:1px solid #ff3366;
    border-radius: 7px;
    margin:100px auto 0;
    overflow: hidden;
  }
  .content ul{
    padding:20px;
    width:100%;
    box-sizing: border-box;
  }
  .content ul li{
    margin-bottom:20px;
  }

</style>
