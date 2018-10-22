<template>
  <div class="home">
    <!--<swiper loop auto :list="baseList" v-model="demo01_index" @on-index-change="demo01_onIndexChange" @click.native="goDetial">-->
      <!---->
    <!--</swiper>-->
    <swiper loop auto :aspect-ratio="310/750" @on-index-change="banner_onIndexChange" v-model="banner_index">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerArr" :key="index" @click.native="goDetail(item.sourceId)">
        <img style="width:100%;" :src="item.imageSrc">
      </swiper-item>
    </swiper>
    <h1 class="home-title">推荐项目</h1>
    <scroller lock-y :scrollbar-x=false>
      <ul class="recommend-ul flex flex-r flex-a-i">
        <li class="recommend-li" v-for="i in 10">
          <dl class="flex flex-r flex-a-i recommend-dl">
            <dd class="flex1 rc-dd1">
              <img class="rc-dd1-img" src="../../assets/images/logo.png" alt="">
            </dd>
            <dd class="rc-dd2">
              <h1 class="rc-dd-title">量大幅降低了附近登陆</h1>
              <span class="rc-dd-state">进行中</span>
            </dd>
            <dd class="rc-dd3">
              <span class="rc-dd-grade"><i style="font-size:1.2em;">4</i>.9</span>
            </dd>
          </dl>
          <p class="rc-description">据说是世界上最牛逼的区块法律的金佛金佛i无法打开疯狂的</p>
        </li>
      </ul>
    </scroller>
    <div class="flex flex-r flex-a-i mb10">
      <h1 class="new-title flex1">最新项目</h1>
      <router-link tag='a' :to="{path: '/project'}">
        <span class="a-inner link-text pr15">更多...</span>
      </router-link>
    </div>
    <w-list></w-list>
    <divider>我是有底线的</divider>
  </div>
</template>

<script>
  import { Swiper, SwiperItem, Scroller, Flexbox, FlexboxItem, Tabbar, TabbarItem } from 'vux'
  import WList from '../Common/List.vue'
  export default {
    name:'Home',
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Flexbox,
      FlexboxItem,
      Tabbar,
      TabbarItem,
      WList
    },
    data () {
      return {
        banner_index: 0,
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
    computed:{
      ...vm.$mapState({
        bannerArr : state => state.user.bannerList
      })
    },
    mounted(){
      this.$nextTick(function () {
        this.bannerListActions()
        // Code that will run only after the
        // entire view has been rendered
      })
    },
    methods: {
      ...vm.$mapActions(['bannerListActions']),
      banner_onIndexChange (index) {
        this.banner_index = index
      },
      goDetail(id){
        if(id){
          this.$router.push({
            path: `/project/particulars/${id}`,
          })
        }else{
          //this.$vux.toast.text('没有sourceId', 'top')
          //console.error(new Error('没有sourceId'));
          console.error('没有sourceId')
        }
      }
    }
  }
</script>
<style scoped>
  .recommend-ul {
    height: 100px;
    position: relative;
    width: 1950px;
    padding:8px 0 15px 0;
  }
  .recommend-li {
    min-width:160px;
    padding:10px;
    margin-left: 15px;
    text-align: center;
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
  .new-title{
    font-size:1em;
    color:#262626;
    padding-left:15px;
  }
  /*推荐项目*/
  .rc-dd-state{
    background:#3574fa;
    color:#fff;
    font-size:10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding:1px 8px;
  }
  .rc-dd-grade{
    color:#3574fa;
    font-size:1em;
    display:block;
    text-align:right;
  }
  .rc-dd-title{
    font-size:1em;
    color:#262626;
  }
  .rc-dd2{
    max-width:54%;
  }
  .rc-dd3{
    max-width:20%;
  }
  .rc-dd-title,.rc-description{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .rc-description{
    color:#868686;
    font-size: .8em;
    padding-top:5px;
  }
  .recommend-dl>dd{
    display:block;
  }
  .rc-dd1{
    height:45px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 10%;
    position:relative
  }
  .rc-dd1-img{
    display:block;
    position:absolute;
    left:0;
    top:0;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    height:100%;
    z-Index:-1;
  }
</style>
