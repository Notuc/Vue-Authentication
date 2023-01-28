import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '../views/RegisterUser.vue'
import LogIn from '../views/LogIn.vue'
import LandIng from '../views/LandIng.vue'

const routes = [
    {
     path: '/registeruser',
     name: 'RegisterUser',
     component: RegisterUser,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
     },
     {
      path: '/',
      name: 'LandIng',
      component: LandIng,
     },
  ]
  

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router