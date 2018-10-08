<template>
  <div class="home">
    <swiper loop auto :list="baseList" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <h1 class="home-title">推荐项目</h1>
    <scroller lock-y :scrollbar-x=false>
      <ul class="recommend-ul">
        <li class="recommend-li" v-for="i in 10">
          <span>{{' ' + i + ' '}}</span>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
  import { Swiper, Scroller  } from 'vux'
export default {
  name:'Home',
  components: {
    Swiper,
    Scroller
  },
  data () {
    return {
      demo01_index: 0,
      baseList: [{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg', // 404
        title: '送你一次旅行',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
      }]
    }
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    }
  }
}
</script>

<style scoped>
  .recommend-ul {
    height: 100px;
    position: relative;
    width: 2150px;
    padding:.8em 0 1.5em 0;
  }
  .recommend-li {
    width: 200px;
    height: 100px;
    display:inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 100px;
    -moz-box-shadow:0px 1px 4px #E0E0E0;
    -webkit-box-shadow:0px 1px 4px #E0E0E0;
    box-shadow:0px 1px 4px #E0E0E0;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .home-title{
    font-size:1em;
    color:#262626;
    padding-left:15px;
    margin-top:1em;
  }
</style>
