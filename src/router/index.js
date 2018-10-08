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
      component: components('Home')//首页
    }
  ]
})
