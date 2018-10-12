import Vue from 'vue'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import './assets/css/common.css'
import store from './store'
import './mock/index.js'
/**
 * 加载插件
 */
Vue.use(VueLazyload);
/**
 *  点击延迟
 */
FastClick.attach(document.body);
import { TransferDom, Loading, LoadingPlugin, Divider,ToastPlugin } from 'vux'
Vue.directive('transfer-dom', TransferDom);
Vue.component('loading', Loading);
Vue.component('divider', Divider);
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin, {position: 'bottom'})
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box');
