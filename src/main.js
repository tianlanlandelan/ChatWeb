import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './index.css'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes
})

//过滤路由，只有登录和注册页面允许未登录状态下访问
// router.beforeEach((to, from, next) => {
//   if (to.path == '/Login' || to.path == '/Register' || to.path == '/Register') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/Login' && to.path != '/Register' && to.path != '/Index') {
//     next({ path: '/Index' })
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

