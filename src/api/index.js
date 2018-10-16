import {fetch} from "../fetch";
export default {
  // 注册-获取验证码
  registerCode(params){
    return fetch({
      url: '/tbt_user/user/registerCode/15057187176',
      method: 'post',
      params
    })
  },
  // 注册
  // regist(params){
  //   return fetch({
  //     url: '/tbt_user/user/register',
  //     method: 'post',
  //     params
  //   })
  // }
}
const regist = params => fetch('/tbt_user/user/register',params,'POST');
