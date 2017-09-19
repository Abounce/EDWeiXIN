// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import stores from './store/index'
import store from 'store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import * as api from './api/api'
// import vConsole from 'vconsole'
import './common/css/reset.css'
Vue.config.productionTip = false
FastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('./common/image/default.png')
})
Vue.prototype.$api = api;
Vue.prototype.$loacalstore=store;

/* eslint-disable no-new */
new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#app-box')
