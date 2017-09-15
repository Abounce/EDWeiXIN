<!--选择挂号日期-->
<template>
  <div>
    <datescroll :tabss="tabs"></datescroll>
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
  import datescroll from "../../../common/component/datescroll.vue"
  import betterscroll from "../../../common/component/betterscroll.vue"
  export default {
    data(){
      return{
        tatalwith:0,

        tabs:[{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},
          {date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"},{date:"08-29",week:"星期一"}]
      }
    },
    components: {
      datescroll,
      betterscroll
    },

  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
  .doctor{
    position: absolute;
    top:60px;
    left: 0;
    bottom: 0;
    right: 0;
    background: red;

  }

</style>
