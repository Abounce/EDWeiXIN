<!--选择挂号日期-->
<template>
  <div>
    <betterscroll class="wrapper" :scrollX="true" :data="tabs">
      <div class="inner" :style="{ width:tatalwith+'px' }">
        <ul >
          <li v-for="(tab,index) in tabs" class="liwidth" >
            <div class="date">{{tab.date}}</div>
            <div class="week">{{tab.week}}</div>
          </li>
        </ul>
      </div>
    </betterscroll>
    <betterscroll class="doctor" :scrollX="true" >
      <div class="doctor-inner">
        <ul>
          <li>
            <div class="doctor-img">
              <img src="" alt="">
            </div>
            <div class="doctor-introduce">
              <div class="doctor-name"></div>
              <div class="doctor-grade"></div>
              <div class="doctor-skill"></div>
            </div>
            <div class="right">
              <div class="ritht-button"></div>
            </div>
          </li>
        </ul>
      </div>
    </betterscroll>
  </div>

</template>

<script>
  import betterscroll from "../../../common/component/betterscroll.vue"
  import {getElementWidth} from"../../../api/utils.js"
  export default {
    data(){
      return{
        tatalwith:0,
        tabs:[{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},
          {date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"}]
      }
    },
    components: {
      betterscroll
    },
    mounted(){
      this.$nextTick(function () {
        let liwidths = getElementWidth("liwidth");
        this.tatalwith=liwidths;
      })
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
  .wrapper{
    width: 100%;
    height: 50px;
    overflow: hidden;
    .inner{
      ul{
        white-space: nowrap;
        font-size: 0;
        li{
          font-size: 13px;
          margin-left: 15px;
          text-align: center;
          line-height: 25px;
          display: inline-block;
          .date{
            height: 25px;
          }
          .week{
            height: 25px;
          }
        }
      }
    }
  }
  .doctor{
    position: absolute;
    top:60px;
    left: 0;
    bottom: 0;
    right: 0;
    background: red;

  }

</style>
