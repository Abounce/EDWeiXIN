<template>
 <div>
      <div class="wrapper">
        <better-scroll class="wrapper-b" :data="innerList">
          <ul>
            <li  v-for="(item,index) in innerList">
               <div class="content">
                  <check-icon :value.sync="item.isUse"  class="content-one" @click.native="danChoose(item,innerList)"></check-icon>
                  <div class="content-two">
                    <div class="one">{{item.costType}}</div>
                    <div class="two">
                      <span>医生</span>
                      <span>{{item.doctorName}}</span>
                      <span>数量 {{item.itemBeans?item.itemBeans.length+1:0}}</span>
                    </div>
                    <div class="three">{{item.rcptDate}}</div>
                  </div>
                  <div class="content-three">
                      <div class="one">¥{{item.rcptMoney}}</div>
                      <div class="two" @click="seeContent(item)">查看明细</div>
                  </div>
               </div>
               <my-line></my-line>
            </li>

          </ul>
        </better-scroll>
      </div>
      <div class="bottom">

        <check-icon :value.sync="demo6"  class="bottom-one"  @click.native="allChoose">全选</check-icon>
        <div class="bottom-two">合计:{{changeMoney()}}</div>
        <div class="bottom-three" @click="surePay">确认支付</div>
      </div>
      <div v-transfer-dom class="alert">
     <popup v-model="show7" position="bottom" max-height="65%">
       <div>
           <div class="title">{{mcostType}}</div>
           <ul>
             <li v-for="(item,index) in currentList" >
               <div class="mlili" style="padding-top: 10px">
                 <div class="one-left">
                   <div>
                     {{item.itemName}} {{item.itemSpecs}}
                   </div>
                 </div>
                 <div class="one-right">
                   <div>{{item.itemNum}}盒</div>
                   <div class="price">¥{{allPrice(item)}}</div>
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
//        demo5:false,
        demo6:true,
        show7:false,
        list:[1,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11],
        innerList:[],
        currentList:[],
        mcostType:'',
//        allmoney:''
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
      allPrice(item){
        let number = item.itemNum*item.itemPrice;
        let a=(number+"").substring(0,5)
        return a

      },
      surePay(){

      },
      seeContent(item){
        this.currentList=item.itemBeans
        this.mcostType=item.costType
        this.show7=true
      },
      //全选
      allChoose(){
        if (this.demo6){
          this.innerList.forEach((item)=>{
            item.isUse=true
          })
        }else {
          this.innerList.forEach((item)=>{
            item.isUse=false
          })
        }

      },
      //单选false
      danChoose(item,innerList){
       if (!item.isUse){
         this.demo6=false
       }
        let tmep=0;
        innerList.forEach((item)=>{
         if (item.isUse){
           tmep++
         }
        })
        if(tmep===innerList.length){
          this.demo6=true
        }
      },
      //总金额
      changeMoney(){
        let allMoney=0
        this.innerList.forEach((item)=>{
          if (item.isUse){
            allMoney+=item.rcptMoney
          }
        })
        return allMoney
      }
    },

    mounted(){
      this.$nextTick(()=>{
      let minnerList = this.$loacalstore.get('hisOutDepartReceInfos');
        minnerList.forEach((item)=>{
          item.isUse=true
        })
        this.innerList=minnerList
//      console.log(innerList)
      })
    },
    watch:{

    }

  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper{
    border-top: 10px solid #eeeeee;
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
  .alert{
    .title{
      height: 44px;
      text-align: center;
      line-height: 44px;
      font-size: 17px;
      font-weight: 500;
      color: #888888;
    }
    .mlili{
      background: white;
      display: flex;
      height: 67.5px;
      font-size: 15px;
      color: #353535;
      .one-left{
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
  }

</style>
