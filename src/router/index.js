import { createWebHistory, createRouter } from 'vue-router'
import HomeApp from '@/views/HomeApp.vue'
import HotelDetail from '@/views/HotelDetail.vue'
import AboutApp from '@/views/AboutApp.vue'
import HotelDescription from '@/views/HotelDescription.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp
  },
  {
    path: '/about',
    name: 'About',
    component: AboutApp
  },
  {
    path: '/hotel/:code',
    name: 'HotelDetail',
    component: HotelDetail,
    children: [
      {
        path: 'description',
        name: 'HotelDescription',
        component: HotelDescription
      }]
  },
  {
    path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
