import Vue from 'vue'
import Router from 'vue-router'
import ws from '@/server/index.js'

Vue.use(Router)

//路由懒加载
// function  asyncRouter(view){
//   return async () =>{
//     return  view
//   }
// }



const router = new Router({
  mode: 'history', 
  routes: [
    {
      path: '/',
      name: 'Login',
      redirect : '/login'
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

router.beforeEach((to,form,next)=>{
   // 未开启长连接需要打开长连接
   if (ws.readyState === 'NOCREATE') {
     console.log('打开长连接')
    ws.open();
  }
  return next()
})



export default router;
