import ajax from './ajax.js'

//微信查询医生信息
export function  getDoctorList(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/doctor/list',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//微信查询挂过号的医生信息
export function getDoctorPastList() {
  return new Promise((resovle,reject)=>{
    ajax.post('/doctorPast/list')
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}



//微信查询科室分类和科室信息
export function getDepartList() {
  return new Promise((resovle,reject)=>{
    ajax.post('/depart/list')
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
          hasErr(err)
        reject(err)
      })
  });
}

//微信查询医生出诊信息
export function getDoctorVisit(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/doctorVisit/list',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

// http://192.168.0.222:8080/weChat/visit/list
//获取就诊人列表
export function getVisitList(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/list',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}


export function getVisitSave(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/save',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}
//更换就诊人号码
export function getVisitUpdata(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/updata',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//解除就诊人绑定
export function getVistRemoveBind(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/removeBind',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//在线建卡
//http://192.168.0.222:8080/weChat/CardRegister/reg
export function getCardRegister(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/CardRegister/reg',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}


//发起订单
export function getRegistSub(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/regist/sub',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}


//退号
export function getRegistCancleReg(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/regist/cancleReg',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//查询已缴费列表
export function getSelectPayHis(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/OutDepartPay/selectPayHis',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//查询已缴费详情
export function getSelectPayHisDef(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/OutDepartPay/selectPayHisDef',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}



//查询门诊未付费
export function getSelectNoPay(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/OutDepartPay/selectNoPay',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}


///OutDepartPay/selectPayInfo
//门诊发起订单
// export function getSelectPayInfo(params) {
//   return new Promise((resovle,reject)=>{
//     ajax.post('/OutDepartPay/selectPayInfo','',{
//       headers:{
//         'Content-Type':'application/json'
//       },
//       data:params,
//     }).then(body=>{
//         resovle(body)
//       })
//       .catch((err)=>{
//         hasErr(err)
//         reject(err)
//       })
//   });
// }


//门诊发起订单
export function getSelectPayInfo(params) {
  return new Promise((resovle,reject)=>{
    ajax({
      method: 'post',
      url: '/OutDepartPay/selectPayInfo',
      data: params,
      headers:{
        'Content-Type':'application/json'
      }
    }).then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

//挂号记录
export function getRegistList(params) {
  return new Promise((resovle,reject)=>{
    ajax.post('/regist/list',params)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}



export function login (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/doctor/list',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}

//his检验报告
export function getSelectHisLis (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/HisAynData/selectHisLis',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}

//his检查报告
export function getSelectHisPacs (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/HisAynData/selectHisPacs',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}


//处方报告
export function getSelectHisDug (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/HisAynData/selectHisDug',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}

//查询最新一条挂号数据的his和pacs记录
export function getSelectNewestLisPacs (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/HisAynData/selectNewestLisPacs',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}
//查询医生当前号
export function getSelectDoctorCurNo (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/regist/selectDoctorCurNo',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}

//查询挂号的主诊断
export function getSelectHisDiagnosis (params) {
  return new Promise((resolve, reject) => {
    ajax.post('/regist/selectHisDiagnosis',params)
      .then(body => {
        resolve(body)
      })
      .catch((err) => {
        hasErr(err)
        reject(err)
      })

  })
}

export function hasErr(error){
  //console.error(error);
  if (error.status === 200 && error.statusText === 'OK'&& error.data.status === "OK") {
    // Message.error({
    //   title: '错误',
    //   message: error.data.errorMsg,
    //   customClass:"istop"
    // });
    // const status = response.data.errorCode;
    // INVALID_TOKEN("A00002", "非法token认证"),
    // ACCOUNT_LOCKED("100004","账户已被锁定"),
    // INVALID_PSWD("100002","密码错误"),
    // USER_NOT_EXIST("100003","用户不存在"),
    // INCOMPLETE_INFO("A00003","信息不完整"),
  }else{
    // if (error.response) {
    //     switch (error.response.status) {
    //         case 401:
    //             // 401 清除token信息并跳转到登录页面
    //             delete localStorage['token']
    //             router.push({
    //               name: '登录'
    //             })
    //     }
    // }
    // Message.error({
    //   title: '错误',
    //   message: '连接服务器出错',
    //   duration: 0,
    //   customClass:"istop"
    // });
  }
}



