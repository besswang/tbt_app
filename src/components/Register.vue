<template>
  <div class="register">
    <div class="reg-header">
      <x-header @on-click-back style="background:#fff;" :left-options="{backText: '注册用户'}"></x-header>
    </div>
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
          <flexbox-item :span="1/4">
            <div class="vf-code">
              <span class="a-inner link-text">发送验证码</span>
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
      <w-button blue>注册</w-button>
    </box>
    <p class="center foot-text" style="color:#949494;font-size:10px;">注册即代表阅读并同意
      <router-link tag='a' :to="{path: '/tcp'}">
        <span class="a-inner link-text">用户协议</span>
      </router-link>
    </p>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem, XHeader } from 'vux'
import WButton from './Common/Button.vue'
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
    WButton,
    XHeader
  },
  data () {
    return {
      lg1: LG_IMG[0],
      lg2: LG_IMG[1],
      lg3: LG_IMG[2],
    }
  }
}
</script>
<style>

</style>
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
  /*input表单样式重置*/
  .charge-group >>> .weui-cells:before {
    height:0;
    border-top:0;
  }
  .charge-group >>> .weui-cells {
    margin-top:0;
  }

  /*注册header头重置*/
  .reg-header >>> .vux-header .vux-header-left a{
    color:#000;
    font-size:1.2em;
  }
  .reg-header >>> .vux-header .vux-header-left .left-arrow:before{
    border: 1px solid #000;
    border-width: 1px 0 0 1px;
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

