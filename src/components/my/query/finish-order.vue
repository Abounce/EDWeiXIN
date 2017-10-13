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
            <better-scroll :data="list" class="wrapper-one-b" >
              <ul>
                <li v-for="(item,index) in list">{{item}}</li>
              </ul>
            </better-scroll>
          </div >
          <div class="wrapper-two"    v-show="index===1">第二个页面</div>
          <div class="wrapper-three"  v-show="index===2">第三个页面</div>
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
        .wrapper-one-b{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }
        li{
          background: white;
        }
      }
      .wrapper-two{
        background: white;
      }
      .wrapper-three{
        background: white;
      }

    }

  }

</style>
