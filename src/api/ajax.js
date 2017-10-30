import axios from 'axios'
import Qs from 'qs'
// Add a request interceptor
// axios 配置

axios.defaults.baseURL = 'http://192.168.0.222:8080/weChat';
//映射外网地址
// axios.defaults.baseURL = 'http://1c775781q6.iok.la:32348/appWeChat';
axios.defaults.timeout = 5000;

let openId='ogFdDwHpeOX5dGGvjptmed1pbkMo';
let hospitalCode='pz0001';
let token='15b5c808bc0d465d8d84cf7755a50cae';
//添加一个请求拦截器
axios.interceptors.request.use((config)=>{
  // console.log('config--------:'+config)
  //在请求发出之前进行一些操作
  if (!config.url.includes('/OutDepartPay/selectPayInfo')){
    config.data = Qs.stringify(config.data);
  }
  config.url+=`?openId=${openId}&token=${token}&hospitalCode=${hospitalCode}`;
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(err);
});
//添加一个响应拦截器
axios.interceptors.response.use((res)=>{
  // console.log('res--------:'+res)

  //在这里对返回的数据进行处理
  // console.log("已经处理错误的数据")
  if (res.status === 200 && res.statusText === 'OK' && res.data.status === "OK") {
    return res.data.content
  } else {
    return Promise.reject(res)
  }
},function(err){
  //Do something with response error
  return Promise.reject(err);
})

export default axios

