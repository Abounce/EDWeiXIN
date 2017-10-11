import Vue from 'vue'
import Router from 'vue-router'
// import index from 'index.html'

Vue.use(Router)

const Hpt_msg = (resolve) => {
  import('../components/hpt-msg/hpt-msg/hpt-msg.vue').then((module) => {
    resolve(module)
  })
}

const chooseDpt = (resolve) => {
  import('../components/hpt_help/my_register/choose-dpt.vue').then((module) => {
    resolve(module)
  })
}

const chooseDptDate = (resolve) => {
  import('../components/hpt_help/my_register/choose_dpt_date.vue').then((module) => {
    resolve(module)
  })
}
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

const expertIntroduce = (resolve) => {
  import('../components/hpt-msg/expert-introduction/expert-introduce.vue').then((module) => {
    resolve(module)
  })
}

const experetDetails = (resolve) => {
  import('../components/hpt-msg/expert-introduction/expert-details.vue').then((module) => {
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

//就诊人列表
const visitlIist = (resolve) => {
  import('../components/my/manage/visit-list.vue').then((module) => {
    resolve(module)
  })
}
//编辑就诊成人
const editMan = (resolve) => {
  import('../components/my/manage/edit-man.vue').then((module) => {
    resolve(module)
  })
}
//编辑就诊儿童
const editChild = (resolve) => {
  import('../components/my/manage/edit-child.vue').then((module) => {
    resolve(module)
  })
}

//更换绑定手机
const editPhone = (resolve) => {
  import('../components/my/manage/edit-phone.vue').then((module) => {
    resolve(module)
  })
}

//我的中心
const myCenter = (resolve) => {
  import('../components/my/personal-center/my-center.vue').then((module) => {
    resolve(module)
  })
}


//管理就诊卡
const manageCard = (resolve) => {
  import('../components/my/personal-center/manage-card.vue').then((module) => {
    resolve(module)
  })
}



//挂号记录
const regHistory = (resolve) => {
  import('../components/my/personal-center/reg-history.vue').then((module) => {
    resolve(module)
  })
}

//挂号记录
const myDoctor = (resolve) => {
  import('../components/my/personal-center/my-doctor.vue').then((module) => {
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
      path:'/expertIntroduce',
      name:'专家介绍',
      component:expertIntroduce
    },
    {
      path:'/experetDetails',
      name:'专家详情',
      component:experetDetails
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
    },
    {
     path:'/visitList',
      name:'就诊人列表',
      component:visitlIist
    },
    {
      path:'/editChild',
      name:'编辑儿童就诊',
      component:editChild
    },
    {
      path:'/editMan',
      name:'编辑成人就诊',
      component:editMan
    },
    {
      path:'/editPhone',
      name:'更换绑定手机',
      component:editPhone
    },

    {
      path:'/myCenter',
      name:'我的中心',
      component:myCenter
    },
    {
      path:'/regHistory',
      name:'挂号记录',
      component:regHistory
    },
    {
      path:'/manageCard',
      name:'管理就诊卡',
      component:manageCard
    },
    {
      path:'/myDoctor',
      name:'我的医生',
      component:myDoctor
    }




  ]
})
