
<template>
      <div>
        <better-scroll class="better">
        <ul class="better-inner">
          <li>
            <div class="wrapper">
              <div class="wrapper-info">
                <span class="name">和园鹏</span>
                <span class="isUse">已就诊</span>
              </div>
              <my-line></my-line>
              <div class="inner">
                <span>挂号医生:</span>
                <span>和园鹏</span>
              </div>
              <div class="inner">
                <span>挂号科室:</span>
                <span>外科</span>
              </div>
              <div class="inner">
                <span>挂号时间:</span>
                <span>2017-10.1</span>
              </div>
            </div>
          </li>
          <li>
            <div class="wrapper">
              <div class="wrapper-info">
                <span class="name">和园鹏</span>
                <span class="isUse">已就诊</span>
              </div>
              <my-line></my-line>
              <div class="inner">
                <span>挂号医生:</span>
                <span>和园鹏</span>
              </div>
              <div class="inner">
                <span>挂号科室:</span>
                <span>外科</span>
              </div>
              <div class="inner">
                <span>挂号时间:</span>
                <span>2017-10.1</span>
              </div>
            </div>
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
 .better{
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   overflow: hidden;
   background-color: #cdcdcd;
   .better-inner{
     margin-left: 9.5px;
     margin-right:10.5px;
     .wrapper{
       padding-bottom: 20px;
       margin-top: 10px;
       background: white;
       border-radius: 5px;
       .wrapper-info{
         position: relative;
         height: 44px;
         .name{
           line-height: 44px;
           margin-left: 10px;
           font-size: 17px;
           color: #353535;
         }
         .isUse{
           position: absolute;
           right: 10px;
           top: 13.5px;
           font-size: 17px;
           color: #13bf72;
         }
       }
     }
   }

 }
 .inner{
     margin-left: 10px;
     margin-top: 15px;
 }

</style>
