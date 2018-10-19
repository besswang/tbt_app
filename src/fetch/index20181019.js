import axios from 'axios'
var qs = require('qs');
// import * as types from '../index/mutation-types'
// import index from '../index/index';
// import router from '../router';
export function fetch(options) {
  //debugger
  return new Promise((resolve, reject) => {
    console.log(options)
    //创建一个axios实例
    const instance = axios.create({
      //设置默认根地址
      responseType:'json',
      // baseURL: '/hn-shop-web/admin',
      //设置请求超时设置
      timeout: 2000,
      //设置请求时的header
      headers: {
        //"Content-Type":"application/x-www-form-urlencoded"
        "Content-Type":"application/json"
        //"Content-Type":'application/x-www-form-urlencoded;charset=utf-8'
      },

      transformRequest: [ body => {
        console.log('转数据')
        console.log(body)
        return JSON.stringify(body)
        //return qs.stringify(data);
      }],

    });
    // instance.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    // instance.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
    // instance.defaults.transformRequest = [function (data) {
    //     //数据序列化
    //   return JSON.stringify(data)
    //   //return qs.stringify(data);
    //   }
    // ];
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        // config.headers.accept = 'application/json'
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      console.log(response)
      console.log("接收数据")
      let data = response.data;
      //console.log(data)
      let status = response.status;
      if(status === 200){
        if(data.code === 400){
          vm.$vux.toast.text(data.msg, 'top')
          //return false;
        }else if(data.success){
          return Promise.resolve(response)
        }
      }else{
        return Promise.reject(response)
      }
      // if((status===200 || status === 304) && data.code==='SUCCESS' ){
      //   return response;
      // }else if(data.code==='FORBIDDEN' || data.code==='UNAUTHORIZED'){
      //   // index.commit(types.LOGOUT);
      //   // router.replace({
      //   //     path: 'bs_login',
      //   //     query: {redirect: router.currentRoute.fullPath}
      //   // })
      //   return Promise.reject(data.remark);
      // }else{
      //   return Promise.reject(data.remark);
      // }

    }, function (err) {
      // 对响应错误做点什么
      if (err && err.response) {
        console.error(err.response.status)
        switch (err.response.status) {
          case 400: err.message = '请求错误(400)' ; break;
          case 401: err.message = '未授权，请重新登录(401)'; break;
          case 403: err.message = '拒绝访问(403)'; break;
          case 404: err.message = '请求出错(404)'; break;
          case 408: err.message = '请求超时(408)'; break;
          case 500: err.message = '服务器错误(500)'; break;
          case 501: err.message = '服务未实现(501)'; break;
          case 502: err.message = '网络错误(502)'; break;
          case 503: err.message = '服务不可用(503)'; break;
          case 504: err.message = '网络超时(504)'; break;
          case 505: err.message = 'HTTP版本不受支持(505)'; break;
          default: err.message = `连接出错(${err.response.status})!`;
        }
      }else{
        err.message = '连接服务器失败!'
      }
      return Promise.reject(err.message);
    });
    // let obj = JSON.stringify();
    instance[options.method](options.url,options.params).then(response => {
      // if(response.data.code==='SUCCESS'){
        // vm.$message.success(response.data.remark)
        resolve(response.data);
      // }else{
        // Promise.reject('11')
        // vm.$message.error(response.data.remark)
        // throw Error(response.data.remark)
        // reject(response.data.remark)
      // }

    })
      .catch((error) => {
        //vm.$message.error(error)
      })
  })
}
// export function fetchUpload(options) {
//   return new Promise((resolve, reject) => {
//     console.log(options)
//     let config = {
//       headers:{'Content-Type':'multipart/form-data'}
//     };
//     vm.$axios.post('/hn-shop-web/editor/upload',options,config).then(response=>{
//       resolve(response.data)
//     })
//   })
// }
