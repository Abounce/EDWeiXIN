<template>
  <div class="wrapper-two">
    <swiper  v-model="swiperItemIndex"  :show-dots="false" :height="verticalHeight+'px'">
      <swiper-item  v-for="(item, index) in datalist" :key="index">
        <div class="wrapper-one">
          <div class="name">{{item}}李伟</div>
          <div class="wrapper">
            <div class="icon iconfont icon-fanhui-copy2 com one"  @click="buttonLeft"></div>
            <qrcode :value='value1' type="img"  class="two"></qrcode>
            <div class="icon iconfont icon-fanhui com three"  @click="buttonRight"></div>
          </div>
          <div class="bottom">
            <barcode  :value="value2" :options="{ displayValue: false }" class="barcode"></barcode>
          </div>
          <div class="bottom-name">左右滑动切换就诊人识别码</div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {getscreenheight} from '../../../api/utils.js'
  import { Swiper, SwiperItem ,Qrcode,XDialog} from 'vux'
   export default {
     data(){
       return{
         value1: 'https://www.baidu.com',
         value2:'514564733',
         datalist:[0,1,2],
         swiperItemIndex:0,
         verticalHeight:0,
       }

     },
    components:{
        XDialog,
        Qrcode,
        Swiper,
        SwiperItem
    },
     mounted(){
       this.verticalHeight = getscreenheight();
       this.$nextTick(()=>{
         this.swiperItemIndex=Math.ceil(this.datalist.length/2)
       })

     },
     methods:{
       buttonLeft(){

         this.swiperItemIndex--

       },
       buttonRight(){

           this.swiperItemIndex++

       }
     }

   }
</script>

<style scoped lang="less" type="text/less">
  .wrapper-two{
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #cdcdcd;
  }
  .wrapper-one{
    padding-bottom: 20px;
    border-radius: 5px;
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    background: white;
    /*height: 530px;*/
  }
  .name{
    line-height: 63px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #353535;
  }
  .wrapper{
    text-align: center;
    .com{
      display: inline-block;
      color: #cdcdcd;
      font-size: 60px;
      position: absolute;

    }
    .one{
      top:150px;
      left: 20px;
    }
    .three{
      top:150px;
      right: 20px;
    }
    .two{
      display: inline-block;
    }

    }
  .bottom{
    margin-top: 60px;
    text-align: center;
}
  .bottom-name{
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
    color: #888888;
  }

</style>
