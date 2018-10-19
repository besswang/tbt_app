const toastPosition = 'top';
export default {
  //手机验证事件
  verifyPhone: phone => {
    if(phone===''){
      vm.$vux.toast.text('请输入手机号', toastPosition);
      return false
    }else if(!(/^1[34578]\d{9}$/.test(phone))){
      vm.$vux.toast.text('手机号码有误，请重填', toastPosition);
      return false;
    }else{
      return true;
    }
  },
  //验证码
  verifyCode: code => {
    if(code===''){
      vm.$vux.toast.text('请输入验证码', toastPosition);
      return false
    }else if(!(/^\d{4}$/.test(code))){
      vm.$vux.toast.text('请准确输入验证码位数', toastPosition);
      return false;
    }else{
      return true;
    }
  },
  //密码
  verifyPw: pw => {
    if(pw === ''){
      vm.$vux.toast.text('请输入密码',toastPosition);
      return false;
    }else{
      return true;
    }
  }
}
