<template>
    <div>
      <!--医院信息-->
      <span>医院信息</span>
      <div class="com" @click="one">医院信息</div>
      <div class="com" @click="two">就医指南</div>
      <div class="com" @click="three">特色医疗</div>
      <div class="com" @click="four">院内导诊</div>
      <div class="com" @click="five">专家介绍</div>
      <!-- 就医助手-->
      <span>就医助手</span>
      <div class="com" @click="six">我的预约</div>
      <div class="com" @click="seven">预约挂号</div>
      <div class="com" @click="eight">报告查看</div>
      <div class="com" @click="nine">门诊支付</div>
      <!--  我的-->
      <span>我的</span>
      <div class="com" @click="ten">预约查询</div>
      <div class="com" @click="eleven">管理就诊人</div>
      <div class="com" @click="twelve">我的中心</div>
      <div class="com" @click="thirteen">我的识别码</div>
    </div>
</template>

<script>
  export default {
    methods:{
      one(){
       this.$router.push({name:'医院信息'})
      },
      two(){
        this.$router.push({name:'就医指南'})
      },
      three(){
        this.$router.push({name:'特色医疗'})
      },
      four(){
        this.$router.push({name:'院内导诊'})
      },
      five(){
        this.$router.push({name:'专家介绍'})
      },
      six(){

      },
      seven(){

      },
      eight(){

      },
      nine(){

      },
      ten(){

      },
      eleven(){

      },
      twelve(){

      },
      thirteen(){

      },

    }
  }
</script>

<style scoped lang="less" type="text/less">
   .com{
      height: 30px;
      text-align: center;
      border: 1px solid green;
      line-height: 30px;
      margin-top: 5px;
    }
  span{
    color: red;
  }
</style>
