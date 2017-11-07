import axios from 'axios'



export function getPasswordLogin(params) {
  return new Promise((resovle,reject)=>{
    axios({
      baseURL:'http://115.29.7.200:10080/api',
      url: '/user/PasswordLogin?timestamp=1509502019062',
      method:'put',
      data: params,
      headers:{
        'sign:':'591f7e1156dea2f1995f5ebd09d3c7bb',
        'Content-Type':'application/json',
      }

    }).then(body=>{
      resovle(body)
    })
      .catch((err)=>{
        reject(err)
      })
  });
}
