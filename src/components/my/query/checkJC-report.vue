<template>
  <div>
    <div class="head">
      <div class="title">X线检查报告</div>
      <my-line></my-line>
      <div>
        <div class="com">
          <span>报告单号:</span>
          <span>25587895544585</span>
        </div>
        <div class="com">
          <span>检验人员:</span>
          <span>李伟</span>
        </div>
        <div class="com" style="margin-bottom: 14.5px">
          <span>检验时间:</span>
          <span>2017-08-05 15:00:00</span>
        </div>
      </div>
      <my-line></my-line>
      <div>
        <div class="title-one">病人信息</div>
        <div class="com-one">
          <span>刘伟</span>
          <span style="margin-left: 40px;">男</span>
          <span style="margin-left: 40px;">36岁</span>
        </div>
        <div class="com-one" style="margin-bottom: 15px">
          <span>临床诊断:</span>
          <span>骨折型损伤，骨质疏松</span>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <better-scroll class="wrapper-b">
        <ul>
          <li class="li">
            <div class="one">检查部位</div>
            <div class="two">左手正斜位</div>
            <my-line></my-line>
            <div class="three">所见</div>
            <div class="four">左手各腕骨，各掌指骨骨质完整，未见明显骨质疏松、增生及破坏，各关节对合良好，关节面光洁，关节间隙未见狭窄，周围软组织未见明显肿胀。</div>
            <my-line></my-line>
            <div class="five">诊断意见</div>
            <div class="six">左手正斜位X明显异常</div>
          </li>
        </ul>
      </better-scroll>
      <div class="bottom">申明：此报告仅对该检测负责，仅供临床医生参考！</div>
    </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export  default {
    components:{
      myLine,
      betterScroll
    },
  }
</script>

<style scoped lang="less" type="text/less">
  .head{
    .title{
      height: 46px;
      text-align: center;
      line-height: 46px;
      font-size: 17px;
      font-weight: 900;
      color: #353535;
    }
    .com{
      margin-left: 14.5px;
      margin-top: 14.5px;
      font-size: 15px;
      color: #353535;
    }
    .title-one{
      margin-top: 15px;
      margin-left: 15px;
      font-size: 17px;
      font-weight: 500;
      color: #888888;
    }
    .com-one{
      margin-left: 15px;
      margin-top: 15px;
      font-size: 15px;
      font-weight: 500;
      color: #353535;
    }
  }
  .wrapper{
    border-top: 10px solid #cdcdcd;
    /*position: relative;*/
    .wrapper-b{
      overflow: hidden;
      position: absolute;
      /*background: red;*/
      top:270px;
      right: 0;
      left: 0;
      bottom: 30px;
      .one{
        margin-left: 15px;
        margin-top: 20px;
        font-size: 17px;
        font-weight: 500;
        color: #888888;
      }
      .two{
        margin-top: 15px;
        margin-bottom: 20px;
        margin-left: 15px;
        font-size: 15px;
        font-weight: 500;
        color: #353535;
      }
      .three{
        margin-left: 15px;
        margin-top: 20px;
        font-weight: 500;
        color: #888888;
      }
      .four{
        margin-left: 15px;
        margin-top: 15px;
        margin-bottom: 19px;
        font-size: 15px;
        font-weight: 500;
        text-align: left;
        color: #353535;
      }
      .five{
        margin-top: 20px;
        margin-left: 15px;
        font-size: 17px;
        font-weight: 500;
        color: #888888;
      }
      .six{
        margin-left: 15px;
        margin-top: 15px;
        margin-bottom: 20px;
        font-weight: 500;
        color: #353535;
      }
    }

    .bottom{
      background: #cdcdcd;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 13px;
      color: #888888;
    }
    .li{
      padding-bottom: 30px;
    }
  }
</style>
