<template>
  <div class="tab1">
    <div class="plr15">
      <ul class="flex flex-r pt15">
        <li class="flex1">趋势监测</li>
        <li class="pl15">监测数据</li>
      </ul>
    </div>
    <ul class="plr15 tablist">
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <div class="flex1">
          <p style="display:inline-block;">Alexa rank</p>
          <icon @click.native="showPosition" type="info-circle" style="color:#a8a8a8;"></icon>
        </div>
        <p class="pl15">5617255 th</p>
        <toast width="80%" v-model="showInfo" type="text" :time="1000" is-show-mask>
          <p class="plr10">投不投Alexa:用于监测网站的排行情况</p>
        </toast>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <div class="flex1">
          <p style="display:inline-block;">Alexa rank</p>
          <icon @click.native="showPosition" type="info-circle" style="color:#a8a8a8;"></icon>
        </div>
        <p class="pl15">5617255 th</p>
        <toast width="80%" v-model="showInfo" type="text" :time="1000" is-show-mask>
          <p class="plr10">投不投Alexa:用于监测网站的排行情况</p>
        </toast>
      </li>
      <li class="vux-1px-b ptb15 flex flex-r flex-a-i">
        <div class="flex1">
          <p style="display:inline-block;">Alexa rank</p>
          <icon @click.native="showPosition" type="info-circle" style="color:#a8a8a8;"></icon>
        </div>
        <p class="pl15">5617255 th</p>
        <toast width="80%" v-model="showInfo" type="text" :time="1000" is-show-mask>
          <p class="plr10">投不投Alexa:用于监测网站的排行情况</p>
        </toast>
      </li>
    </ul>
    <p class="rc-description p15">数据更新于: 2018/10/12</p>
  </div>
</template>

<script>
  import { XHeader, Icon, Toast } from 'vux'
export default {
  name:'Tab1',
  components: {
    XHeader,
    Icon,
    Toast
  },
  data () {
    return {
      showInfo:false
    }
  },
  methods: {
    showPosition () {
      this.showInfo = true
    }
  }
}
</script>
<style scoped>

</style>
