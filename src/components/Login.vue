<template>
  <div class="login">
    <div class="login">
      <img class="logo" v-lazy="logo">
    </div>
    <div class="charge-group">
      <group>
        <x-input placeholder="请输入手机号">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg1" height="24">
        </x-input>
      </group>
      <group>
        <x-input placeholder="请输入密码">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg3" height="24">
        </x-input>
      </group>
    </div>

    <box gap="1em 1em">
      <w-button @click.native="doLogin" blue>登陆</w-button>
    </box>
    <box gap="1em 1em">
      <flexbox>
        <flexbox-item>
          <router-link tag='a' :to="{path: '/register'}">
            <span class="a-inner link-text">注册账号 </span>
          </router-link>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <router-link tag='a' :to="{path: '/forget'}">
            <span class="a-inner link-text">忘记密码 </span>
          </router-link>
        </flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem } from 'vux'
import { LG_IMG } from '../script/commonStatic'
import WButton from './Common/Button.vue'
export default {
  name:'Login',
  components: {
    Group,
    XInput,
    XButton,
    Box,
    Flexbox,
    FlexboxItem,
    WButton
  },
  data () {
    return {
      logo: LG_IMG[3],
      lg1: LG_IMG[0],
      lg3: LG_IMG[2],
    }
  },
  methods: {
    doLogin(){
      this.$router.push({ name: 'home'});
    }
    // doLogin (){
    //   if (this.userName == ''){
    //     alert('用户名不能为空');
    //     return false
    //   }
    //   if (this.password == ''){
    //     alert('密码名不能为空');
    //     return false
    //   }
    //   axios.post('/login',JSON.stringify(this.userInfo))
    //     .then(res => {
    //       console.log(res)
    //       if(res.status == 200){
    //         this.$store.commit('setToken',res.data);
    //         localStorage.userName = this.userInfo.userName;
    //         localStorage.token_expire = res.data.expire;
    //         localStorage.token = res.data.token;
    //         this.$notify({
    //           title : '提示信息',
    //           message : '登录成功',
    //           type : 'success'
    //         });
    //         this.$router.push({path:'/'})
    //       }else {
    //         this.$notify({
    //           title : '提示信息',
    //           message : '账号或密码错误',
    //           type : 'error'
    //         });
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  }
}
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 20%;
  margin-bottom: 10%;
}
.logo {
  width: 100px;
  height: 100px
}
.charge-group{
  padding:0 1em;
  margin-bottom:1em;
}
/*input表单样式重置*/
.charge-group >>> .weui-cells:before {
  height:0;
  border-top:0;
}
.charge-group >>> .weui-cells {
  margin-top:0;
}
</style>
