// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import stores from 'store'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import * as api from './api/api'
import  { ToastPlugin } from 'vux'
// import vConsole from 'vconsole'
import './common/css/index.css'
import './common/iconfont/iconfont.css'
import VueBarcode from '@xkeshi/vue-barcode'
Vue.use(ToastPlugin)
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.component('barcode', VueBarcode);
Vue.use(VueLazyload, {
  loading: require('./common/image/image@3x/Sign-in@3x.png'),
  error: require('./common/image/image@3x/Sign-in@3x.png'),//这个是请求失败后显示的图片
  attempt:3
})
Vue.prototype.$api = api;
Vue.prototype.$loacalstore=stores;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
