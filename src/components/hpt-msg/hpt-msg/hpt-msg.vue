<template>
  <div>
    <div>医院信息</div>
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

    },
   methods:{

   }
  }
</script>
<style scoped lang="less" type="text/less">
</style>
