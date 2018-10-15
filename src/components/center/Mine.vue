<template>
  <div class="mine">
    <flexbox class="p15 mb10 bgfff">
      <flexbox-item :span="1/5">
        <cropper :headerImage="headerImage"  @getHeaderImage="newHeaderImage">2233</cropper>　
      </flexbox-item>
      <flexbox-item :span="4/5">
        <router-link tag="a" to="/center/rename">
          <p class="rc-title">TBT_123456789</p>
        </router-link>
      </flexbox-item>
    </flexbox>
    <ul class="flex flex-c set-ul">
      <li class="vux-1px-b flex flex-r flex-a-i" @click="shareShow = true">
        <img src="" alt="" v-lazy="mi1">
        <p>我的邀请</p>
      </li>
      <li class="vux-1px-b flex flex-r flex-a-i" @click="goAmend">
        <img src="" alt="" v-lazy="mi3">
        <p>修改密码</p>
      </li>
      <li class="vux-1px-b flex flex-r flex-a-i" @click="goContact">
          <img src="" alt="" v-lazy="mi4">
          <p>联系我们</p>
      </li>
    </ul>
    <box gap="1em 1em">
      <w-button blue>退出</w-button>
    </box>
    <!--分享-->
    <div v-transfer-dom>
      <actionsheet
        v-model="shareShow"
        :menus="shareMenus"
        @on-click-menu="shareClick"
        @on-after-hide="log('after hide')"
        @on-after-show="log('after show')">
      </actionsheet>
    </div>
  </div>
</template>

<script>
import {Box, Flexbox, FlexboxItem, Actionsheet} from 'vux'
import WButton from '../Common/Button.vue'
import cropper from "@/components/Common/cropper"
import {MI_IMG} from "../../script/commonStatic";
export default {
  name:'Mine',
  components: {
    Box,
    Flexbox,
    FlexboxItem,
    Actionsheet,
    WButton,
    cropper
  },
  data () {
    return {
      shareShow:false,
      shareMenus: {
        menu1: '微信',
        menu2: '朋友圈',
        menu3: '保存相册'
      },
      headerImage:'',
      mi1:MI_IMG[0],
      mi3:MI_IMG[2],
      mi4:MI_IMG[3],
    }
  },
  methods:{
    shareClick (key) {
      console.log(key)
    },
    log (str) {
      console.log(str)
    },
    newHeaderImage(newImg){
      this.headerImage = newImg;
    },
    goContact(){
      this.$router.push({path:'/center/contact'})
    },
    goAmend(){
      this.$router.push({path:'/center/amend'})
    }
  }
}
</script>
<style>

</style>
<style scoped>
  /*input表单样式重置*/
  .charge-group >>> .weui-cells:before {
    height:0;
    border-top:0;
  }
  .charge-group >>> .weui-cells {
    margin-top:0;
  }
  .mine{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #f3f3f3;
  }
  .set-ul{
    background:#fff;
  }
  .set-ul>li{
    padding:15px;
  }
  .set-ul>li>img{
    width:1.6em;
    margin-right:15px;
  }
</style>

