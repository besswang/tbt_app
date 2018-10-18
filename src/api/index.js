import {fetch} from "../fetch";
import qs from 'qs'
export default {
  // 注册-获取验证码
  registerCodeApi(params){
    let phone = vm.$store.state.user.register.phone
    return fetch({
      url:vm.$jk.registerCode+phone,
      method: 'post',
      params
    })
  },
  //注册
  registerApi(params){
    console.log("api下")
    console.log(typeof params)
    //let pa = JSON.stringify(params)
    return fetch({
      url: vm.$jk.register,
      method: 'post',
      body: params
    })
  },
  //登陆
  // login(params){
  //   return fetch({
  //
  //   })
  // }
}
//export const regist = params => fetch('/tbt_user/user/register',params,'POST');
