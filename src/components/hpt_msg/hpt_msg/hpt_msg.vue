<template>
  <div>
    <header>
      <img src="hsp_imgeurl" alt="">
    </header>
    <section>
      <p><span>医院名称:</span>{{hsp_name}}</p>
      <p><span>医院等级:</span>{{hsp_grade}}</p>
      <p><span>医院咨询电话:</span>{{hsp_phone}}</p>
      <p><span>医院地址:</span>{{hsp_adress}}</p>
      <p><span>医院网址:</span>{{hsp_website}}</p>
    </section>

    <footer>
      <p><span>医院介绍:</span></p>
      <p> {{hsp_introduce}}</p>
    </footer>
  </div>
</template>

<script>
  import http from "../../../api/ajax.js"
  export default {
    data(){
      return{
      hsp_imgeurl:"",
      hsp_name:"",
      hsp_grade:"",
      hsp_phone:"",
      hsp_adress:"",
      hsp_website:"",
      hsp_introduce:""
      }
    },

    created: function () {
      // `this` 指向 vm 实例
//      this.getdata()
    },
   methods:{
//     getdata:function () {
//       http.get('http://localhost:63342/EDWeiXin/ac.html?_ijt=ufvlqrs344ihjjb7dq4bk6dq04')
//         .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
   }
  }
</script>
<style scoped lang="less" type="text/less">
</style>
