<template>
    <div class="wrapper-outer">
      <div class="wrapper">
        <div class="head clearfix">
           <div class="head-left">
             <div class="one">
               <span class="icon iconfont icon-yonghu" style="color: #13bf72"></span>
               <span style="vertical-align: top">李伟</span>
             </div>
             <div class="two">身份证号:510181199412210000</div>
             <div class="three" @click="changeCard">
               <span class="icon iconfont icon-genghuanzhanghao"></span>
               <span>换卡</span>
             </div>
           </div>
           <div class="head-right">
             <qrcode  :value='value1' type="img" :size="40"></qrcode>
           </div>
        </div>
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
          <div class="com" @click="buttonJKDA">
            <div class="icon iconfont icon-jiankangdangan" style="color:#ff8c19;"></div>
            <div  class="text">健康档案</div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="title"><span class="icon iconfont icon-lishijilu" style="font-size: 15px; color: #888888;"></span>历史就诊</div>
        <better-scroll class="wrapper-b" ref="refbs" :data="itemList">
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
  import { Qrcode } from 'vux'
  export default {
    data(){
      return{
        itemList:[],
        value1: 'https://www.baidu.com',
      }
    },
    components:{
      myLine,
      betterScroll,
      Qrcode
    },
    methods:{
      changeCard(){
        this.$router.push({name:'选择就诊人列表'})
      },
      buttonGH(){
        this.$router.push({name:'预约挂号'})
      },
      buttonJK(){
        this.$router.push({name:'在线建卡'})
      },
      buttonJF(){
        this.$router.push({name:'门诊支付'})
      },
      buttonJKDA(){
        this.$router.push({name:'健康档案'})
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
//          console.log(data)
          data.forEach((item=>{
            if (item.actTreatTime||item.orderstatus==='4'|| dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)<item.regDate.substring(0,10)){
                this.itemList.push(item)
            }
          }))

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
  .wrapper{
    background: white;
     margin: 10px;
     border-radius: 5px;
    .head{
      .head-left{
        float: left;
        margin-left: 10px;
        .one{
          margin-top: 16.5px;
          font-size: 17px;
          font-weight: 500;
          color: #353535;
        }
        .two{
          margin-top: 15.5px;
          font-size: 14px;
          color: #353535;
        }
        .three{
          margin-top: 20px;
          width: 69px;
          height: 24px;
          border-radius: 12px;
          color: #13bf72;
          border: solid 0.5px #13bf72;
          text-align: center;
          line-height: 24px;
          margin-bottom: 15px;
        }
      }
      .head-right{

        margin-top: 10px;
        margin-right: 10px;
        float: right;
      }
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
    .wrapper-b{
      li{
        height: 185px;
        background: white;
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
      }
      position: absolute;
      /*background: red;*/
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

  .clearfix:after{
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

</style>
