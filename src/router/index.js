import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MainHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    component: ()=> import('./../views/MainCategories.vue')
   },
   {
    path:'/category/:id',
    component:()=> import('./../views/MainProductCategories.vue'),
    props:true
   },
   {
    path:'/products/:id',
    component:()=> import('./../views/InsideProduct.vue'),
    props:true
   },
   {
    path:'/search/:id',
    component:()=> import('./../views/SearchBox.vue'),
    props:true
   }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
