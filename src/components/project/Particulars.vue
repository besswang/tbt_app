<template>
  <div class="particulars" style="margin-top:46px;">
    <x-header :left-options="{showBack: true,backText:'项目详情'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      <img class="header-right" slot="right" v-lazy="share" alt="" :src="share" @click="shareShow = true">
    </x-header>
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
    <div class="pltr15 vux-1px-t">
      <flexbox align="center">
        <flexbox-item :span="1/6">
          <img class="block radius50" style="width:100%;" :src="this.detail.projectLogo" alt="">
        </flexbox-item>
        <flexbox-item :span="3/6" align="center">
          <h5 class="rc-title ellipsis text-l">{{this.detail.projectName}}</h5>
          <p class="rc-description ellipsis text-l">{{this.detail.token}}</p>
        </flexbox-item>
        <flexbox-item align="right">
          <span class="grade-big text-r">
            <i style="font-size:1.2em;">{{projectScoreF}}</i>.{{textL}}
          </span>
        </flexbox-item>
      </flexbox>
      <flexbox align="center" class="pt10 pb15">
        <flexbox-item :span="1/3"
           v-clipboard:copy="this.detail.homePage"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError">
          <span v-lazy:background-image="pro1" class="pro-icon"><i class="in-block" style="width:16px;"></i>官方网站</span>
        </flexbox-item>
        <flexbox-item :span="1/3" style="margin-left:0;">
          <span v-lazy:background-image="pro2" class="pro-icon" @click="paperShow = true"><i class="in-block" style="width:16px;"></i>白皮书</span>
        </flexbox-item>
        <flexbox-item align="right">
          <span class="rc-state text-r">{{projectStage}}</span>
        </flexbox-item>
      </flexbox>
      <p class="rc-description" :class="ellipsis2">{{this.detail.projectSummary}}</p>
      <img v-show="flag" :src="pro3" v-lazy="pro3" alt="" class="pro3" @click="changeDown">
      <img v-show="!flag" :src="pro4" v-lazy="pro4" alt="" class="pro3" @click="changeUp">
    </div>
    <!--白皮书-->
    <div v-transfer-dom>
      <actionsheet
        v-model="paperShow"
        :menus="paperMenu"
        theme="android"
        show-cancel
        @on-click-menu="paperClick"
        @on-after-hide="paperLog('after hide')"
        @on-after-show="paperLog('after show')">
      </actionsheet>
    </div>
    <div style="height:44px;">
      <sticky
        scroll-box="vux_view_box_body"
        ref="sticky"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <tab v-model="tabSelected" prevent-default @on-before-index-change="switchTabItem">
          <tab-item v-for="n in tabTitle" :key="n">{{ n }}</tab-item>
        </tab>
      </sticky>
    </div>

    <swiper v-model="tabSelected" height="700px" :show-dots="false">
      <swiper-item v-for="n in tabTitle" :key="n">
        <div class="tab-swiper vux-center">
          <router-view></router-view>
        </div>
      </swiper-item>
    </swiper>
    <toast width="80%" v-model="showMsg" type="text" :time="1000" is-show-mask :position="position">
      <p class="plr10">投不投：复制成功</p>
    </toast>
  </div>
</template>

<script>
  import {Actionsheet, Flexbox, FlexboxItem, Tab, TabItem, XHeader, Swiper, SwiperItem, Sticky, Toast } from 'vux'
  import {PROJECT_IMG} from '../../script/commonStatic'
  export default {
  name:'Particulars',
  components: {
    XHeader,
    Actionsheet,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Sticky,
    Toast
  },
  data () {
    return {
      textL:0,
      showMsg:false,
      position:'bottom',
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      tabSelected:0,//当前tab
      paperMenu: {
        menu1: '商业白皮书',
        menu2: '商业白皮书',
        menu3: '商业白皮书'
      },
      paperShow:false,//白皮书
      tabTitle:['概要', '团队', '财务', '规划', '热度','评级'],
      flag:true,
      ellipsis2:'ellipsis2',
      share: PROJECT_IMG[0],
      pro1:PROJECT_IMG[1],
      pro2:PROJECT_IMG[2],
      pro3:PROJECT_IMG[3],
      pro4:PROJECT_IMG[4],
      look: 'fjldfj',
      shareShow:false,
      shareMenus: {
        menu1: '微信',
        menu2: '朋友圈',
        menu3: '保存相册'
      }
    }
  },
  computed:{
    ...vm.$mapGetters(['projectStage']),
    ...vm.$mapState({
      detail:state => state.project.detail
    }),
    projectScoreF(){
      let text = this.detail.projectScore
      if(text){
        let t = Array.from(String(text))
        if(t.length===1){
          this.textL = 0
          return text
        }else{
          let [x,y,z] = t
          this.textL = z
          return x
        }
      }
    }
    // first(){
    //   return this.$global.first(this.detail.projectScore)
    // },
    // last(){
    //   return this.$global.last(this.detail.projectScore)
    // },
  },
  mounted(){
    let id = this.$route.params.id
    //项目详情
    //this.goDetail(id)
    this.goDetail(15)
    //概要
    this.getSummary(id)
  },
  methods: {
    ...vm.$mapActions(['goDetail','getSummary']),
    //复制
    onCopy: function (e) {
      console.log(e.text);
      this.showMsg = true;
    },
    onError: function (e) {
      console.log('无法复制文本！')
    },
    switchTabItem (index) {
      // console.log('on-before-index-change', index)
      // this.$vux.loading.show({
      //   text: 'loading'
      // })
      // setTimeout(() => {index
      //   this.$vux.loading.hide()
        this.tabSelected = index
        this.$router.push({path:'/project/particulars/tab'+index})
      // }, 800)
    },
    log (str) {
      console.log(str)
    },
    paperLog (str){
      console.log(str)
    },
    shareClick (key) {
      console.log(key)
    },
    paperClick (key) {
      console.log(key)
    },
    changeDown(){
      this.ellipsis2 = '';
      this.flag = false;
    },
    changeUp(){
      this.ellipsis2 = 'ellipsis2'
      this.flag = true
    }
  },
    watch:{
      tabSelected:function (val, oldValue) {
        if(this.tabSelected === val ){
          this.switchTabItem(val);
        }
      }
    }
  // 监听,当路由发生变化的时候执行
  // watch:{
  //   $route(to,from){
  //     // if(to.path == '/' || to.path == '/home' || to.path == '/audioBook' || to.path == '/mine'){
  //     if(to.path === '/project/particulars'){
  //       console.log("lulu")
  //       this.$router.push({path:'/project/particulars/tab1'})
  //     }
  //   }
  // },
}
</script>
<style scoped>
  .header-right{
    width:1.2em;
  }
  .pro-icon{
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: 8px center ;
    color:#3574fa;
    font-size:10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    padding: 0 8px;
    box-sizing: border-box;
    border:1px solid #3574fa;
    text-indent: 30px;
  }
  .pro3{
    padding:10px 0;
    margin:0 auto;
    display:block;
    width:16px;
  }
</style>
