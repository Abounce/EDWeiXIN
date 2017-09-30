import ajax from './ajax.js'

//微信查询医生信息
export function  getdoctorlist(word) {
  return new Promise((resovle,reject)=>{
    ajax.post('/doctor/list',word)
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
export function getdoctorpastlist() {
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
export function getdepartlist() {
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
export function getdoctorvisit(startdata) {
  return new Promise((resovle,reject)=>{
    ajax.post('/doctorVisit/list',startdata)
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
export function getvisitlist(startdata) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/list',startdata)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}

export function getvisitsave(startdata) {
  return new Promise((resovle,reject)=>{
    ajax.post('/visit/save',startdata)
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
export function getCardRegister(tempData) {
  return new Promise((resovle,reject)=>{
    ajax.post('/CardRegister/reg',tempData)
      .then(body=>{
        resovle(body)
      })
      .catch((err)=>{
        hasErr(err)
        reject(err)
      })
  });
}



export function login (name) {
  return new Promise((resolve, reject) => {
    ajax.post('/doctor/list',name)
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



