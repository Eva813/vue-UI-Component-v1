import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/paginationView',
      name: 'paginationView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PaginationView.vue')
    },
    {
      path: '/switchBtnView',
      name: 'switchBtnView',
      component: () => import('../views/SwitchBtnView.vue')
    },
    {
      path: '/searchBarView',
      name: 'searchBarView',
      component: () => import('../views/SearchBarView.vue')
    },
    {
      path: '/selectView',
      name: 'selectView',
      component: () => import('../views/SelectView.vue')
    },
    {
      path: '/chipsView',
      name: 'chipsView',
      component: () => import('../views/ChipsView.vue')
    },
    {
      path: '/dialogView',
      name: 'dialogView',
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/checkboxView',
      name: 'checkboxView',
      component: () => import('../views/CheckboxView.vue')
    },
    {
      path: '/expansionView',
      name: 'expansionView',
      component: () => import('../views/ExpansionView.vue')
    },
    {
      path: '/formsView',
      name: 'formsView',
      component: () => import('../views/FormsView.vue')
    },
    {
      path: '/sliderView',
      name: 'sliderView',
      component: () => import('../views/SliderView.vue')
    },
    {
      path: '/testPage',
      name: 'testPage',
      component: () => import('../views/TestPage.vue')
    },
    {
      path: '/scrollTest',
      name: 'scrollTest',
      component: () => import('../views/ScrollTest.vue')
    },
    {
      path: '/tooltipView',
      name: 'tooltipView',
      component: () => import('../views/TooltipView.vue')
    },
    {
      path: '/uploadView',
      name: 'uploadView',
      component: () => import('../views/UploadView.vue')
    },
    {
      path: '/cardView',
      name: 'cardView',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/dynamicComponent_1',
      name: 'dynamicComponent_1',
      component: () => import('../views/DynamicComponent_1.vue')
    }
  ]
})

export default router
