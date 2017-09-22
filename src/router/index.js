import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hpt_msg = (resolve) => {
  import('../components/hpt_msg/hpt_msg/hpt_msg.vue').then((module) => {
    resolve(module)
  })
}

const Choosedpt = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt.vue').then((module) => {
    resolve(module)
  })
}

const Choosedptdate = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_date.vue').then((module) => {
    resolve(module)
  })
}
const Choosedptdoctor = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_doctor.vue').then((module) => {
    resolve(module)
  })
}

const Expert_itd = (resolve) => {
  import('../components/hpt_msg/expert_introduction/expert_itd.vue').then((module) => {
    resolve(module)
  })
}

const Chooseexpert = (resolve) => {
  import('../components/hpt_msg/expert_introduction/choose_expert.vue').then((module) => {
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
      path: '/choosedpt',
      component: Choosedpt
    },
    {
      path: '/choosedptdate/:deptCode',
      name: 'choosedptdate',
      component: Choosedptdate
    },
    {
      path: '/choosedptdoctor/:doctorId',
      name:'choosedptdoctor',
      component: Choosedptdoctor
    },
    {
      path: '/seedemo',
      component: See
    },
    {
      path:'/expertitd',
      component:Expert_itd
    },
    {
      path:'/chooseexpert/:doctorId',
      name:'chooseexpert',
      component:Chooseexpert
    }

  ]
})
