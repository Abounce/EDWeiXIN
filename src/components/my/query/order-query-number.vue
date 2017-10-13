<template>
  <div>
    <div class="one">您的就诊号为</div>
    <div class="two">0013号</div>
    <div class="three">请到<span>外科第一诊室</span>>排队候诊</div>
    <div class="four">当前正在就诊号为0010</div>
    <div class="five">扫一扫</div>
    <div  class="six">
    <qrcode :value='value' type="img"></qrcode>
    </div>
    <div class="seven">就诊卡号:0212252122578</div>
  </div>
</template>

<script>
  import { Qrcode } from 'vux'
  export default {
    components: {
      Qrcode,
    },
    data () {
      return {
        value: 'https://www.baidu.com',
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .one{
    margin-top: 39.5px;
    font-size: 17px;
    text-align: center;
    color: #353535;
  }
  .two{
    margin-top: 15px;
    font-size: 40px;
    text-align: center;
    color: #13bf72;
  }
  .three{
    margin-top: 30px;
    font-size: 17px;
    text-align: center;
    color: #353535;
    span{
      color: #13bf72;
    }
  }
  .four{
    margin-top: 15px;
    font-size: 17px;
    text-align: center;
    color: #353535;
  }
  .five{
    margin-top: 60.5px;
    font-size: 17px;
    text-align: center;
    color: #353535;
  }
  .six{
    margin-top: 9px;
    text-align: center;
  }
  .seven{
    margin-top: 15px;
    text-align: center;
    font-size: 17px;
    color: #353535;
  }
</style>
