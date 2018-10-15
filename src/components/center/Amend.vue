<template>
  <div class="register">
    <x-header @on-click-back :left-options="{backText: '修改密码'}">
      <span class="header-title" slot="left"></span>
    </x-header>
    <div class="charge-group mt2em">
      <group>
        <!--<x-input placeholder="请输入旧密码">-->
          <!--<img slot="label" style="padding-right:10px;display:block;" v-lazy="lg3" height="24">-->
        <!--</x-input>-->
        <x-input placeholder="请输入旧密码"></x-input>
        <x-input placeholder="请输入新密码"></x-input>
        <x-input placeholder="确认密码"></x-input>
      </group>
    </div>

    <box gap="1em 1em">
      <w-button blue>保存</w-button>
    </box>
  </div>
</template>

<script>
import { Group, Box, XInput, XButton, Flexbox, FlexboxItem, XHeader } from 'vux'
import WButton from '../Common/Button.vue'
import { LG_IMG } from '../../script/commonStatic'
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
</style>

