<template>
  <div class="wrapper-all">
   <div class="head-wrapper">
       <div class="head-one">
         <div class="one">{{finishItem.patName}}</div>
         <div class="two">{{finishItem.regDate}}</div>
       </div>
       <my-line></my-line>
       <div class="com">
         <span class="one">就诊科室:</span>
         <span class="two">{{finishItem.deptName}}</span>
       </div>
       <div class="com">
         <span class="one">就诊医生:</span>
         <span class="two">{{finishItem.doctorName}}</span>
       </div>
       <div class="com">
         <span class="one">挂号序号:</span>
         <span class="two">{{finishItem.registerNo}}</span>
       </div>
       <div class="com">
         <span class="one" style="margin-left: 34px">诊断:</span>
         <span class="two">{{zhuzhenduan.diagnosis}}</span>
       </div>
       <div class="com">
         <span class="one" style="margin-left: 34px">费别:</span>
         <span class="two">{{zhuzhenduan.costType}}</span>
       </div>
     </div>
   <div class="category">
      <tab :line-width=2 active-color='#13bf72' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :height="verticalHeight+'px'"  style="background: #eeeeee" :show-dots="false" class="swiper">
        <swiper-item v-for="(item, index) in list2" :key="index"  >
          <div class="wrapper-one"    v-show="index===0">
          <div class="one-title">处方明细</div>
            <better-scroll :data="list" class="wrapper-one-b" >
              <ul>
                <li v-for="(item,index) in list" >
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
              </ul>
            </better-scroll>
          </div >
          <div class="wrapper-two"    v-show="index===1">
            <better-scroll :data="dataListJy" class="wrapper-one-c" >
              <ul>
                <li v-for="(item,index) in dataListJy" @click="buttonJY(item)">
                 <div class="two">
                   <div class="two-left">
                     <div class="two-one">{{item.rptName}}</div>
                     <div class="two-two">{{item.rptTime}}</div>
                   </div>
                   <div  class="icon iconfont icon-fanhui two-right"></div>
                 </div>
                </li>
              </ul>
            </better-scroll>
          </div>
          <div class="wrapper-three"  v-show="index===2">
            <better-scroll :data="dataListJC" class="wrapper-one-d" >
              <ul>
                <li v-for="(item,index) in dataListJC" @click="buttonJC(item)">
                  <div class="two">
                    <div class="two-left">
                      <div class="two-one">{{item.rptName}}</div>
                      <div class="two-two">{{item.rptTime}}</div>
                    </div>
                    <div  class="icon iconfont icon-fanhui two-right"></div>
                  </div>
                </li>
              </ul>
            </better-scroll>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  import {getscreenheight} from '../../../api/utils.js'
  import betterScroll from '../../../common/component/betterscroll.vue'
    export default {
    data(){
      return{
        list2:['门诊处方','检验报告','检查报告'],
        index: 0,
        demo2: '门诊处方',
        verticalHeight:0,
        list:[1,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11],
        finishItem:{},
        dataListJy:[],
        dataListJC:[],
        zhuzhenduan:''

      }
    },
    components:{
      myLine,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      betterScroll,

    },
    mounted(){
      let screenheight = getscreenheight();
      this.verticalHeight=screenheight-269
//      console.log(this.verticalHeight)
      this.$nextTick(()=>{
      this.finishItem=  this.$loacalstore.get('finishItem')
        let paramone={registerNo:this.finishItem.registerNo}
        this.$api.getSelectHisDiagnosis(paramone).then((data=>{
          this.zhuzhenduan=data
        }))
        //处方
        this.$api.getSelectHisDug().then((data=>{

       }));
       //检验

        this.$api.getSelectHisLis(paramone).then((data=>{
          this.dataListJy=data
        }));
       //检查
        this.$api.getSelectHisPacs(paramone).then((data=>{
          this.dataListJC=data
        }));
      })
    },
    methods:{
      buttonJY(item){
        this.$loacalstore.set('itemJY',item)
        this.$router.push({name:'检验报告'})
      },
      buttonJC(item){
        this.$loacalstore.set('itemJC',item)
        this.$router.push({name:'检查报告'})
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
.wrapper-all{
  background: #eeeeee;
}
  .head-wrapper{
    background:white;
  height: 215px;
  .head-one{
    height: 46px;
    .one{
      margin-left: 15px;
      line-height: 46px;
      float: left;
      text-align: center;
      font-size: 17px;
      color: #353535;
    }
    .two{
      line-height: 46px;
      float: right;
      text-align: center;
      margin-right: 15px;
      font-size: 15px;

      color: #888888;
    }
  }
  .com{
    margin-left: 15px;
    margin-top: 14.5px;
    .one{
      font-size: 17px;
      text-align: right;
      color: #888888;
    }
    .two{
      font-size: 17px;
      color: #353535;
    }
  }
}
  .category{
    margin-top: 10px;
    .swiper{
      /*position: relative;*/
      .wrapper-one{
        background: white;
        .one-title{
          height: 54px;
          line-height: 54px;
          font-size: 17px;
          color: #353535;
          margin-left: 14.5px;
        }
        .wrapper-one-b{
          position: absolute;
          top: 54px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
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
        }
          li{
          background: white;
        }
      }
      .wrapper-two{
        background: white;
        .wrapper-one-c{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          overflow: hidden;
          .two{
            background: white;
            display: flex;
            height: 70px;
            .two-left{
              flex: 9;
              margin-left: 15px;
              .two-one{
                margin-top: 15px;
                font-size: 17px;
                font-weight: 500;
                color: #353535;
              }
              .two-two{
                margin-top: 13.5px;
                font-size: 13px;
                color: #888888;
              }
            }
            .two-right{
            line-height: 70px;
              flex: 1;
            }

          }
        }
      }
      .wrapper-three{
        background: white;
        .wrapper-one-d{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          overflow: hidden;
          .two{
            background: white;
            display: flex;
            height: 70px;
            .two-left{
              flex: 9;
              margin-left: 15px;
              .two-one{
                margin-top: 15px;
                font-size: 17px;
                font-weight: 500;
                color: #353535;
              }
              .two-two{
                margin-top: 13.5px;
                font-size: 13px;
                color: #888888;
              }
            }
            .two-right{
              line-height: 70px;
              flex: 1;
            }

          }
        }

      }

    }

  }

</style>
