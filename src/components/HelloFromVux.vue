<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/images/logo.png">
      <h1> </h1>
    </div>
    <group>
      <x-input placeholder="请输入手机号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/log1.png" width="24" height="24">
      </x-input>
      <x-input placeholder="请输入密码">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/log3.png" width="24" height="24">
      </x-input>
    </group>
    <box gap="10px 10px">
      <!--<x-button plain type="primary" style="border-radius:99px;">登陆</x-button>-->
      <w-button blue>登陆</w-button>
    </box>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item>
          <router-link tag='span' to="#">
            <span class="a-inner link-text">注册账号 </span>
          </router-link>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <router-link tag='span' to="#">
            <span class="a-inner link-text">忘记密码 </span>
          </router-link>
        </flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem } from 'vux'
import WButton from './Common/Button.vue'
export default {
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
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
