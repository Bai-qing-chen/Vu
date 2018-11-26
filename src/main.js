// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 导入静态资源assets里面的小包工具*/
import $http from '@/assets/http.js'
Vue.use($http)

/* 导入Element-ui*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*导入默认样式*/
import './assets/base.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

/*#app百分之百高度*/ 
import './App.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
