<template>
  <div id="app">
    <view-box ref="viewBox">
      <router-view></router-view>
      <!--<p>{{count}}</p>-->
      <!--<button @click.prevent="$index.commit('add')">+</button>-->
      <!--<button @click.prevent="$index.commit('reduce')">-</button>-->
      <tabbar v-model="tbIndex" @on-index-change="tabbarChange" v-if="barShow">
        <tabbar-item link="/home">
          <img slot="icon" src="./assets/images/tb1.png">
          <img slot="icon-active" src="./assets/images/tb1_active.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/project">
          <img slot="icon" src="./assets/images/tb2.png">
          <img slot="icon-active" src="./assets/images/tb2_active.png">
          <span slot="label">项目</span>
        </tabbar-item>
        <tabbar-item link="">
          <img slot="icon" src="./assets/images/tb3.png">
          <img slot="icon-active" src="./assets/images/tb3_active.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, Tabbar, TabbarItem } from 'vux'
  // import {mapGetters, mapMutations, mapActions} from 'store';
  import { mapGetters, mapState } from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        tbIndex:0,
        barShow:false
      }
    },
    components: {
      ViewBox,
      Tabbar,
      TabbarItem
    },
    mounted:function(){
      console.log(this)
    },
    // 监听,当路由发生变化的时候执行
    watch:{
      $route(to,from){
        // if(to.path == '/' || to.path == '/home' || to.path == '/audioBook' || to.path == '/mine'){
        this.barShow = to.path === '/home' || to.path === '/project';
      }
    },
    computed: {
      // ...mapGetters([
      //   'tabbarShow'
      // ])
    },
    methods:{
      tabbarChange (index){
        this.tbIndex = index;
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  body {
    background-color: #fff;
  }
  #app{
    height:100%;
  }
</style>
