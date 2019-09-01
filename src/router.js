import Vue from 'vue'
import Router from 'vue-router'
import Home from "../src/views/home"
import Show from "../src/views/show"
import Pah from "../src/views/pah"
import Shu from "../src/views/shu"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home",
    }, {
      path: "/home",
      component: Home,
    }, {
      path: "/show",
      component: Show
    }, {
      path: "/pah",
      component: Pah
    }, {
      path: "/shu",
      component: Shu
    }
  ]
})
