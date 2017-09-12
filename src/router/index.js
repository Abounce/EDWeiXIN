import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hpt_msg = (resolve) => {
  import('../components/hpt_msg/hpt_msg/hpt_msg.vue').then((module) => {
    resolve(module)
  })
}

const My_register = (resolve) => {
  import('../components/hpt_help/my_register/my_register.vue').then((module) => {
    resolve(module)
  })
}

const See = (resolve) => {
  import('../components/hpt_help/report_see/see.vue').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    {
      path: '/hptmsg',
      component: Hpt_msg
    },
    {
      path: '/register',
      component: My_register
    },
    {
      path: '/seedemo',
      component: See
    }

  ]
})
