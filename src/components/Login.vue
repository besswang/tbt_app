<template>
  <div class="login">
    <div class="login">
      <img class="logo" v-lazy="logo" :src="logo">
    </div>
    <div class="charge-group">
      <group>
        <x-input placeholder="请输入手机号" v-model="tel" is-type="number" :min="11" :max="11">
          <img class="pr10 block" slot="label" v-lazy="lg1" height="24">
        </x-input>
      </group>
      <group>
        <x-input placeholder="请输入密码" v-model="pw">
          <img class="pr10 block" slot="label" v-lazy="lg3" height="24" :src="lg3">
        </x-input>
      </group>
    </div>
    <box gap="1em 1em">
      <x-button type="primary" @click.native="doLogin">登陆</x-button>
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
    <!--<p>{{name}}</p>-->
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem } from 'vux'
import { LG_IMG } from '../script/commonStatic'
export default {
  name:'Login',
  components: {
    Group,
    XInput,
    XButton,
    Box,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      tel:'',
      pw:'',
      logo: LG_IMG[3],
      lg1: LG_IMG[0],
      lg3: LG_IMG[2],
    }
  },
  computed:{
    // ...mapGetters(['name'])
  },
  // mounted(){
  //   console.log(this.$store.state.user.name)
  // },
  methods: {
    ...vm.$mapActions(['login']),
    //手机验证事件
    verifyPhone(){
      if(this.tel===''){
        vm.$vux.toast.text('请输入手机号', 'top')
        return false
      }else if(!(/^1[34578]\d{9}$/.test(this.tel))){
        vm.$vux.toast.text('手机号码有误，请重填', 'top')
        this.tel = ''
        return false;
      }else{
        return true
      }
    },
    doLogin(){
      if(this.verifyPhone() && this.pw!=='' ){
        let trans = {
          password: this.pw,
          phone: this.tel
        }
        this.login(trans)
      }
    }
    // login() {
      // console.log(this.$axios.login())
      // this.$store.commit('ADD_COUNT','4455')
      // this.$axios({
      //   method:'get',
      //   url:'/api/login'
      // }).then(function (res) {
      //   console.log(res.data)
      //   this.$store.commit('ADD_COUNT',json.data.token)
      // }.bind(this)).catch(function (err) {
      //   console.log('登陆失败')
      // }.bind(this))

      //this.$router.push({path:'/home'})

      // this.$store.dispatch('LoginByUsername', {'username':'wang','password':'123456'}).then(() => {
      //   // this.loading = false
      //   //this.$router.push({ path: this.redirect || '/' })
      //   console.log('登陆')
      // }).catch(() => {
      //   // this.loading = false
      //   console.log('error')
      // })

      // fetch("http://blog.parryqiu.com",{
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type' : 'application/json'
      //   }
      // }).then(function(response){console.log(response)})
        // async function ff() {
        //   let data = await fetch('login').then(res => console.log(res));
        //   return data;
        // }
        // ff().then(res => {
        //   // console.log(res, 'res');
        //   // this.text = 'name:' + res.name + ',age:' + res.age + 'sex:' + res.sex;
        //   console.log(res);
        // }).catch(reason => console.log(reason.message));
      // }
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
