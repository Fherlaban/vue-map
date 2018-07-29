import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
