<template>
 <div >
   <div class="head">
     <div class="com"><span class="com-one" style="margin-left: 16px">就诊人</span><span class="com-two">&nbsp;何园鹏</span></div>
     <div  class="com" style="padding-bottom: 14px"><span class="com-one">就诊科室</span><span class="com-two">&nbsp;外科</span></div>
     <my-line></my-line>
     <div  class="com" style="padding-bottom: 14px"><span  class="com-one">订单金额</span><span class="com-two">&nbsp;¥360.00</span></div>
     <my-line></my-line>
     <div  class="com"><span class="com-one">支付时间</span><span class="com-two"> &nbsp;2017-08-29 12:00:00</span></div>
     <div  class="com"><span class="com-one">支付方式</span><span class="com-two">&nbsp;微信支付</span></div>
   </div>

   <div class="wrapper">
     <div class="one-title">订单明细</div>
     <better-scroll :data="list" class="wrapper-one-b" >
       <ul>
         <li v-for="(item,index) in list" >
           <div class="one" style="padding-top: 10px">
             <div class="ono-left">精蛋白生物合成人胰岛素注射液(诺和灵N)
               （基本） 0.25g*30粒/盒</div>
             <div class="one-right">
               <div>1盒</div>
               <div class="price">¥60.00</div>
             </div>
           </div >
           <my-line></my-line>
         </li>
       </ul>
     </better-scroll>
   </div>
 </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export default {
    data(){
      return{

        list:[1,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11]
      }
    },
    components:{
      myLine,
      betterScroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .head{
   border-top: 10px solid #cdcdcd;
   .com{
     margin-left: 15px;
     margin-top: 14px;
     .com-one{
       font-size: 16px;
       color: #888888;
     }
     .com-two{
       font-size: 16px;
       font-weight: 500;
       color: #353535;
     }
   }
 }
  .wrapper{
    border-top: 10px solid #cdcdcd;
    margin-top: 10px;
    .one-title{
      height: 54px;
      line-height: 54px;
      font-size: 17px;
      font-weight: 500;
      color: #353535;
      margin-left: 14.5px;
    }
    .wrapper-one-b{
      position: absolute;
      top: 280px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      .one{
        display: flex;
        height: 67.5px;
        font-size: 15px;
        color: #353535;
        .one-left{
          flex: 75;
          /*padding-left: 14.5px;*/
          /*text-align: right;*/
        }
        .one-right{
          flex: 25;
          /*text-align: left;*/
          margin-right: 15.5px;
          .price{
            margin-top: 10px;
          }
        }
      }
    }
    li{
      background: white;
    }
  }
</style>
