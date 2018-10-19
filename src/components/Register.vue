<template>
  <div class="register">
    <x-header @on-click-back :left-options="{backText: '注册用户'}"></x-header>
    <div class="charge-group mt2em">
      <group>
        <x-input placeholder="请输入手机号" v-model="tel" is-type="number" :min="11" :max="11">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg1" height="24">
        </x-input>
      </group>
      <group>
        <flexbox>
          <flexbox-item>
            <x-input placeholder="请输入验证码" v-model="code" is-type="number" :min="4" :max="4">
              <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg2" height="24">
            </x-input>
          </flexbox-item>
          <flexbox-item :span="2/5">
            <div class="vf-code">
              <x-button  @click.native="registerCodeTem"
                          :disabled="codeDisabled"
                         class="code-inner" slot="right" type="default" mini>{{text}}</x-button>
            </div>
          </flexbox-item>
        </flexbox>
      </group>
      <group>
        <x-input placeholder="请输入密码" v-model="pw">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg3" height="24">
        </x-input>
      </group>
    </div>
    <box gap="1em 1em">
      <!--<x-button type="primary" :disabled="disabled" @click.native="goRegisterAxios">注册Axios</x-button>-->
      <x-button type="primary" :disabled="disabled" @click.native="goRegister">注册</x-button>
    </box>
    <p class="center foot-text" style="color:#949494;font-size:10px;">注册即代表阅读并同意
      <router-link tag='a' :to="{path: '/tcp'}">
        <span class="link-text">用户协议</span>
      </router-link>
    </p>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem, XHeader } from 'vux'
import { LG_IMG } from '../script/commonStatic'
export default {
  name:'Register',
  components: {
    Group,
    XInput,
    XButton,
    Box,
    Flexbox,
    FlexboxItem,
    XHeader
  },
  data () {
    return {
      tel:'',
      code:'',//验证码
      pw:'',//密码
      disabled: false,//注册按钮点击状态
      lg1: LG_IMG[0],
      lg2: LG_IMG[1],
      lg3: LG_IMG[2],
    }
  },
  computed :{
    ...vm.$mapGetters(['codeDisabled','text','count'])
  },
  created() {
    window.document.title = '注册';
  },
  methods:{
    ...vm.$mapActions(['registerCode','Register']),
    //发送验证码
    registerCodeTem(){
      let flag = vm.$global.verifyPhone(this.tel)
      //调用接口
      flag ? this.registerCode(this.tel) : this.tel
    },
    //注册
    goRegister(){
      let trans = {
        code:this.code,
        password:this.pw,
        phone:this.tel
      };
      if(vm.$global.verifyPhone(this.tel) && vm.$global.verifyCode(this.code) && vm.$global.verifyPw(this.pw)){
        this.Register(trans)
      }
    },
    // goRegisterAxios(){
    //   this.$axios.post('/tbt_user/user/register',{code:"1756",password:"123456",phone:"1505718716"})
    //     .then(function (response) {
    //       console.log(response.data)
    //     })
    //     .catch(function (err) {
    //       console.log(err)
    //     })
    // }
  }
}
</script>
<style scoped>
  .mt2em{
    margin-top:2em;
  }
  .charge-group{
    padding:0 1em;
    margin-bottom:1em;
  }
  .vf-code >>> .weui-btn:after{
    border:none;
  }
  .vf-code >>> .weui-btn_mini{
    cursor: pointer;
    color:#3574FA;
    font-size:10px;
    background:#fff;
  }
  /*input表单样式重置*/
  .charge-group >>> .weui-cells:before {
    height:0;
    border-top:0;
  }
  .charge-group >>> .weui-cells {
    margin-top:0;
  }

  .foot-text{
    position:absolute;
    margin:0 auto;
    left: 50%;
    top:calc(100% - 3em);
    min-width:60%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }
</style>

