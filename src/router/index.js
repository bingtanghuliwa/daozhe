import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Index from '@/pages/index/index'
import City from '@/pages/city/index'
import OnedayTour from '@/pages/onedayTour/index'
import OnedayList from '@/pages/onedaylist/oneday-list'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/index',
      name: 'index',
      component: Index
    },

    {
      path: '/city',
      name: 'city',
      component: City
    },

    {
      path: '/onedayTour',
      name: 'OnedayTour',
      component: OnedayTour
    },{
       path: '/onedayList',
      name: 'OnedayList',
      component: OnedayList
    } 
  ]
})
