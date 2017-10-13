<template>
  <div>
    <div>
       <div class="header">
         <div class="header-head"></div>
         <div class="header-name">何园鹏</div>
       </div>
      <my-line></my-line>
      <div class="category">
      <div class="category-history" @click="buttonHistory">
         <div  class="icon iconfont icon-guahao one"></div>
         <div class="text">挂号记录</div>
      </div>
      <div class="category-card" @click="buttonCard">
        <div class="icon iconfont icon-jiuzhenqia two"></div>
        <div class="text">管理就诊卡</div>
      </div>
      <div class="category-doctor" @click="buttonDoctor">
        <div class="icon iconfont icon-yisheng"></div>
        <div class="text">我的医生</div>
      </div>
        <div class="aaa"></div>
      </div>
      <div class="doctor">
        <div class="doctor-title">就医信息</div>
        <my-line></my-line>
        <div class="doctor-info">
          <div class="info-one" @click="buttonJZHistory">
            <div class="icon iconfont icon-jiuzhenxinxi" style="color: #13bf72"></div>
            <div class="text">就诊记录</div>
          </div>
          <div class="info-two" @click="buttonJFHistory">
            <div class="icon iconfont icon-jiaofeijilu" style="color:#1793e6"></div>
            <div class="text">缴费记录</div>
          </div>
          <div class="info-three" @click="buttonReportSee">
            <div class="icon iconfont icon-baogao" style="color:#ff8c19"></div>
            <div class="text">报告查看</div>
          </div>
          <div class="info-four"></div>
        </div>
      </div>
      <div class="doctor">
        <div class="doctor-title">就医信息</div>
        <my-line></my-line>
        <div class="doctor-info">
          <div class="info-one" @click="buttonGH">
            <div class="icon iconfont icon-yuyueguahao" style="color: #13bf72"></div>
            <div class="text">预约挂号</div>
          </div>
          <div class="info-two" @click="buttonJF">
            <div class="icon iconfont icon-jiaofei" style="color:#1793e6"></div>
            <div class="text">门诊缴费</div>
          </div>
          <div class="info-three" @click="buttonJK">
            <div class="icon iconfont icon-jiuzhenqiatubiao" style="color:#ff8c19"></div>
            <div class="text">在线建卡</div>
          </div>
          <div class="info-four" @click="buttonGL">
            <div class="icon iconfont icon-gonglve1" style="color: #13bf72"></div>
            <div class="text">就医攻略</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  export default {
    methods:{
      //挂号记录
      buttonHistory(){
       this.$router.push({name:'挂号记录'})
      },
      //管理就诊卡
      buttonCard(){
       this.$router.push({name:'管理就诊卡'})
     },
      //我的医生
      buttonDoctor(){
        this.$router.push({name:'我的医生'})
      },
      //就诊记录
      buttonJZHistory(){

      },
      //缴费记录
      buttonJFHistory(){

      },
      //报告查看
      buttonReportSee(){

      }
      ,
      //预约挂号
      buttonGH(){
        this.$router.push({name:'预约挂号'})
      }
      ,
      //门诊缴费
      buttonJF(){

      }
      ,
      //在线建卡
      buttonJK(){
        this.$router.push({name:'在线建卡'})
      }
      ,
      //就医攻略
      buttonGL(){

      }
    },
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
     margin-top: 10px;
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
 .doctor{
   border-top: 9.5px solid #cdcdcd;
   margin-top: 19px;
   height: 121px;
   .doctor-title{
     margin-left: 14.5px;
     height: 44px;
     font-size: 16px;
     line-height: 44px;
     color: #353535;
   }
   .doctor-info{
     display: flex;
     margin-top: 14px;
     .text{
       text-align: center;
       font-size: 14px;
       color: #353535;
       margin-top: 10px;
     }
     .icon{
       font-size:28px;
       color: #888888;
       text-align: center;
     }
     .info-one{
       flex: 1;
     }
     .info-two{
       flex: 1;
     }
     .info-three{
       flex: 1;
     }
     .info-four{
       flex: 1;
     }
   }

 }
</style>
