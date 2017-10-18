<template>
 <div>
   <div class="history">
     <div class="title"><span class="icon iconfont icon-lishijilu" style="font-size: 15px; color: #888888;"></span>就诊记录</div>
     <better-scroll class="wrapper">
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
     </better-scroll>
   </div>
 </div>
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
      //已完成预约查看
      finishOrder(){
        this.$router.push({name:'已完成预约查看'})
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
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
      background: #cdcdcd;
      position: absolute;
      /*top:200px;*/
       top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
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
