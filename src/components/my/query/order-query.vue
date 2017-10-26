<template>
  <better-scroll class="allwrapper">
  <div class="wrapper-outer">
       <div>
       <ul>
         <li style="margin-top: 1px" v-for="(item,index) in upList">
           <div class="head-wrapper " @click="seeNumber(item)">
        <div class="head-one  clearfix" >
          <div class="one">
            <div class="twoo">{{item.registerNo}}</div>
          </div>
          <div class="two">
            <span>患者姓名:</span>
            <span>{{item.patName}}</span>
          </div>
          <div class="three" @click.stop="backNumber(item)">
            退号
          </div>
        </div>
        <!--<my-line></my-line>-->
        <div class="head-two clearfix">
          <div class="one"></div>
          <div class="two">
            <div class="two-a">
              <span>预约科室:</span>
              <span>{{item.deptName}}</span>
            </div>
            <div class="two-a">
              <span>医生姓名:</span>
              <span>{{item.doctorName}}</span>
            </div>
          </div>
        </div>
      </div>
          </li>

      </ul>
       </div>
       <div class="history">
      <div class="title"><span class="icon iconfont icon-lishijilu" style="font-size: 15px; color: #888888;"></span>历史就诊</div>
      <div class="wrapper">
        <ul>
          <li @click="finishOrder(item)" v-for="(item,index) in downList">
            <div>
              <div class="info">
                <div class="name">{{item.patName}}</div>
                <div class="isUse">{{isUse(item)}}</div>
                <div class="time">{{item.regDate.substring(0,10)}}</div>
              </div>
              <my-line></my-line>
              <div class="com">
                <span class="com-one">就诊科室:</span><span>{{item.deptName}}</span>
              </div>
              <div class="com">
                <span  class="com-one">就诊医生:</span><span>{{item.doctorName}}</span>
              </div>
              <div class="com">
                <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">{{item.diagnosis}}</span>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  </better-scroll>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import { dateFormat } from 'vux'
  export default {
    data(){
      return{
        upList:[],
        downList:[]
      }
    },
    components:{
      myLine,
      betterScroll,

    },
    methods:{
      //预约查询就诊号
      seeNumber(item){
        this.$loacalstore.set('seeItem',item)
        this.$router.push({name:"预约查询就诊号"})
      },
      //已完成预约查看
      finishOrder(item){
        this.$loacalstore.set('finishItem',item)
        this.$router.push({name:'已完成预约查看'})
      },
      isUse(item){
        if(item.actTreatTime){
          return '已就诊'
        }else if(item.orderstatus==='4'){
          return '已退号'
        }else {
          if (dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss').substring(0,10)<item.regDate.substring(0,10)){
            return '未就诊'
          }else {
            return '已过期'
          }
        }
      },
      //退号
      backNumber(item){
//        console.log("忒退号点击")
          let params={orderId:item.orderId,visitCardNo:item.registerNo,regDate:item.regDate.substring(0,10)}
          this.$api.getRegistCancleReg(params).then((data=>{
            this.$vux.toast.text('退号成功','middle')
          }))
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.$api.getRegistList().then((data=>{
          console.log(data)
            data.forEach((item=>{
              if(item.actTreatTime){
//                 '已就诊'
                this.downList.push(item)
              }else if(item.orderstatus==='4'){
//             '已退号'
                this.downList.push(item)
              }else {
                if (dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)<item.regDate.substring(0,10)){
//                  return '未就诊'
                  this.upList.push(item)
                }else {
//                  return '已过期'
                  this.downList.push(item)
                }
              }
            }))
        }))
      })
    }
  }
</script>

<style scoped lang="less" type="text/less">
   .allwrapper{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    /*background: yellow;*/
  }
   .wrapper-outer{

    background:  #eeeeee;
  }
   .head-wrapper{
 /*position: relative;*/
   background: white;
   height: 152px;
   .head-one{
     height: 74px;
     .one{
       float: left;
       padding-top: 15.5px;
       width: 73.5px;
       /*background: red;*/
       height: 58.5px;
       text-align: center;
       .twoo{
         line-height: 44px;
         text-align: center;
         margin: 0 auto;
         border-radius: 50%;
         width: 44px;
         height: 44px;
         color: #13bf72;
         border: solid 1px #13bf72;
       }
     }
     .two{
       font-size: 17px;
       color: #353535;
       float: left;
       line-height: 74px;
       /*display: inline-block;*/
     }
     .three{
       float: right;
       margin-top: 22.5px;
       margin-right: 15px;
       border-radius: 3px;
      color: #13bf72;
       border: solid 1px #13bf72;
     }
   }
   .head-two{
     font-size: 17px;
     /*text-align: right;*/
     color: #353535;
     height: 77.5px;
     .one{
       float: left;
       width: 73.5px;
       height: 77.5px;
       /*background: yellow;*/
     }
     .two{
       float: left;
       .two-a{
         margin-top: 15px;
       }
     }

   }
 }
   .history{
   .title{
     text-align: center;
     margin-top: 20px;
     font-size: 15px;
     color: #888888;
   }
   .wrapper{
     li{
       height: 185px;
       background: white;
       border-radius: 5px;
       margin-left: 10px;
       margin-right: 10px;
       margin-top: 10px;
     }
     position: relative;
     /*top:200px;*/
     /*left: 0;*/
     /*right: 0;*/
     /*bottom: 0;*/
     /*overflow: hidden;*/
     /*background: yellow;*/
     .info{
       position: relative;
       height: 46px;
       line-height: 46px;
       margin-left: 9.5px;

     }
     .name{
       font-size: 17px;

       color: #353535;
     }
     .time{
       font-size: 15px;
       color: #888888;
       position: absolute;
       top: 0;
       right: 20px;
     }
     .isUse{
       line-height: 18px;
       /*margin-top: 10px;*/
       text-align: center;
       position: absolute;
       top: 13.5px;
       left: 80px;
       width: 51px;
       height: 18px;
       border-radius: 9px;
       color: white;
       background-color: #e64845;
     }
     .com{
       position: relative;
       margin-left: 9.5px;
       margin-top: 14.5px;
       .com-one{
         font-size: 17px;
         color: #888888;
       }
       .zhenduan{
         margin-left:33px;
       }
       .zhenduandiv{
         position: absolute;
         top: 0;
         left:75px;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         -webkit-line-clamp: 2; //文本行数
         overflow: hidden;

       }
     }
   }
 }
   .clearfix:after{
     content: ' ';
     display: block;
     height: 0;
     clear: both;
     visibility: hidden;
   }
</style>
