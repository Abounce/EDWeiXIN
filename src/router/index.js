import Vue from 'vue'
import Router from 'vue-router'
// import index from 'index.html'

Vue.use(Router)

const Hpt_msg = (resolve) => {
  import('../components/hpt_msg/hpt_msg/hpt_msg.vue').then((module) => {
    resolve(module)
  })
}

const chooseDpt = (resolve) => {
  import('../components/hpt_help/my_register/choose-dpt.vue').then((module) => {
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

const Choosedptpatient = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_patient.vue').then((module) => {
    resolve(module)
  })
}

const Addpatient = (resolve) => {
  import('../components/hpt_help/my_register/add_patient.vue').then((module) => {
    resolve(module)
  })
}

const BuildCard = (resolve) => {
  import('../components/hpt_help/my_register/build_card.vue').then((module) => {
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

const OrderQuery = (resolve) => {
  import('../components/my/query/OrderQuery.vue').then((module) => {
    resolve(module)
  })
}



export default new Router({
  mode: 'history',
  routes: [
    // { path: '*', component: index },
    {
      path: '/hptmsg',
      component: Hpt_msg
    },
    {
      path: '/chooseDpt',
      name:'微信查询医生信息',
      component: chooseDpt
    },
    {
      path: '/choosedptdate',
      name: 'choosedptdate',
      component: Choosedptdate
    },
    {
      path: '/choosedptdoctor',
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
    },
    {
      path:'/choosedptpatient',
      name:'choosedptpatient',

      component:Choosedptpatient
    },
    {
      path:'/addpatient',
      // name:'choosedptpatient',
      component:Addpatient
    },
    {
      path:'/buildcard',
      component:BuildCard
    },
    {
      path:'/orderquery',
      component:OrderQuery
    }



  ]
})
