<template>
  <div>
    <div>
       <div class="header">
         <div class="header-head"></div>
         <div class="header-name">何园鹏</div>
       </div>
      <my-line></my-line>
      <div class="category">
      <div class="category-history">
         <div  class=" icon iconfont icon-guahao one"></div>
         <div class="text">挂号记录</div>
      </div>
      <div class="category-card">
        <div class="icon iconfont icon-jiuzhenqia two"></div>
        <div class="text">管理就诊卡</div>
      </div>
      <div class="category-doctor">
        <div class="icon iconfont icon-yisheng "></div>
        <div class="text">我的医生</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  export default {
    components:{
      myLine
    }
  }
</script>

<style scoped lang="less" type="text/less">

 .header{
   height: 114.5px;
   .header-head{
     background: red;
      height: 60px;
      width: 60px;
      margin: 15px auto 10px auto;
   }
   .header-name{
    text-align: center;
   }

 }
 .category{
   margin-top: 21.5px;
   display: flex;
   .one{
     border-right: 0.5px solid #888888 ;
   }
   .two{
     border-right: 0.5px solid #888888 ;
   }
   .icon{
     font-size:28px;
     color: #888888;
     text-align: center;
   }
   .text{
     text-align: center;
     font-size: 14px;
     font-weight: 500;
     color: #888888;
   }
   .category-history{

     flex: 1;
   }
   .category-card{

     flex: 1;
   }
   .category-doctor{
     flex: 1;
   }
 }
</style>
