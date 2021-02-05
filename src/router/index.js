import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart/cart.vue')
  }, 
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category/category.vue')
  },
    {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
    {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile/profile.vue')
  },
  {
    path:'/test',
    name:'test',
    component:() => import('../utils/test.vue')
  },
  {
    path:'/tabletList',
    name:'tabletList',
    component:() => import('../views/tabletList/tabletList.vue')
  },
  {
    path:'/lenList',
    name:'lenList',
    component:() => import('../views/lenList/testList.vue')
  },
    {
    path:'/one',
    name:'one',
    component:() => import('../views/codeShow/one.vue')
  },
    {
    path:'/vioLis',
    name:'vioLis',
    component:() => import('../views/videoList/vioLis.vue')
  },
    {
    path:'/tabletOne',
    name:'tabletOne',
    component:() => import('../views/tabletList/tabletOne.vue')
  },{
    path:'/tableTwo',
    name:'tableTwo',
    component:() => import('../views/tabletList/tableTwo.vue')
  },
  {
    path:'/tableShree',
    name:'tableShree',
    component:() => import('../views/tabletList/tableShree.vue')
  },
  {
     path:'/tableFore',
    name:'tableFore',
    component:() => import('../views/tabletList/tableFore.vue')
  },
  {
    path:'/tableFive',
    name:'tableFive',
    component:() => import('../views/tabletList/tableFive.vue')
  },
  {
    path:'/tableForm',
    name:'tableForm',
    component:() => import('../views/tabletList/tableForm.vue')
  },
  {
    path:'/listOne',
    name:'listOne',
    component:() => import('../views/tabletList/listOne.vue')
  },
  {
    path:'/tableShreeTwo',
    name:'tableShreeTwo',
    component:() => import('../views/tabletList/tableShreeTwo.vue')
  },
  {
    path:'/lodashLength',
    name:'tableShreeTwo',
    component:() => import('../views/lodash/lodashLength.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history', //这里的模式是更改浏览器地址是否带#号
  base: process.env.BASE_URL,
  routes
})

export default router
