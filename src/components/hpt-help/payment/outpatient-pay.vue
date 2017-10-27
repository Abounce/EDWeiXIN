<template>
  <div>
      <tab :line-width=2 active-color='#13bf72' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :height="verticalHeight+'px'" :show-dots="false" >
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="wrapper-one"    v-show="index===0">
            <better-scroll class="wrapper-a" ref="aa" :data="outList">
              <ul class="ul">
                <li class="li" v-for="(item,index) in outList">
                  <div class="clearfix" style="padding-bottom: 15px">
                    <div class="a-left">
                      <div class="name" >{{item.patName}}</div>
                      <div class="number">挂号序号:{{item.patRegisterNo}}</div>
                    </div>
                    <div class="a-right">{{item.patSex}}&nbsp;{{item.patAge}}岁</div>
                  </div>
                  <my-line></my-line>
                  <div class="clearfix" style="padding-bottom:23px">
                    <div class="b-left">¥{{allPrive(item)}}</div>
                    <div class="b-right" @click="buttonPay(item)">去支付</div>
                  </div>
                </li>
              </ul>
            </better-scroll>
          </div >
          <div class="wrapper-two"    v-show="index===1">
            <better-scroll class="wrapper-b" :data="payList">
              <ul class="ul-b">
                <li class="li-b" v-for="(item,index) in payList">
                  <div class="li-div"><span class="li-com-one" style="margin-left: 31px;">就诊人</span><span class="li-com-two">{{item.patName}}</span></div>
                  <div class="li-div"><span class="li-com-one">就诊科室</span><span class="li-com-two">{{item.deptName}}</span></div>
                  <div class="li-div"><span class="li-com-one">订单金额</span><span class="li-com-two">¥{{item.paySum}}</span></div>
                  <div class="li-div"><span class="li-com-one">支付时间</span><span class="li-com-two">{{item.payTime}}</span></div>
                  <my-line></my-line>
                   <div class="bottom" @click="buttonDeatail(item.rcptId)">
                     <span>订单详情</span>
                     <span class="icon iconfont icon-fanhui"></span>
                   </div>
                </li>
              </ul>
            </better-scroll>
          </div >
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
  import { Tab, TabItem,Swiper,SwiperItem } from 'vux'
  import {getscreenheight} from '../../../api/utils.js'
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export default {
    data(){
      return{
        list2:['未支付','支付历史'],
        index: 0,
        demo2: '未支付',
        verticalHeight:0,
        outList:[],
        innerList:[],
        payList:[]
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      myLine,
      betterScroll
    },
    mounted(){
      let screenheight = getscreenheight();
      this.verticalHeight=screenheight-44;
//      console.log(this.verticalHeight)
      this.$nextTick(()=>{
          this.getOutList()
          this.$api.getSelectPayHis().then((data)=>{
//            console.log(data)
            this.payList=data
          })
      })
    },
    methods:{
      buttonDeatail(id){
//        console.log(id)
        this.$loacalstore.set('rcptId',id)
        this.$router.push({name:'订单详情'})
      },
      buttonPay(item){
        this.$loacalstore.set('hisOutDepartReceInfos',item.hisOutDepartReceInfos);
        this.$router.push({name:'个人支付'})
      },
      getOutList(){
        this.$api.getSelectNoPay().then((data)=>{
           this.outList=data;

        })
      },
      allPrive(item){
        let allprive=0
        item.hisOutDepartReceInfos.forEach((item)=>{
           allprive+=item.rcptMoney
        })
        return allprive
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper-a{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      background: #eeeeee;
      /*background: red;*/
    .ul{
      padding-bottom: 10px;
      margin-left: 10px;
      margin-right: 10px;
     .li{
       border-radius: 5px;
       background: white;
       /*background: red;*/
       margin-top: 10.5px;
       .a-left{
          float: left;
         .name{
           margin-left: 10px;
           margin-top: 15.5px;
           font-size: 17px;
           font-weight: 500;
           color: #353535;
         }
         .number{
          margin-left: 10px;
           margin-top: 9.5px;
           font-size: 14px;
           color: #888888;
         }
       }
       .a-right{
         float: right;
         margin-top: 15px;
         margin-right: 9.5px;
       }
       .b-left{
         font-size: 18px;
         font-weight: 500;

         color: #ff8c19;
           float: left;
         margin-left: 10px;
         margin-top: 22.5px;
       }
       .b-right{
         float: right;
         width: 69px;
         height: 30px;
         border-radius: 3px;
         color: #13bf72;
         border: solid 1px #13bf72;
         text-align: center;
         line-height: 30px;
         margin-top: 15px;
         margin-right: 10px;
       }

     }

    }
  }
  .wrapper-two{
    .wrapper-b{
      background: #eeeeee;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      /*background: red;*/
      .li-b{
        padding-bottom: 10px;
        padding-top: 10px;
        background: white;
        margin-top: 10px;
        .li-div{
          margin-top: 14px;
        }
        .li-com-one{
          margin-left: 15px;

          font-size: 16px;
          text-align: right;
          color: #888888;
        }
        .li-com-two{
          margin-left: 6px;

          font-size: 17px;
          font-weight: 500;
          text-align: left;
          color: #353535;
        }
        .bottom{
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          margin-top: 16px;
          margin-bottom: 8px;
          color: #888888;
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
