import Vue from 'vue'
import Router from 'vue-router'
// import index from 'index.html'

Vue.use(Router)

//路由控制中心
const controlCenter = (resolve) => {
  import('../components/control-center').then((module) => {
    resolve(module)
  })
}



//医院信息
const hptMsg = (resolve) => {
  import('../components/hpt-msg/hpt-msg/hpt-msg.vue').then((module) => {
    resolve(module)
  })
}

//就医指南
const hptGuide = (resolve) => {
  import('../components/hpt-msg/hpt-guide/hpt-guide.vue').then((module) => {
    resolve(module)
  })
}
//特色医疗
const hptCharacter = (resolve) => {
  import('../components/hpt-msg/htp-characteristic/hpt-character.vue').then((module) => {
    resolve(module)
  })
}
//院内导诊
const hptInner = (resolve) => {
  import('../components/hpt-msg/inner-diagnosis/hpt-inner.vue').then((module) => {
    resolve(module)
  })
}

//专家介绍
const expertIntroduce = (resolve) => {
  import('../components/hpt-msg/expert-introduction/expert-introduce.vue').then((module) => {
    resolve(module)
  })
}

//专家详情
const expertDetails = (resolve) => {
  import('../components/hpt-msg/expert-introduction/expert-details.vue').then((module) => {
    resolve(module)
  })
}

//我的预约
const myAppointment = (resolve) => {
  import('../components/hpt-help/my-appointment/my-appointment.vue').then((module) => {
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

//在线建卡
const buildCard = (resolve) => {
  import('../components/hpt-help/my-register/build-card.vue').then((module) => {
    resolve(module)
  })
}

//报告查看
const See = (resolve) => {
  import('../components/hpt-help/report-see/see.vue').then((module) => {
    resolve(module)
  })
}



//门诊支付
const outpatientPay = (resolve) => {
  import('../components/hpt-help/payment/outpatient-pay.vue').then((module) => {
    resolve(module)
  })
}

//订单详情
const orderDetail = (resolve) => {
  import('../components/hpt-help/payment/order-detail.vue').then((module) => {
    resolve(module)
  })
}
//个人支付
const goPay = (resolve) => {
  import('../components/hpt-help/payment/go-pay.vue').then((module) => {
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
//检验报告
const checkJCReport = (resolve) => {
  import('../components/my/query/checkJC-report.vue').then((module) => {
    resolve(module)
  })
}

//检查报告
const checkJYReport = (resolve) => {
  import('../components/my/query/checkJY-report.vue').then((module) => {
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

//就诊记录
const medicalDetail = (resolve) => {
  import('../components/my/personal-center/medical-detail.vue').then((module) => {
    resolve(module)
  })
}


//管理就诊卡
const manageCard = (resolve) => {
  import('../components/my/personal-center/manage-card.vue').then((module) => {
    resolve(module)
  })
}

//缴费记录
const payDetail = (resolve) => {
  import('../components/my/personal-center/pay-detail.vue').then((module) => {
    resolve(module)
  })
}

//我的识别码
const myCode = (resolve) => {
  import('../components/my/my-code/my-code.vue').then((module) => {
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
    //-----------test------------
    {
      path: '/controlCenter',
      name:'控制中心',
      component: controlCenter
    },


    //-----------医院信息---------
    {
      path: '/hptMsg',
      name:'医院信息',
      component: hptMsg
    },
    {
      path: '/hptGuide',
      name:'就医指南',
      component: hptGuide
    },
    {
      path: '/hptCharacter',
      name:'特色医疗',
      component: hptCharacter
    },
    {
      path: '/hptInner',
      name:'院内导诊',
      component: hptInner
    },
    {
      path:'/expertIntroduce',
      name:'专家介绍',
      component:expertIntroduce
    },
    {
      path:'/expertDetails',
      name:'专家详情',
      component:expertDetails
    },
    //--------就医助手--------
    {
      path:'/myAppointment',
      name:'我的预约',
      component:myAppointment
    },
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
    {
      path: '/see',
      name:'报告查看',
      component: See
    },
    {
      path:'/outpatientPay',
      name:'门诊支付',
      component:outpatientPay
    }
    ,{
      path:'/orderDetail',
      name:'订单详情',
      component:orderDetail
    }
    ,{
      path:'/goPay',
      name:'个人支付',
      component:goPay
    },

    //-------我的------
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
    {
      path:'/checkJCReport',
      name:'检查报告',
      component:checkJCReport
    },
    {
      path:'/checkJYReport',
      name:'检验报告',
      component:checkJYReport
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
    },
    {
      path:'/payDetail',
      name:'缴费记录',
      component:payDetail
    },
    {
      path:'/medicalDetail',
      name:'就诊记录',
      component:medicalDetail
    },
    {
      path:'/myCode',
      name:'我的识别码',
      component:myCode
    }
    //-----------------


    //------就医助手------


  ]
})
