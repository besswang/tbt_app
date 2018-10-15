<template>
  <div class="contact">
    <x-header @on-click-back :left-options="{backText: '联系我们'}"></x-header>
    <div class="mi5-con">
      <img src="" alt="" v-lazy="mi5">
      <p class="rc-description center">当前版本1.0</p>
    </div>
    <ul class="flex flex-c contact-list">
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">商务合作</p>
        <p class="pl15"
           v-text="msg1"
           v-clipboard:copy="msg1"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError"></p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">产品建议</p>
        <p class="pl15"
           v-text="msg2"
           v-clipboard:copy="msg2"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError"></p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">客服微信</p>
        <p class="pl15"
           v-text="msg3"
           v-clipboard:copy="msg3"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError">imtoubutou</p>
      </li>
      <li class="ptb15">
        <p class="in-block">电报群</p>
        <img class="mi6-img" src="" alt="" v-lazy="mi6">
      </li>
    </ul>
    <toast width="80%" v-model="showMsg" type="text" :time="1000" is-show-mask :position="position">
      <p class="plr10">投不投：复制成功</p>
    </toast>
  </div>
</template>

<script>
import { XHeader, Toast } from 'vux'
import { MI_IMG } from "../../script/commonStatic";
export default {
  name:'Contact',
  components: {
    XHeader,
    Toast
  },
  data () {
    return{
      position:'bottom',
      msg1:'business@toubutou.com',
      msg2:'tech@toubutou.com',
      msg3:'imtoubutou',
      showMsg:false,
      mi5:MI_IMG[4],
      mi6:MI_IMG[5]
    }
  },
  methods:{
    onCopy: function (e) {
      console.log(e.text);
      this.showMsg = true;
    },
    onError: function (e) {
      console.log('无法复制文本！')
    }
  }
}
</script>
<style scoped>
  .mi5-con{
    width:6em;
    margin:0 auto;
    padding:2em 0;
  }
  .mi5-con>img{
    width:100%;
  }
  .contact-list{
    font-size:1em;
    padding:15px;
    color:#484848;
  }
  .contact-list>li{
    position:relative;
  }
  .mi6-img{
    width:6em;
    float: right;
  }
  .contact-copy{
    position:absolute;
    righit:0;
    top:0;
  }
</style>

