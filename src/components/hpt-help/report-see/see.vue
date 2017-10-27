<template>
  <div>
    <div class="category">
      <tab :line-width=2 active-color='#13bf72' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" :height="verticalHeight+'px'"  style="background: #eeeeee" :show-dots="false" class="swiper">
        <swiper-item v-for="(item, index) in list2" :key="index"  >
          <div class="wrapper-two"    v-show="index===0">
            <better-scroll :data="dataListJy" class="wrapper-one-c">
              <ul style="padding-bottom: 50px">
                <li v-for="(item,index) in dataListJy" @click="buttonJY(item)">
                  <div class="two">
                    <div class="two-left">
                      <div class="two-one">{{item.rptName}}</div>
                      <div class="two-two">{{item.rptTime}}</div>
                    </div>
                    <div class="two-right">
                      <span class="isfinish">{{item.comp===0?'已完成':'未完成'}}</span>
                      <span class="icon iconfont icon-fanhui "></span>
                    </div>
                  </div>
                </li>
              </ul>
            </better-scroll>
          </div>
          <div class="wrapper-three"  v-show="index===1">
            <better-scroll :data="dataListJC" class="wrapper-one-d"  >
              <ul style="padding-bottom: 50px">
                <li v-for="(item,index) in dataListJC" @click="buttonJC(item)">
                  <div class="two">
                     <div class="two-left">
                      <div class="two-one">{{item.rptName}}</div>
                      <div class="two-two">{{item.rptTime}}</div>
                    </div>
                     <div class="two-right">
                       <span class="isfinish">{{item.comp==='0'?'已完成':'未完成'}}</span>
                      <span class="icon iconfont icon-fanhui "></span>
                     </div>
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
        list2:['检验报告','检查报告'],
        index: 0,
        demo2: '门诊处方',
        verticalHeight:0,
        dataListJy:[],
        dataListJC:[]
      }
    },
    mounted(){
      let screenheight = getscreenheight();
      this.verticalHeight=screenheight
      this.$nextTick(()=>{
//        //获取检验报告
//        this.$api.getSelectHisLis().then((data=>{
//            this.dataListJy=data
//        }))
//        //获取检验报告
//        this.$api.getSelectHisPacs().then((data=>{
//          this.dataListJC=data
//        }))
        this.$api.getSelectNewestLisPacs().then((data)=>{
          this.dataListJy=data.weSynLisDataReponseVos;
          this.dataListJC=data.weSynPacsDataReponseVos;
        })
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
    },
    components:{
      myLine,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      betterScroll
    },
  }
</script>
<style scoped lang="less" type="text/less">
  .category{
    margin-top: 10px;
    .swiper{
      /*position: relative;*/
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
              flex: 7;
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
              flex: 3;
              .isfinish{
                display: inline-block;
                text-align: center;
                width: 51px;
                height: 18px;
                padding: 3px;
                line-height: 18px;
                border-radius: 9px;
                color: white;
                background: #13bf72;
              }
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
              flex: 7;
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
              flex: 3;
              .isfinish{
                display: inline-block;
                text-align: center;
                width: 51px;
                height: 18px;
                padding: 3px;
                line-height: 18px;
                border-radius: 9px;
                color: white;
                background: #13bf72;
              }
            }

          }
        }

      }

    }

  }
</style>
