import Vue from 'vue'
import Vuex from 'vuex' //引入状态管理
import { mapState, mapActions, mapGetters } from 'vuex'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import './assets/css/common.css'
import store from './store/index.js'
import './mock/index.js'
import VueClipboard from 'vue-clipboard2'
import axios from 'axios'
import jk from './api/jk.js'
import global from  './script/global'
import { TransferDom, Loading, Divider, ToastPlugin } from 'vux'
Vue.use(VueClipboard)
Vue.prototype.$jk = jk
Vue.use(Vuex)
Vue.prototype.$mapState = mapState
Vue.prototype.$mapActions = mapActions
Vue.prototype.$mapGetters = mapGetters
Vue.prototype.$global = global
/**
 * 加载插件
 */
Vue.use(VueLazyload);
/**
 *  点击延迟
 */
FastClick.attach(document.body);
// Vue.use(Vuex);
// Vue.prototype.$mapState = mapState
// Vue.prototype.$mapActions = mapActions
// Vue.prototype.$mapGetters = mapGetters
Vue.directive('transfer-dom', TransferDom);
Vue.component('loading', Loading);
Vue.component('divider', Divider);
// Vue.use(LoadingPlugin)
// Vue.use(vuxLoadingPlugin)
Vue.use(ToastPlugin, {position: 'bottom'})
Vue.config.productionTip = false;
// 封装接口-start
let axiosIns = axios.create({
  headers: {
    //"Content-Type":"application/x-www-form-urlencoded"
    "Content-Type":"application/json"
  },
});
axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';

axiosIns.defaults.transformRequest = [function (data) {
  //数据序列化
  return JSON.stringify(data)
  //return qs.stringify(data);
}
];
axiosIns.defaults.validateStatus = function (status) {
  return true;
};
axiosIns.interceptors.request.use(function (config) {
  //配置config
  //config.headers.Accept = 'application/json';
  //config.headers.Accept = 'application/x-www-form-urlencoded';
  return config;
});
axiosIns.interceptors.response.use(function (response) {
  let data = response.data;
  let status = response.status;
  if (status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
});

let ajaxMethod = ['get', 'post'];
let api = {};
ajaxMethod.forEach((method)=> {
  //数组取值的两种方式
  api[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response)=> {
        /*根据后台数据进行处理
         *1 code===200   正常数据+错误数据     code!==200   网络异常等
         *2 code===200   正常数据     code!==200   错误数据+网络异常等
         * 这里使用的是第一种方式
         * ......
         */
        // if (response.data.code == 'UNAUTHORIZED') {
        //   Message({
        //     message:response.data.remark,
        //     type:"warning"
        //   })
        //   setTimeout(() => {
        //     window.location.href = process.env.businessHost.host + '/' + process.env.businessHost.projectName + '/#/login';
        //   }, 3000);
          //toast封装：  参考ele-mint-ui
          // Toast({
          //     message: response.data.Message,
          //     position: 'top',
          //     duration: 2000
          // });
          // if (response.data.Message === '未登录') {
          //     Toast({
          //         message: response.data.Message,
          //         position: '',
          //         duration: 2000
          //     });
          //     //使用vue实例做出对应行为  change state or router
          //     //instance.$store.commit('isLoginShow',true);
          // }
        // }else {
          resolve(response);
        // }

      }).catch((response)=> {
        //reject response
      })
    })
  }
});
Vue.prototype.$axios = api;
// 封装接口-end

// const ADD_COUNT = 'ADD_COUNT'; // 用常量代替事件类型，使得代码更清晰
// const REMOVE_COUNT = 'REMOVE_COUNT';
// //注册状态管理全局参数
// var store = new Vuex.Store({
//   state:{
//     token:'',
//     userID:'',
//   },
//   mutations: {
//     //写法与getters相类似
//     //组件想要对于vuex 中的数据进行的处理
//     //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
//     //内部操作必须在此刻完成(同步)
//     [ADD_COUNT] (state, token) { // 第一个参数为 state 用于变更状态 登录
//       sessionStorage.setItem("token", token);
//       state.token = token;
//     },
//     [REMOVE_COUNT] (state, token) { // 退出登录
//
//       sessionStorage.removeItem("token", token);
//
//       state.token = token;
//     },
//   }
// });

// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();//loadong 效果
//
//   store.state.token = sessionStorage.getItem('token');//获取本地存储的token
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     console.log(to.meta.requireAuth)
//     console.log(store.state.token)
//     if (store.state.token !== "") {  // 通过vuex state获取当前的token是否存
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
// router.afterEach(route => {
//   iView.LoadingBar.finish();
// });
router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  // setTimeout(() => {
    // vm.$vux.loading.hide()
    store.commit('updateLoadingStatus', {isLoading: false})
  // }, 2000)

})
/* eslint-disable no-new */
window.vm = new Vue({
  router,
  store,//注册组件
  render: h => h(App)
}).$mount('#app-box');
