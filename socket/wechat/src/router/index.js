import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由懒加载
// function  asyncRouter(view){
//   return async () =>{
//     return  view
//   }
// }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect : '/chat'
    },
    {
      path: '/home',
      name: 'Home',
      meta : {nav:'Home'},
      component: ()=> import('@/page/home')
    },
    {
      path: '/login',
      name: 'Login',
      meta: {nav:'Login'},
      component: ()=> import('@/page/login')
    },
    {
      path: '/chat',
      name: 'Chat',
      meta: {nav:'Chat'},
      component: ()=> import('@/page/chat')
    },
    {
      path: '/friend',
      name: 'Friend',
      meta: {nav:'Friend'},
      component: ()=> import('@/page/friend')
    }
  ]
})
