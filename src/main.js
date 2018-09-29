// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
// import { WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin } from 'vux'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import './assets/css/common.css'
/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(VueRouter)



const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})
/**
 *  点击延迟
 */
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
