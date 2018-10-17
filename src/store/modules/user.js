
import * as types from '../mutation-types'
import api from '../../api';

// 注册数据
const register = {
  phone:'123456',
  password:''
}
//验证码
const code = {
  count:0,//60s计数器
  timer:null,
  codeDisabled:false,//验证按钮点击状态
  text:'发送验证码'
}
const state = {
  register,
  code
}
const mutations = {
  [types.GO_REGISTER](state,res){
    state.phone = res.phone;
    state.password = res.password
  },
  [types.GET_CODE](state,data){
    console.log('9999')
    console.log(data)
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
  Register({commit},params){
    console.log('params'+params)
    api.regist()
      .then(res => {
        console.log(res)
        commit(types.GO_REGISTER,res)

      })
  },
  async getCode({commit}){
    let res = await api.registerCode()
    commit(types.GET_CODE,res)
  }
}
// const user = {
//   state: {
//     logined:false,//登陆状态
    // user: '',
    // status: '',
    // code: '',
    // token: getToken(),
    // name: '123456',
    // avatar: '',
    // introduction: '',
    // roles: [],
    // setting: {
    //   articlePlatform: []
    // }
  // },

  // mutations: {
  //   SET_LOGINED:(state, logined) => {
  //     state.logined = logined
  //   },
    // SET_CODE: (state, code) => {
    //   state.code = code
    // },
    // SET_TOKEN: (state, token) => {
    //   state.token = token
    // },
    // SET_INTRODUCTION: (state, introduction) => {
    //   state.introduction = introduction
    // },
    // SET_SETTING: (state, setting) => {
    //   state.setting = setting
    // },
    // SET_STATUS: (state, status) => {
    //   state.status = status
    // },
    // SET_NAME: (state, name) => {
    //   state.name = name
    // },
    // SET_AVATAR: (state, avatar) => {
    //   state.avatar = avatar
    // },
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles
    // }
  // },
  //
  // actions: {
    // 用户名登录
    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       const data = response.data
    //       commit('SET_TOKEN', data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 获取用户信息
    // GetUserInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo(state.token).then(response => {
    //       if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
    //         reject('error')
    //       }
    //       const data = response.data
    //
    //       if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         commit('SET_ROLES', data.roles)
    //       } else {
    //         reject('getInfo: roles must be a non-null array !')
    //       }
    //
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // },

    // 动态修改权限
    // ChangeRoles({ commit, dispatch }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
    //       resolve()
    //     })
    //   })
    // }
//   }
// }

// export default user

export default {
  state,
  mutations,
  actions
}

