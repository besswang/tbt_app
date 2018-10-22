
import * as types from '../mutation-types'
import api from '../../api';

// 登陆数据
const login = {
  phone:'',
  password:''
}
//登陆后的用户数据
const user = {
  icon: null,
  nickName: '',
  token: ''
}
//验证码
const code = {
  recode:'',
  count:0,//60s计数器
  timer:null,
  codeDisabled:false,//验证按钮点击状态
  text:'发送验证码'
}
//banner
const bannerList = []
const state = {
  login,
  code,
  user,
  bannerList
}

const mutations = {
  //bannerList
  [types.BANNER_LIST](state,data){
    state.bannerList=[...data.data]
  },
  //登陆后存储用户信息
  [types.SAVE_USER](state,data){
    state.user = data.data
    window.localStorage.setItem('token',state.user.token)
  },
  //验证码倒计时
  [types.GET_CODE](state){
    let code = state.code
    if (!code.timer) {
      code.count = 60;
      code.timer = setInterval(() => {
        if (code.count > 0 && code.count <= 60) {
          code.count--;
          code.text = code.count+'s'
          code.codeDisabled = true;
        } else {
          clearInterval(this.timer);
          code.text = '发送验证码'
          code.timer = null;
          code.codeDisabled = false;
        }
      }, 1000)
    }
  }
}
const actions = {
  //注册-发送验证码
  registerCode({commit},params){
    api.registerCodeApi(params)
      .then((res) => {
        if(res.success){
          commit(types.GET_CODE)
        }
        vm.$vux.toast.text(res.msg, 'top')
      })
  },
  //注册
  async Register({commit},params){
    await api.registerApi(params)
    vm.$router.push({path:'/'})
  },
  async login ({commit},params){
    let res = await api.loginApi(params)
    commit(types.SAVE_USER,res)
    vm.$router.push({path:'/home'})
  },
  //忘记密码-发送验证码
  passwordCode ({commit},params){
    api.passwordCodeApi(params)
      .then((res) => {
        if(res.success){
          commit(types.GET_CODE)
        }
        vm.$vux.toast.text(res.msg, 'top')
      })
  },
  async bannerListActions({commit}){
    let res = await api.bannerListApi()
    commit(types.BANNER_LIST,res)
  }
}
export default {
  state,
  mutations,
  actions
}

