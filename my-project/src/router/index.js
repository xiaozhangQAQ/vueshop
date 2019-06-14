import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import addr from '@/pages/addr.vue'
import cart from '@/pages/cart.vue'
import goodsdetail from '@/pages/goodsdetail.vue'
import goodsorder from '@/pages/goodsorder.vue'
import prodetail from '@/pages/prodetail.vue'
import self from '@/pages/self.vue'
import store from '@/pages/store.vue'
import foster from '@/pages/foster.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  base:'/vueshop',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/addr',
      name: 'addr',
      component: addr
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/goodsdetail',
      name: 'goodsdetail',
      component: goodsdetail
    },
    {
      path: '/goodsorder',
      name: 'goodsorder',
      component: goodsorder
    },
    {
      path: '/prodetail',
      name: 'prodetail',
      component: prodetail
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/foster',
      name: 'foster',
      component: foster
    }
  ]
})