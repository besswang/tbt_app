import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//const components = name => () => import('@/components/' + name);
//const components = name => () => resolve => require(['@/components/'+name],resolve);
const components = name => resolve => require.ensure([], () => resolve(require('@/components/' + name)));
export default new Router({
  mode: 'history',//去掉路由中的#号
  routes: [
    {
      path: '/',
      name: 'login',
      //component: resolve => require(['@/components/Login'],resolve),//登陆
      component:components('Login')
    },
    {
      path: '/register',
      name: 'register',
      component: components('Register')//注册
    },
    {
      path: '/tcp',
      name: 'tcp',
      component: components('Tcp')//用户协议
    },
    {
      path: '/forget',
      name: 'forget',
      component: components('Forget')//忘记密码
    },
    {
      path: '/home',
      name: 'home',
      component: components('home/Home')//首页
    },
    {
      path: '/project',
      name: 'project',
      component: components('project/Project')//项目
    },
    {
      path: '/project/particulars',
      name: 'Particulars',
      component: components('project/Particulars'),//项目详情
      children:[
        {
          path: '/',
          name: 'Tab0',
          component: components('project/Tab0'),//概要
        },
        {
          path: '/project/particulars/tab0',
          name: 'Tab0',
          component: components('project/Tab0'),//概要
        },
        {
          path: '/project/particulars/tab1',
          name: 'Tab1',
          component: components('project/Tab1'),//团队

        },
        {
          path: '/project/particulars/tab2',
          name: 'Tab2',
          component: components('project/Tab2'),//财务
        },
        {
          path: '/project/particulars/tab3',
          name: 'Tab3',
          component: components('project/Tab3'),//规划
        },
        {
          path: '/project/particulars/tab4',
          name: 'Tab4',
          component: components('project/Tab4'),//热度
        },
        {
          path: '/project/particulars/tab5',
          name: 'Tab5',
          component: components('project/Tab5'),//评级
        }
      ]
    },
    {
      path: '/center',
      name: 'Mine',
      meta:{
        requireAuth:true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: components('center/Mine'),//我的
    },
    {
      path: '/center/contact',
      name: 'Contact',
      component: components('center/Contact')//联系我们
    },
    {
      path: '/center/amend',
      name: 'Amend',
      component: components('center/Amend')//修改密码
    },
    {
      path: '/center/rename',
      name: 'Rename',
      component: components('center/Rename')//修改昵称
    }

  ]

})
