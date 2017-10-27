<template>
  <div class="wrapper-outer">
     <div class="header">
       <div class="header-head-wrapper">
         <div class="header-head-inner">
         </div>
       </div>
       <div class="heaer-text">您暂未绑定就诊卡</div>
        <div class="heaer-bind-card">去绑卡</div>
        <my-line></my-line>
        <div class="header-wrapper">
       <div class="com" @click="buttonGH">
         <div class="icon iconfont icon-yuyueguahao" style="color: #13bf72"></div>
         <div class="text">预约挂号</div>
       </div>
       <div class="com" @click="buttonJK">
         <div class="icon iconfont icon-jiuzhenqiatubiao" style="color: #ff8c19"></div>
         <div  class="text">在线建卡</div>
       </div>
       <div class="com" @click="buttonJF">
         <div class="icon iconfont icon-jiaofei" style="color:#1793e6;"></div>
         <div  class="text">门诊缴费</div>
       </div>
       </div>
     </div>
     <div class="history">
        <div class="title"><span class="icon iconfont icon-lishijilu" style="font-size: 15px; color: #888888;"></span>历史就诊</div>
       <better-scroll class="wrapper" ref="refbs" :data="itemList">
        <ul>
          <li v-for="(item,index) in itemList">
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
       </better-scroll>
      </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import { dateFormat } from 'vux'
  export default {
    data(){
      return{
       itemList:[]
      }
    },
    components:{
      myLine,
      betterScroll
    },
    methods:{
      buttonGH(){
        this.$router.push({name:'预约挂号'})
      },
      buttonJK(){
        this.$router.push({name:'在线建卡'})
      },
      buttonJF(){
        this.$router.push({name:'门诊支付'})
      },
      isUse(item){
        if(item.actTreatTime){
          return '已就诊'
        }else if(item.orderstatus==='4'){
          return '已退号'
        }else {
          if (dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)>item.regDate.substring(0,10)){
            return '未就诊'
          }else {
            return '已过期'
          }
        }
      },
      getList(){
        this.$api.getRegistList().then((data=>{
          data.forEach((item=>{
            if (item.actTreatTime||item.orderstatus==='4'|| dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)<item.regDate.substring(0,10)){
              this.itemList.push(item)
            }
          }))
//          this.$nextTick(()=>{
//          this.$refs.refbs.refresh()
//          })
        }))
      }
    },
    mounted(){
      this.$nextTick(()=>{
         this.getList()
      })
    },
    watch:{
      '$route' (){
        this.getList()
      }
    }
  }
//  isUse(item){
//    if(item.actTreatTime){
//      return '已就诊'
//    }else if(item.orderstatus==='4'){
//      return '已退号'
//    }else {
//      if (dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)>item.regDate.substring(0,10)){
//        return '未就诊'
//      }else {
//        return '已过期'
//      }
//    }
//  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper-outer{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:  #eeeeee;
  }
  .header{
    background: white;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    .header-head-wrapper{
      padding-top: 10px;
      height: 70px;
      .header-head-inner{
        margin: 0 auto;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: red;
      }
    }
    .heaer-text{
      text-align: center;
      font-size: 14px;
      color: #eeeeee;
    }
    .heaer-bind-card{
      width: 69px;
      height: 24px;
      border-radius: 12px;
      border: solid 0.5px #13bf72;
      color: #13bf72;
      text-align: center;
      line-height: 24px;
      margin:  10px auto 8px;


    }
    .header-wrapper{
      display: flex;
      .com{
        flex: 1;
        .icon{
          margin-top: 17px;
          text-align: center;
          font-size: 28px;
        }
        .text{
          margin-top: 16px;
          text-align: center;
          font-size: 14px;
          padding-bottom: 14.5px;
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
      position: absolute;
      top:290px;
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
</style>
