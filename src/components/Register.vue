<template>
  <div class="register">
    <x-header @on-click-back :left-options="{backText: '注册用户'}"></x-header>
    <div class="charge-group mt2em">
      <group>
        <x-input placeholder="请输入手机号">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg1" height="24">
        </x-input>
      </group>
      <group>
        <flexbox>
          <flexbox-item>
            <x-input placeholder="请输入验证码">
              <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg2" height="24">
            </x-input>
          </flexbox-item>
          <flexbox-item :span="2/5">
            <div class="vf-code">
              <x-button  @click.native="getCode"
                          :disabled="codeDisabled"
                         class="code-inner" slot="right" type="default" mini>{{text}}</x-button>
              <!--<span v-show="!show" class="code-inner link-text">{{count}}</span>-->


            </div>
          </flexbox-item>
        </flexbox>
      </group>
      <group>
        <x-input placeholder="请输入密码">
          <img slot="label" style="padding-right:10px;display:block;" v-lazy="lg3" height="24">
        </x-input>
      </group>
    </div>
    <box gap="1em 1em">
      <x-button type="primary" :disabled="disabled" @click.native="Register('6667788')">注册</x-button>
      <p>{{phone}}</p>

    </box>

    <p class="center foot-text" style="color:#949494;font-size:10px;">注册即代表阅读并同意
      <router-link tag='a' :to="{path: '/tcp'}">
        <span class="link-text">用户协议</span>
      </router-link>
    </p>
    <p>{{count}}</p>
    <!--<p>{{count2}}</p>-->
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem, XHeader } from 'vux'
import { LG_IMG } from '../script/commonStatic'
import { mapState, mapActions } from 'vuex'
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
      //codeDisabled: false,//验证码点击状态
      disabled: false,//注册按钮点击状态
      lg1: LG_IMG[0],
      lg2: LG_IMG[1],
      lg3: LG_IMG[2],
    }
  },
  computed :{
    // ...mapState(['user'])
    ...mapState({
      phone:state => state.user.register.phone,
      codeDisabled:state => state.user.code.codeDisabled,
      text:state => state.user.code.text,
      count:state => state.user.code.count,
      // count2:state => state.count
    })

  },
  methods:{
    ...mapActions(['getCode','Register']),
    registerCode(){
      console.log("fasong")
      // let tel = '15057187176'
      // this.$axios.post('/tbt_user/user/registerCode/'+tel,{})
      //   .then(function(response) {
      //     console.log(response)
      //   })
      //   .catch(function(error) {
      //     alert(error);
      //   });
    },
    //注册
    goRegister(){
      // let phone = this.$store.state.user.register.phone
      this.$store.dispatch('Register','666').then(() => {
        //this.loading = true;
      }).catch((e) => {
        //this.loading = false;
      })
    }
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
  .vf-code{
    text-align:center;
    border-left:1px solid #EBEBEB;
    line-height:24px;
  }
  .code-inner{
    padding:4px 0;
    width:100%;
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

