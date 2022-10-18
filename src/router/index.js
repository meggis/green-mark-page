import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'
import WorkDetails from '../views/WorkDetails.vue'
import NotFound from '../views/404.vue'
import Offer from '../views/Offer.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/work-details/:id',
    name:'Work-Details',
    component: WorkDetails
  },
  {
    path: '*', 
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/Offer',
    name: 'Offer',
    component: Offer
  },
]

const router = new VueRouter({
  routes
})

export default router
