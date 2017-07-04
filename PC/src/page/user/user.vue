<template>
  <div id="box">
    <div class="content">
      <h2>登录信息</h2>
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
    name: 'box'
  }
</script>
<style>
  .content{
    width:200px;
    padding:20px;
    border:1px solid #ff3366;
    border-radius: 7px;
    margin:100px auto 0;

  }
</style>
