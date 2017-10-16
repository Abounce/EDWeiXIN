<template>
   <div>
     <div class="head">
      <div class="title">血常规检验报告</div>
      <my-line></my-line>
      <div>
       <div class="com">
         <span>报告单号:</span>
         <span>25587895544585</span>
       </div>
       <div class="com">
         <span>检验人员:</span>
         <span>李伟</span>
       </div>
       <div class="com" style="margin-bottom: 14.5px">
         <span>检验时间:</span>
         <span>2017-08-05 15:00:00</span>
       </div>
     </div>
      <my-line></my-line>
      <div>
       <div class="title-one">病人信息</div>
       <div class="com-one">
         <span>刘伟</span>
         <span style="margin-left: 40px;">男</span>
         <span style="margin-left: 40px;">36岁</span>
       </div>
       <div class="com-one" style="margin-bottom: 15px">
         <span>临床诊断:</span>
         <span>骨折型损伤，骨质疏松</span>
       </div>
     </div>
     </div>
     <div class="wrapper">
          <div class="tab">
           <div class="tab-com">项目</div>
           <div class="tab-com">结果</div>
           <div class="tab-com">单位</div>
           <div class="tab-com">参考值</div>
         </div>
          <my-line></my-line>
        <better-scroll>
          <ul>
            <li>
               <div>
                 <div>血小板计数(PL)</div>
                 <div></div>
                 <div></div>
                 <div></div>
               </div>
            </li>
          </ul>
        </better-scroll>
     </div>
   </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export  default {
    components:{
      myLine,
      betterScroll
    },
  }
</script>

<style scoped lang="less" type="text/less">
 .head{
   .title{
     height: 46px;
     text-align: center;
     line-height: 46px;
     font-size: 17px;
     font-weight: 900;
     color: #353535;
   }
   .com{
     margin-left: 14.5px;
     margin-top: 14.5px;
     font-size: 15px;
     color: #353535;
   }
   .title-one{
     margin-top: 15px;
     margin-left: 15px;
     font-size: 17px;
     font-weight: 500;
     color: #888888;
   }
   .com-one{
     margin-left: 15px;
     margin-top: 15px;
     font-size: 15px;
     font-weight: 500;
     color: #353535;
   }
 }
 .wrapper{
   .tab{
     height: 45px;
     display: flex;
     .tab-com{
       flex:1;
       text-align: center;
       font-size: 17px;
       font-weight: 500;
       line-height: 45px;
       color: #888888;

     }
   }
 }
</style>
