<template>
  <div>
      <better-scroll class="wrapper">
        <ul>
          <li>
            <div class="inner">
                <div class="head-wrapper">
                 <img src="" alt="" class="head">
                </div>
                <div class="info">
                  <div class="one">
                    <span>和园鹏</span>
                    <span>主任医生</span>
                  </div>
                  <div class="two">
                    <span>科室:</span>
                    <span>儿科</span>
                  </div>
                  <div class="three">
                    <span>2017-10-11</span>
                    <span>17:00:00</span>
                  </div>
                </div>
                <div class="button">再次预约</div>
            </div>
            <my-line></my-line>
          </li>
          <li>
            <div class="inner">
              <div class="head-wrapper">
                <img src="" alt="" class="head">
              </div>
              <div class="info">
                <div class="one">
                  <span>和园鹏</span>
                  <span>主任医生</span>
                </div>
                <div class="two">
                  <span>科室:</span>
                  <span>儿科</span>
                </div>
                <div class="three">
                  <span>2017-10-11</span>
                  <span>17:00:00</span>
                </div>
              </div>
              <div class="button">再次预约</div>
            </div>
            <my-line></my-line>
          </li>
        </ul>
      </better-scroll>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  export default {
    components:{
      myLine,
      betterScroll
    }
  }
</script>

<style scoped lang="less" type="text/less">
 .wrapper{
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow: hidden;
   .inner{
     position: relative;
     height: 95px;
     .head-wrapper{
       float: left;
       width: 86px;
       background: yellow;
       text-align: center;
       height: 95px;
       .head{
         margin-top: 17px;
         width: 56px;
         height: 56px;
         border-radius: 50%;
         background: red;
       }
     }
     .info{
       float: left;
       .one{
         margin-top: 16.5px;
       }
       .two{
         margin-top: 14.5px;
       }
       .three{
         margin-top: 9px;
       }
     }
     .button{
       position: absolute;
       top: 19px;
       right: 15px;
       font-size: 14px;
       color: #13bf72;
     }
   }
 }
</style>
