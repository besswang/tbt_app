const tHost = process.env.tbtHost && process.env.tbtHost.url;
export default {
  //用户
  'registerCode':tHost + '/user/registerCode/',//注册-获取验证码
  'register':tHost + '/user/register'//注册
}
