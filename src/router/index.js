import Vue from 'vue'
import Router from 'vue-router'
// import index from 'index.html'

Vue.use(Router)

const hptMsg = (resolve) => {
  import('../components/hpt-msg/hpt-msg/hpt-msg.vue').then((module) => {
    resolve(module)
  })
}

//预约挂号
const chooseDpt = (resolve) => {
  import('../components/hpt-help/my-register/choose-dpt.vue').then((module) => {
    resolve(module)
  })
}

const chooseDptDate = (resolve) => {
  import('../components/hpt-help/my-register/choose-dpt-date.vue').then((module) => {
    resolve(module)
  })
}
const chooseDptDoctor = (resolve) => {
  import('../components/hpt-help/my-register/choose-dpt-doctor.vue').then((module) => {
    resolve(module)
  })
}

const Choosedptpatient = (resolve) => {
  import('../components/hpt-help/my-register/choose-dpt-patient.vue').then((module) => {
    resolve(module)
  })
}

const addPatient = (resolve) => {
  import('../components/hpt-help/my-register/add-patient.vue').then((module) => {
    resolve(module)
  })
}

const buildCard = (resolve) => {
  import('../components/hpt-help/my-register/build-card.vue').then((module) => {
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
  import('../components/hpt-help/report-see/see.vue').then((module) => {
    resolve(module)
  })
}

//预约查询
const orderQuery = (resolve) => {
  import('../components/my/query/order-query.vue').then((module) => {
    resolve(module)
  })
}

//预约查询就诊号
const orderQueryNumber = (resolve) => {
  import('../components/my/query/order-query-number.vue').then((module) => {
    resolve(module)
  })
}

//已完成预约查看
const finishOrder = (resolve) => {
  import('../components/my/query/finish-order.vue').then((module) => {
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
      path: '/seedemo',
      component: See
    },
    {
      path: '/hptMsg',
      component: hptMsg
    },

    //-------预约查询------
    {
      path:'/orderQuery',
      name:'预约查询',
      component:orderQuery
    },
    {
      path:'/orderQueryNumber',
      name:'预约查询就诊号',
      component:orderQueryNumber
    },
    {
      path:'/finishOrder',
      name:'已完成预约查看',
      component:finishOrder
    },
    //---------------------


    //---------预约挂号------------
    {
      path: '/chooseDpt',
      name:'预约挂号',
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
      path:'/chooseDptPatient',
      name:'选择就诊人',
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
   //--------------------------

   //---------专家介绍------
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
    //--------------------------



    //-------就诊人列表----------
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
   //-----------------------

    //----------我的中心-----------
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
    //-----------------------


  ]
})
