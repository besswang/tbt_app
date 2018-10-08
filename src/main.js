import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import './assets/css/common.css'
/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(VueLazyload)
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
