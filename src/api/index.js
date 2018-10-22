import Fetch from "../fetch/index.js";
export default {
  // 注册-获取验证码
  registerCodeApi(params){
    return Fetch(vm.$jk.registerCode+params,{
      method:'post'
    })
  },
  //注册
  registerApi: params => Fetch(vm.$jk.register,{method:'post',body:params}),
  //登陆
  loginApi: params => Fetch(vm.$jk.login,{method:'post',body:params}),
  //忘记密码-获取验证码
  passwordCodeApi: params => Fetch(vm.$jk.passwordCode+params,{method:'post'}),
  //banner
  bannerListApi: () => Fetch(vm.$jk.bannerList,{method:'get'}),
  //项目详情
  projectDetailApi: params => Fetch(vm.$jk.projectDetail,{method:'get',data:params}),
  //概要
  summaryApi: params => Fetch(vm.$jk.summary,{method:'get',data:params})
}
//export const regist = params => fetch('/tbt_user/user/register',params,'POST');

