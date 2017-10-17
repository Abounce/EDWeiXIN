<template>
  <better-scroll class="allwrapper">
  <div class="wrapper-outer">
       <div>
       <ul>
         <li style="margin-top: 1px">
           <div class="head-wrapper " @click="seeNumber">
        <div class="head-one  clearfix" >
          <div class="one">
            <div class="twoo">0013</div>
          </div>
          <div class="two">
            <span>患者姓名:</span>
            <span>李伟</span>
          </div>
          <div class="three">
            退号
          </div>
        </div>
        <!--<my-line></my-line>-->
        <div class="head-two clearfix">
          <div class="one"></div>
          <div class="two">
            <div class="two-a">
              <span>预约科室:</span>
              <span>普通内科</span>
            </div>
            <div class="two-a">
              <span>医生姓名:</span>
              <span>刘伟</span>
            </div>
          </div>
        </div>
      </div>
          </li>
         <li style="margin-top: 1px">
           <div class="head-wrapper " @click="seeNumber">
             <div class="head-one  clearfix" >
               <div class="one">
                 <div class="twoo">0013</div>
               </div>
               <div class="two">
                 <span>患者姓名:</span>
                 <span>李伟</span>
               </div>
               <div class="three">
                 退号
               </div>
             </div>
             <!--<my-line></my-line>-->
             <div class="head-two clearfix">
               <div class="one"></div>
               <div class="two">
                 <div class="two-a">
                   <span>预约科室:</span>
                   <span>普通内科</span>
                 </div>
                 <div class="two-a">
                   <span>医生姓名:</span>
                   <span>刘伟</span>
                 </div>
               </div>
             </div>
           </div>
         </li>
         <li style="margin-top: 1px">
           <div class="head-wrapper " @click="seeNumber">
             <div class="head-one  clearfix" >
               <div class="one">
                 <div class="twoo">0013</div>
               </div>
               <div class="two">
                 <span>患者姓名:</span>
                 <span>李伟</span>
               </div>
               <div class="three">
                 退号
               </div>
             </div>
             <!--<my-line></my-line>-->
             <div class="head-two clearfix">
               <div class="one"></div>
               <div class="two">
                 <div class="two-a">
                   <span>预约科室:</span>
                   <span>普通内科</span>
                 </div>
                 <div class="two-a">
                   <span>医生姓名:</span>
                   <span>刘伟</span>
                 </div>
               </div>
             </div>
           </div>
         </li>
         <li style="margin-top: 1px">
           <div class="head-wrapper " @click="seeNumber">
             <div class="head-one  clearfix" >
               <div class="one">
                 <div class="twoo">0013</div>
               </div>
               <div class="two">
                 <span>患者姓名:</span>
                 <span>李伟</span>
               </div>
               <div class="three">
                 退号
               </div>
             </div>
             <!--<my-line></my-line>-->
             <div class="head-two clearfix">
               <div class="one"></div>
               <div class="two">
                 <div class="two-a">
                   <span>预约科室:</span>
                   <span>普通内科</span>
                 </div>
                 <div class="two-a">
                   <span>医生姓名:</span>
                   <span>刘伟</span>
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
          <li @click="finishOrder">
            <div>
              <div class="info">
                <div class="name">和园鹏</div>
                <div class="isUse">已退号</div>
                <div class="time">2017.10.5 12.51</div>
              </div>
              <my-line></my-line>
              <div class="com">
                <span class="com-one">就诊科室:</span><span>普通内科</span>
              </div>
              <div class="com">
                <span  class="com-one">就诊医生:</span><span>尹浩宇</span>
              </div>
              <div class="com">
                <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">我是诊断信是诊息我是诊断信息我息我是诊断信息我息
                诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断我是诊断信息我息我是诊断信</span>
              </div>
            </div>
          </li>
          <li @click="finishOrder">
            <div>
              <div class="info">
                <div class="name">和园鹏</div>
                <div class="isUse">已退号</div>
                <div class="time">2017.10.5 12.51</div>
              </div>
              <my-line></my-line>
              <div class="com">
                <span class="com-one">就诊科室:</span><span>普通内科</span>
              </div>
              <div class="com">
                <span  class="com-one">就诊医生:</span><span>尹浩宇</span>
              </div>
              <div class="com">
                <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">我是诊断信是诊息我是诊断信息我息我是诊断信息我息
                诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断我是诊断信息我息我是诊断信</span>
              </div>
            </div>
          </li>
          <li @click="finishOrder">
            <div>
              <div class="info">
                <div class="name">和园鹏</div>
                <div class="isUse">已退号</div>
                <div class="time">2017.10.5 12.51</div>
              </div>
              <my-line></my-line>
              <div class="com">
                <span class="com-one">就诊科室:</span><span>普通内科</span>
              </div>
              <div class="com">
                <span  class="com-one">就诊医生:</span><span>尹浩宇</span>
              </div>
              <div class="com">
                <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">我是诊断信是诊息我是诊断信息我息我是诊断信息我息
                诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断我是诊断信息我息我是诊断信</span>
              </div>
            </div>
          </li>
          <li @click="finishOrder">
            <div>
              <div class="info">
                <div class="name">和园鹏</div>
                <div class="isUse">已退号</div>
                <div class="time">2017.10.5 12.51</div>
              </div>
              <my-line></my-line>
              <div class="com">
                <span class="com-one">就诊科室:</span><span>普通内科</span>
              </div>
              <div class="com">
                <span  class="com-one">就诊医生:</span><span>尹浩宇</span>
              </div>
              <div class="com">
                <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">我是诊断信是诊息我是诊断信息我息我是诊断信息我息
                诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断诊断信是诊息我是诊断信息我息我是诊断信息我息我是诊断我是诊断信息我息我是诊断信</span>
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
  export default {
    components:{
      myLine,
      betterScroll
    },
    methods:{
      //预约查询就诊号
      seeNumber(){
        this.$router.push({name:"预约查询就诊号"})
      },
      //已完成预约查看
      finishOrder(){
        this.$router.push({name:'已完成预约查看'})
      }
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

    background:  #cdcdcd;
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
