<template>
  <div class="tab1">
    <!--概要-->
    <h1 class="rc-title pl15 pt15">基本信息</h1>
    <ul class="plr15 tablist">
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">项目名称</p>
        <p class="pl15">Cardano</p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">代币名称</p>
        <p class="pl15">Cardano</p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">底层平台</p>
        <p class="pl15">Cardano</p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">项目类型</p>
        <p class="pl15">Cardano</p>
      </li>
      <li class="pt15 flex flex-r">
        <P CLASS="flex1">预售时间</P>
        <p class="pl15">Cardano</p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">2018/10/11 19:26</p>
        <p>~</p>
        <p class="flex1 text-r">2018/10/11 19:26</p>
      </li>
      <li class="pt15 flex flex-r">
        <P CLASS="flex1">ICO时间</P>
        <p class="pl15">Cardano</p>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <p class="flex1">2018/10/11 19:26</p>
        <p>~</p>
        <p class="flex1 text-r">2018/10/11 19:26</p>
      </li>
    </ul>
    <h1 class="rc-title pl15 pt15">社交连接</h1>
    <ul class="flex flex-a-c link-ul">
      <li class="link-li">
        <img slot="icon" src="../../assets/images/lk01.png">
      </li>
      <li class="link-li">
        <img slot="icon" src="../../assets/images/lk02.png">
      </li>
      <li class="link-li">
        <img slot="icon" src="../../assets/images/lk03.png">
      </li>
      <li class="link-li">
        <img slot="icon" src="../../assets/images/lk04.png">
      </li>
      <li class="link-li">
        <img slot="icon" src="../../assets/images/lk05.png">
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'Tab1',
  components: {

  },
  data () {
    return {

    }
  },
  mounted(){

  },
  methods: {
    onItemClick(){
      console.log("item")
    }
  }
}
</script>
<style scoped>
  .link-ul{

  }
  .link-ul>.link-li{
    width:25%;
    padding-top:15px;
  }
  .link-ul>.link-li img{
    display:block;
    width:2.8em;
    margin:0 auto
  }
</style>
