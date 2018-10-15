<template>
  <div class="register">
    <x-header @on-click-back :left-options="{backText: '修改昵称'}">
      <span class="header-title" slot="left"></span>
    </x-header>
    <div class="charge-group mt2em">
      <group>
        <!--<x-input placeholder="请输入旧密码">-->
          <!--<img slot="label" style="padding-right:10px;display:block;" v-lazy="lg3" height="24">-->
        <!--</x-input>-->
        <x-input placeholder="请输入新昵称(15字以内)" :max="15"></x-input>
      </group>
    </div>

    <box gap="1em 1em">
      <w-button blue>保存</w-button>
    </box>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, XHeader } from 'vux'
import WButton from '../Common/Button.vue'
export default {
  name:'Register',
  components: {
    Group,
    XInput,
    XButton,
    Box,
    WButton,
    XHeader
  },
  data () {
    return {

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
  /*input表单样式重置*/
  .charge-group >>> .weui-cells:before {
    height:0;
    border-top:0;
  }
  .charge-group >>> .weui-cells {
    margin-top:0;
  }
</style>

