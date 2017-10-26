<template>
   <div>
     <div class="head">
      <div class="title">{{itemJY.rptName}}</div>
      <my-line></my-line>
      <div>
       <div class="com">
         <span>报告单号:</span>
         <span>{{itemJY.rptNo}}</span>
       </div>
       <div class="com">
         <span>检验人员:</span>
         <span>{{itemJY.iptDoctor}}</span>
       </div>
       <div class="com" style="margin-bottom: 14px">
         <span>检验时间:</span>
         <span>{{itemJY.rptTime}}</span>
       </div>
     </div>
      <my-line></my-line>
      <div>
       <div class="title-one">病人信息</div>
       <div class="com-one">
         <span>{{itemJY.patientName}}</span>
         <span style="margin-left: 40px;">{{itemJY.sex==='1'?'男':'女'}}</span>
         <span style="margin-left: 40px;">{{itemJY.age}}岁</span>
       </div>
       <div class="com-one" style="margin-bottom: 15px">
         <span>临床诊断:</span>
         <span>{{itemJY.testResults}}</span>
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
        <better-scroll class="li-wrapper" :data="itemList">
          <ul>
            <li v-for="(item,index) in itemList">
               <div class="li">
                 <div class="li-com">{{item.iptKpi}}</div>
                 <div class="li-com">
                   <span>{{item.measureValue}}</span>
                   <span></span>
                 </div>
                 <div class="li-com">10^9/L</div>
                 <div class="li-com">
                   <div>{{(check(item.referenceValue))}}</div>
                   <div>{{checkOne(item.referenceValue)}}</div>
                 </div>
               </div>
                <my-line></my-line>
            </li>
          </ul>
        </better-scroll>
        <div class="bottom">申明：此报告仅对该检测负责，仅供临床医生参考！</div>
     </div>
   </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export  default {
    methods:{
      check(data){
      let result=  data.substring(data.indexOf("(")+1,data.indexOf(")"))
        return result
      },
      checkOne(data){

       let split = data.split('（');
//       console.log(split)
        return split[0]
      }
    },
    data(){
      return{
        itemJY:{},
        itemList:[]
      }
    },
    components:{
      myLine,
      betterScroll
    },
    mounted(){
      this.$nextTick(()=>{
      this.itemJY=  this.$loacalstore.get('itemJY');
      this.itemList=this.itemJY.items;
      })
    }
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
     border-top: 10px solid #eeeeee;
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
   .li-wrapper{
     overflow: hidden;
     position: absolute;
     /*background: red;*/
     top: 318px;
     right: 0;
     left: 0;
     bottom: 30px;
     .li{
       margin-top: 15px;
       display: flex;
       height: 47.5px;
       padding-bottom: 30px;
       .li-com{
         /*line-height: 62.5px;*/
         flex: 1;
         text-align: center;
       }
     }
   }

   .bottom{
     background: #eeeeee;
     position: absolute;
     left: 0;
     right: 0;
     bottom: 0;
     height: 30px;
     text-align: center;
     line-height: 30px;
     font-size: 13px;
     color: #888888;
   }
 }
</style>
