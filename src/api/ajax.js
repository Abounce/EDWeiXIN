import axios from 'axios'
import Qs from 'qs'
// Add a request interceptor
// axios 配置

axios.defaults.baseURL = 'http://192.168.0.222:8080/appWeChat';
//映射外网地址
// axios.defaults.baseURL = 'http://1c775781q6.iok.la:32348/appWeChat';
axios.defaults.timeout = 5000;

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  config.data = Qs.stringify(config.data);
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(err);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
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

