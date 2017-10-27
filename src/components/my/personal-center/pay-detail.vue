<template>
  <div>
    <better-scroll class="wrapper-b" :data="payList">
      <ul>
        <li v-for="(item,index) in payList">
          <div class="head">
            <div class="com"><span class="com-one" style="margin-left: 16px">就诊人</span><span class="com-two">&nbsp;{{item.patName}}</span></div>
            <div  class="com" ><span class="com-one">就诊科室</span><span class="com-two">&nbsp;{{item.deptName}}</span></div>
            <div  class="com" ><span  class="com-one">订单金额</span><span class="com-two">&nbsp;¥{{item.paySum}}</span></div>
            <div  class="com"><span class="com-one">支付时间</span><span class="com-two"> &nbsp;{{item.payTime}}</span></div>
            <div  class="com" style="padding-bottom: 14px"><span class="com-one">支付方式</span><span class="com-two">&nbsp;{{changePay(item.payPlatform)}}</span></div>
            <my-line></my-line>
            <div class="one-title" @click="startDetail(item.rcptId)">订单明细</div>
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
            <li v-for="(item,index) in innerList" >
              <div class="mlili" style="padding-top: 10px">
                <div class="one-left">
                  <div>
                    {{item.itemName}} {{item.itemSpecs}}
                  </div>
                </div>
                <div class="one-right">
                  <div>{{item.itemNum}}盒</div>
                  <div class="price">¥{{item.itemMoney}}</div>
                </div>
              </div >
              <my-line></my-line>
            </li>
            <li v-for="(item,index) in otherList" >
              <div class="mlili" style="padding-top: 10px">
                <div class="one-left">
                  <div>
                    {{item.costType}}
                  </div>
                </div>
                <div class="one-right">
                  <div>1次</div>
                  <div class="price">¥{{item.rcptMoney}}</div>
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
//        isShow:false,
        show7:false,
        payList:[],
        otherList:[],
        innerList:[]


      }
    },
    methods:{
      changePay(change){
       if(change==='1'){
         return '微信'
       }else if (change==='2'){
         return '支付宝'
       }else if (change==='3'){
         return '银行'
       }else {
         return '其他'
       }

      },
      startDetail(id){
//        this.isShow=true
        this.show7=true
        let params={rcptId:id}
        this.$api.getSelectPayHisDef(params).then((data)=>{
//         console.log(data)
          this.outList=data[0]
          data.forEach((item=>{
            console.log(item.rcptType)
            if(item.rcptType==='5'||item.rcptType==='6'){
              this.otherList.push(item);

//             debugger
            }else {
              item.items.forEach((inneritem)=>{
                this.innerList.push(inneritem)
//               debugger
              })
            }
          }))

        })
      },
//      endDetail(){
//        this.isShow=false
//
//      }

    },
    mounted(){
      this.$nextTick(()=>{
        this.$api.getSelectPayHis().then((data)=>{

          this.payList=data
        })
      })
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
  .mlili{
    background: white;
    display: flex;
    height: 67.5px;
    font-size: 15px;
    color: #353535;
    .one-left{
      margin-left: 14.5px;
      flex: 3;
    }
    .one-right{
      flex: 1;
      margin-right: 15.5px;
      .price{
        margin-top: 10px;
      }
    }
  }
</style>
