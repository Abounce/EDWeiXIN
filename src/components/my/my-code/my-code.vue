<template>
  <div class="wrapper-two">
    <div class="wrapper-one">
        <div class="name">李伟</div>
        <div class="wrapper">
          <div class="icon iconfont icon-fanhui-copy2 com one"></div>
          <qrcode :value='value1' type="img"  class="two"></qrcode>
          <div class="icon iconfont icon-fanhui com three"></div>
        </div>
        <div class="bottom">
        <barcode  :value="value2" :options="{ displayValue: false }" class="barcode"></barcode>
        </div>
          <div class="bottom-name">左右滑动切换就诊人识别码</div>
    </div>
  </div>
</template>

<script>
  import { Qrcode,XDialog} from 'vux'
   export default {
     data(){
       return{
         value1: 'https://www.baidu.com',
         value2:'514564733',
       }

     },
    components:{
        XDialog,
        Qrcode,
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
    margin: 40px 20px;
    background: white;
  }
  .name{
    line-height: 63px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
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
