<template>
  <div>
    <better-scroll class="wrapper-b" :data="list">
      <ul>
        <li v-for="(item,index) in list">
          <div class="head">
            <div class="com"><span class="com-one" style="margin-left: 16px">就诊人</span><span class="com-two">&nbsp;何园鹏</span></div>
            <div  class="com" ><span class="com-one">就诊科室</span><span class="com-two">&nbsp;外科</span></div>
            <div  class="com" ><span  class="com-one">订单金额</span><span class="com-two">&nbsp;¥360.00</span></div>
            <div  class="com"><span class="com-one">支付时间</span><span class="com-two"> &nbsp;2017-08-29 12:00:00</span></div>
            <div  class="com" style="padding-bottom: 14px"><span class="com-one">支付方式</span><span class="com-two">&nbsp;微信支付</span></div>
            <my-line></my-line>
            <div class="one-title" @click="startDetail">订单明细</div>
          </div>
        </li>
      </ul>
    </better-scroll>
    <!--<div class="wrapper" v-if="isShow">-->
      <!--<better-scroll :data="list" class="wrapper-one-b" >-->
        <!--<ul>-->
          <!--<li v-for="(item,index) in list" >-->
            <!--<div class="one" style="padding-top: 10px">-->
              <!--<div class="ono-left">精蛋白生物合成人胰岛素注射液(诺和灵N)-->
                <!--（基本） 0.25g*30粒/盒</div>-->
              <!--<div class="one-right">-->
                <!--<div>1盒</div>-->
                <!--<div class="price">¥60.00</div>-->
              <!--</div>-->
            <!--</div >-->
            <!--<my-line></my-line>-->
          <!--</li>-->
            <!--<div class="two-title" @click="endDetail">收起明细</div>-->
        <!--</ul>-->
      <!--</better-scroll>-->
    <!--</div>-->
    <div v-transfer-dom class="alert wrapper">
      <popup v-model="show7" position="bottom" max-height="50%">
        <div>
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
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import {CheckIcon} from 'vux'
  import { TransferDom, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData } from 'vux'
  export default {
    directives: {
      TransferDom
    },
    data(){
      return{
        list:[1,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11],
//        isShow:false,
        show7:false,
      }
    },
    methods:{
      startDetail(){
//        this.isShow=true
        this.show7=true
      },
//      endDetail(){
//        this.isShow=false
//
//      }

    }
    ,
    components:{
      myLine,
      betterScroll,
      CheckIcon,
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XAddress,
      XButton
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper-b{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
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
    .one-title{
      height: 54px;
      line-height: 54px;
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      color: #888888;
    }
  }
  .wrapper{
    border-top: 10px solid #eeeeee;
    /*margin-top: 10px;*/

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

    li{
      background: white;
    }
    .two-title{
      height: 54px;
      line-height: 54px;
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      color: #888888;
    }
  }
</style>
