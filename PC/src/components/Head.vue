<template>
  <div id="box">
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
      <div class="left">美日美C后台管理系统</div>
      <div class="right">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="2" class="login-user">
            <template slot="title">欢迎<a href="">admin</a>登录</template>
            <el-menu-item index="User">登录信息</el-menu-item>
            <el-menu-item index="ChangePass">修改密码</el-menu-item>
          </el-submenu>
          <el-menu-item index="1" class="out-login">退出登录</el-menu-item>
        </el-menu>
      </div>
    </header>
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
