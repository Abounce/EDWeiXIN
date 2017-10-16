<template>
  <div class="wrapper-all">
   <div class="head-wrapper">
       <div class="head-one">
         <div class="one">何园鹏</div>
         <div class="two">2017-08-31 12:00</div>
       </div>
       <my-line></my-line>
       <div class="com">
         <span class="one">就诊科室:</span>
         <span class="two">普通内科</span>
       </div>
       <div class="com">
         <span class="one">就诊医生:</span>
         <span class="two">文强</span>
       </div>
       <div class="com">
         <span class="one">挂号序号:</span>
         <span class="two">25587895544585</span>
       </div>
       <div class="com">
         <span class="one" style="margin-left: 34px">诊断:</span>
         <span class="two">高血压</span>
       </div>
       <div class="com">
         <span class="one" style="margin-left: 34px">费别:</span>
         <span class="two">自费</span>
       </div>
     </div>
   <div class="category">
      <tab :line-width=2 active-color='#13bf72' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :height="verticalHeight+'px'"  style="background: #cdcdcd" :show-dots="false" class="swiper">
        <swiper-item v-for="(item, index) in list2" :key="index"  >
          <div class="wrapper-one"    v-show="index===0">
          <div class="one-title">处方明细</div>
            <better-scroll :data="list" class="wrapper-one-b" >
              <ul>
                <li v-for="(item,index) in list" >
                  <div class="one" style="padding-top: 10px">
                      <div class="ono-left">精蛋白生物合成人胰岛素注射液(诺和灵N)
                        （基本） 0.25g*30粒/盒</div>
                      <div class="one-right">
                             <div>1盒</div>
                             <div class="price">¥60.00</div>
                      </div>
                  </div>
                  <my-line></my-line>
                </li>
              </ul>
            </better-scroll>
          </div >
          <div class="wrapper-two"    v-show="index===1">
            <better-scroll :data="list" class="wrapper-one-c" >
              <ul>
                <li v-for="(item,index) in list" @click="buttonJY">
                 <div class="two">
                   <div class="two-left">
                     <div class="two-one">X线检查</div>
                     <div class="two-two">2017-08-29 15:00:00</div>
                   </div>
                   <div  class="icon iconfont icon-fanhui two-right"></div>
                 </div>
                </li>
              </ul>
            </better-scroll>
          </div>
          <div class="wrapper-three"  v-show="index===2">
            <better-scroll :data="list" class="wrapper-one-d" >
              <ul>
                <li v-for="(item,index) in list" @click="buttonJC">
                  <div class="two">
                    <div class="two-left">
                      <div class="two-one">X线检查</div>
                      <div class="two-two">2017-08-29 15:00:00</div>
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
        list:[1,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11,2,3,4,5,6,7,8,9,1,11]
      }
    },
    components:{
      myLine,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      betterScroll
    },
    mounted(){
      let screenheight = getscreenheight();
      this.verticalHeight=screenheight-269
      console.log(this.verticalHeight)
    },
    methods:{
      buttonJY(){
        this.$router.push({name:'检验报告'})
      },
      buttonJC(){
        this.$router.push({name:'检查报告'})
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
.wrapper-all{
  background: #cdcdcd;
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
