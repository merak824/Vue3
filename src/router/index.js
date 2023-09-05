import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from "@/views/UserList.vue";

const routes = [
  {
    path: '/',
    name:'user_list',
    component:UserList
  },
  {
    path: '/article_list',
    name: '文章列表',
    component: () => import('../views/ArticleList.vue')
  },
  {
    path: '/article_create',
    name: '新建文章界面',
    component: () => import('../views/ArticleCreate.vue')
  },
  {
    path: '/user_list',
    name: '用户列表',
    component: () => import('../views/UserList.vue')
  },
  ,
  {
    path: '/user_create',
    name: '新增用户界面',
    component: () => import('../views/UserCreate.vue')
  }
]

const router = createRouter({
  /**
   * createWebHistory
   *    home:http://localhost:8080/
   *    about:http://localhost:8080/about
   * 此种方式需要后台配合做重定向，否则会出现404错误
   * 原理：H5 pushState() 方法
   */

  /**
   * createWebHashHistory
   *    home:http://localhost:8080/#/
   *    about:http://localhost:8080/#/about
   * 此种方式不需要后台配合做重定向
   * 原理：a标签的锚点链接
   */
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
