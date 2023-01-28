import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from './views/RegisterUser.vue'
const routes = [
    {
     path: '/registeruser',
     name: 'RegisterUser',
     component: RegisterUser,
    },
  ]
  

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router