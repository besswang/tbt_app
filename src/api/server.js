import axios from 'axios'
import Vue from 'vue'
/**
 * 获取一个新的自定义的axios实例
 */
const url =
  process.env.NODE_ENV === 'development'
    ? window.config.Host.development // 开发环境中的后端地址
    : process.env.NODE_ENV === 'production'
    ? window.config.Host.production // 生产环境中的后端地址
    : window.config.Host.test // 测试环境的后端地址

export let axiosIns = axios.create({
  baseURL: url,
  timeout: 30000,
  withCredentials: true,
  headers: {'Content-Type': 'application/json'}
})
let s = new Vue()
axiosIns.interceptors.response.use(function(response) {
  return response
}, function(error) {
  // Vue.$vux.loading.hide()
  s.$Modal.error({
    content: '网络请求失败！请检查您的网络设置！'
  })
  return Promise.reject(error)
})
