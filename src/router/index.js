import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: { name: 'login' },
  },
  {
      path: '/auth', name: 'auth', component: () => import('../views/Auth'), children: [
      {path:'login' , name:'login', component:()=> import('../views/Login')},
      {path:'register' , name:'register', component:()=> import('../views/Login')}
    ]
  },
  {path:'/lobby' , name:'lobby' , component: ()=> import ('../views/Lobby')},
  {
    path:'/chat' , name:'chat' , component: () => import('../views/ChatMain')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
