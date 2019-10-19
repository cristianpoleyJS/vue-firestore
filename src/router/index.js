import Vue from 'vue'
import Router from 'vue-router'
import ListArticles from '../views/ListArticles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ListArticles',
      component: ListArticles
    }
  ]
})
