<template>
  <div class="list">
    <!--project-list项目列表-->
    <div class="new-list vux-1px-tb" @click="goParticulars">
      <flexbox align="center">
        <flexbox-item :span="1/4">
            <img class="block radius50" style="width:100%;" src="../../assets/images/logo.png" alt="">
        </flexbox-item>
        <flexbox-item>
          <ul class="flex flex-r flex-a-i">
            <li class="flex1">
              <h1 class="rc-title ellipsis">量大幅降低了附近登陆</h1>
              <span class="rc-state">进行中</span>
            </li>
            <li class="rc-dd3 pl15">
              <span class="grade"><i style="font-size:1.2em;">4</i>.9</span>
            </li>
          </ul>
          <p class="rc-description ellipsis">据说是世界上最牛逼的区块法律的金佛金佛i无法打开疯狂的</p>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="new-list vux-1px-tb">
      <flexbox align="center">
        <flexbox-item :span="1/4">
          <img class="block radius50" style="width:100%;" src="../../assets/images/logo.png" alt="">
        </flexbox-item>
        <flexbox-item>
          <ul class="flex flex-r flex-a-i">
            <li class="flex1">
              <h1 class="rc-title ellipsis">量大幅降低了附近登陆</h1>
              <span class="rc-state">进行中</span>
            </li>
            <li class="rc-dd3 pl15">
              <span class="grade"><i style="font-size:1.2em;">4</i>.9</span>
            </li>
          </ul>
          <p class="rc-description ellipsis">据说是世界上最牛逼的区块法律的金佛金佛i无法打开疯狂的</p>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="new-list vux-1px-tb">
      <flexbox align="center">
        <flexbox-item :span="1/4">
          <img class="block radius50" style="width:100%;" src="../../assets/images/logo.png" alt="">
        </flexbox-item>
        <flexbox-item>
          <ul class="flex flex-r flex-a-i">
            <li class="flex1">
              <h1 class="rc-title ellipsis">量大幅降低了附近登陆</h1>
              <span class="rc-state">进行中</span>
            </li>
            <li class="rc-dd3 pl15">
              <span class="grade"><i style="font-size:1.2em;">4</i>.9</span>
            </li>
          </ul>
          <p class="rc-description ellipsis">据说是世界上最牛逼的区块法律的金佛金佛i无法打开疯狂的</p>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name:'List',
    components: {
      Flexbox,
      FlexboxItem,
    },
    data () {
      return {

      }
    },
    methods: {
      goParticulars(){
        this.$router.push({path:'/project/particulars'})
      }
    }
  }
</script>
<style scoped>
  /*推荐项目*/
  .rc-dd3{
    max-width:20%;
  }
  .recommend-dl>dd{
    display:block;
  }
  /*最新项目*/
  .new-list{
    padding:10px 15px;
  }
  .new-list + .new-list{
    margin-top:10px;
  }
</style>
