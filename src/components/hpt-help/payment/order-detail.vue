<template>
 <div >
   <div class="head">
     <div class="com"><span class="com-one" style="margin-left: 16px">就诊人</span><span class="com-two">&nbsp;{{outList.patName}}</span></div>
     <div  class="com" style="padding-bottom: 14px"><span class="com-one">就诊科室</span><span class="com-two">&nbsp;{{outList.deptName}}</span></div>
     <my-line></my-line>
     <div  class="com" style="padding-bottom: 14px"><span  class="com-one">订单金额</span><span class="com-two">&nbsp;¥{{outList.rcptMoney}}</span></div>
     <my-line></my-line>
     <div  class="com"><span class="com-one">支付时间</span><span class="com-two"> &nbsp;{{outList.rcptDate}}</span></div>
     <div  class="com"><span class="com-one">支付方式</span><span class="com-two">&nbsp;{{outList.platfrom}}</span></div>
   </div>

   <div class="wrapper">
     <div class="one-title">订单明细</div>
     <better-scroll :data="innerList" class="wrapper-one-b">
       <ul>
         <li v-for="(item,index) in innerList" >
           <div class="one" style="padding-top: 10px">
             <div class="ono-left">{{item.itemTypeName}} {{item.itemSpecs}}</div>
             <div class="one-right">
               <div>{{item.itemNum}}盒</div>
               <div class="price">¥{{item.itemMoney}}</div>
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

        outList:{},
        innerList:[]

      }
    },
    mounted(){
      this.$nextTick(()=>{
      let rcptId = this.$loacalstore.get('rcptId');
      let params={rcptId:rcptId}
       this.$api.getSelectPayHisDef(params).then((data)=>{
//         console.log(data[0])
         this.outList=data[0]
         this.innerList=this.outList.items
       })
      })
    },
    components:{
      myLine,
      betterScroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .head{
   border-top: 10px solid #eeeeee;
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
    border-top: 10px solid #eeeeee;
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
