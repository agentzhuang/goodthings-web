import { createRouter, createWebHistory } from 'vue-router'
import { ElMessage } from 'element-plus'

const routes = [
  { path: '/', name: 'discover', component: () => import('../views/Discover.vue') },
  { path: '/collection', name: 'collection', component: () => import('../views/Collection.vue') },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/Upload.vue'),
    meta: { requiresAuth: true }
  },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/detail/:id', name: 'detail', component: () => import('../views/Detail.vue'), props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 鉴权守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    ElMessage.warning('请先登录')
    next('/')
  } else {
    next()
  }
})

export default router
