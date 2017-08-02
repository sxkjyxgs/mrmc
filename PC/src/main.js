// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './router-config'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import globals from './components/Global.vue'
Vue.prototype.GLOBAL =globals
Vue.use(Element)


//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)


//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,
  globals,
  el: "#app",
  render: h => h(App)
})
