<template>
 <div>
      <div class="wrapper">
        <better-scroll class="wrapper-b">
          <ul>
            <li >
               <div class="content">
                  <check-icon :value.sync="demo5"  class="content-one"></check-icon>
                  <div class="content-two">
                    <div class="one">西药费</div>
                    <div class="two">
                      <span>医生</span>
                      <span>李静</span>
                      <span>数量 1</span>
                    </div>
                    <div class="three">2017-08-29 12:00:00</div>
                  </div>
                  <div class="content-three">
                      <div class="one">¥360.00</div>
                      <div class="two" @click="seeContent">查看明细</div>
                  </div>
               </div>
               <my-line></my-line>
            </li>

          </ul>
        </better-scroll>
      </div>
      <div class="bottom">

        <check-icon :value.sync="demo6"  class="bottom-one" >全选</check-icon>
        <div class="bottom-two">合计:¥480.00</div>
        <div class="bottom-three" @click="surePay">确认支付</div>
      </div>
   <div v-transfer-dom>
     <popup v-model="show7" position="bottom" max-height="65%">

       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>   <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>   <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>   <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
       <div>aa</div>
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
        demo5:false,
        demo6:false,
        show7:false
      }
    },
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
    },
    methods:{
      surePay(){

      },
      seeContent(){
        this.show7=true
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper{
    border-top: 10px solid #cdcdcd;
    .wrapper-b{
      position: absolute;
      top: 10px;
      right: 0;
      left: 0;
      bottom: 49px;
      overflow: hidden;
      /*background: red;*/
      .content{
        display: flex;
        height: 98px;
        padding-bottom: 16px;
        .content-one{
           flex: 15;
           line-height: 98px;
           text-align: center;
        }
        .content-two{
          flex: 60;
          .one{
            margin-top: 15px;
            font-size: 17px;
            font-weight: 500;
            color: #353535;
          }
          .two{
            margin-top: 15px;
            font-size: 15px;
            font-weight: 500;
            color: #888888;
          }
          .three{
            margin-top: 10.5px;
            font-size: 15px;
            font-weight: 500;
            color: #888888;

          }
        }
        .content-three{
          flex: 25;
          .one{
            margin-top: 17px;
            font-size: 17px;
            font-weight: 500;
            color: #ff8c19;
            margin-right: 15px;
          }
          .two{
            margin-top: 38.5px;
            font-size: 13px;
            font-weight: 500;
            margin-right: 16.5px;
            color: #13bf72;
          }
        }
      }

    }
  }
  .bottom{
    height: 49px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    .bottom-one{
       flex: 30;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: #888888;
      line-height: 49px;
    }
    .bottom-two{
       flex: 40;
      font-size: 17px;
      font-weight: 900;
      text-align: left;
      color: #ff8c19;
      line-height: 49px;
    }
    .bottom-three{
      flex: 30;
      background-color: #13bf72;
      color: white;
      text-align: center;
      line-height: 49px;
    }
  }
</style>
