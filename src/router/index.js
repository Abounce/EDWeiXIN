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

//Choosedptdate
const chooseDptDate = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_date.vue').then((module) => {
    resolve(module)
  })
}
//Choosedptdoctor
const chooseDptDoctor = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_doctor.vue').then((module) => {
    resolve(module)
  })
}

const Choosedptpatient = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_patient.vue').then((module) => {
    resolve(module)
  })
}

const addPatient = (resolve) => {
  import('../components/hpt_help/my_register/add_patient.vue').then((module) => {
    resolve(module)
  })
}

const buildCard = (resolve) => {
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
      name:'选择科室',
      component: chooseDpt
    },
    {
      path: '/chooseDptDate',
      name: '选择挂号日期',
      component: chooseDptDate
    },
    {
      path: '/chooseDptDoctor',
      name:'选择挂号医生',
      component: chooseDptDoctor
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
      path:'/addPatient',
      name:'添加就诊人',
      component:addPatient
    },
    {
      path:'/buildCard',
      name:'在线建卡',
      component:buildCard
    },
    {
      path:'/orderquery',
      component:OrderQuery
    }



  ]
})
