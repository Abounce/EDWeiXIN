
<template>
   <betterscroll class="wrapper">
        <div>
          <div class="header clearfix">
            <div class="header-img">
            <img src="" alt="">
            </div>
            <div class="header-name">何园鹏</div>
            <div class="header-right">
              <span>更换患者</span>
              <span  class="icon iconfont icon-fanhui"></span>
            </div>
          </div>
          <my-line ></my-line>
          <div class="lately-data">
            <div class="title">最近数据</div>
            <div class="com">
              <div class="icon iconfont icon-xueya"></div>
              <div class="one-com">血压</div>
              <div class="two-com">140/92mmHg</div>
              <div class="three-com">09-30 10:36</div>
              <div class="four-com">轻度偏高</div>
            </div>
            <myLineXu class="myline"></myLineXu>
            <div class="com">
              <div class="icon iconfont icon-xinshuai"></div>
              <div class="one-com">心率</div>
              <div class="two-com">60bpm</div>
              <div class="three-com">09-30 10:36</div>
              <div class="four-com">轻度偏高</div>
            </div>
            <myLineXu class="myline"></myLineXu>
            <div class="com">
              <div class="icon iconfont icon-xietang"></div>
              <div class="one-com">血糖</div>
              <div class="two-com">70mmol/L</div>
              <div class="three-com">09-30 10:36</div>
              <div class="four-com">轻度偏高</div>
            </div>

          </div>
          <div class="tab">
            <div class="tab-wrapper">
               <div class="one">血糖</div>
               <div class="two">血压</div>
            </div>
          </div>

          <schart :canvasId="canvasId" :type="type" :width="width"
                    :height="height" :data="data" :options="options"></schart>

        </div>
   </betterscroll>
</template>

<script>
  import betterscroll from "../../../common/component/betterscroll.vue"
  import myLine from "../../../common/component/myLine.vue"
  import myLineXu from "../../../common/component/myLineXu.vue"
  import Schart from 'vue-schart';
  import  {getscreenWith} from '../../../api/utils.js'
  export default {
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'line',
        width: 0,
        height: 241,
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 1795},
          {name: '2017', value: 1795},
          {name: '2017', value: 1795},
          {name: '2017', value: 1795},
        ],
        options: {
          padding: 50,                   // canvas 内边距
          bgColor: '#FFFFFF',            // 默认背景颜色
          title: 'vue-schart互动演示案例',// 图表标题
          titleColor: '#000000',         // 图表标题颜色
          titlePosition: 'top',      // 图表标题位置: top / bottom
          yEqual: 5,                     // y轴分成5等分
          fillColor: '#1E9FFF',          // 默认填充颜色
          contentColor: '#eeeeee',       // 内容横线颜色
          axisColor: '#666666',          // 坐标轴颜色

        }
      }
    },
    mounted(){
  this.$nextTick(()=>{
    this.width=getscreenWith();
  })
    },
    components: {
      betterscroll,
      myLine,
      myLineXu,
      Schart
    }
  }
</script>

<style scoped lang="less" type="text/less">
     .wrapper{
       position: absolute;
       background: #eeeeee;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       overflow: hidden;
       .header{
         background: #ffffff;
         .header-img{
            float:left;
            width: 70px;
            height: 70px;
           text-align: center;
           img{
             margin-top: 10px;
             width: 50px;
             height: 50px;
             border-radius: 25px;
             background-color: red;
             border: solid 0.5px #eeeeee;
           }
         }
         .header-name{
           line-height: 70px;
           float:left;
           font-size: 17px;
           font-weight: bold;
           color: #353535;
         }
         .header-right{
           line-height: 70px;
           float:right;
           margin-right: 15px;
           font-size: 14px;
           font-weight: bold;
           color: #888888;
         }

       }
       .lately-data{
         background: #ffffff;
         .title{
           line-height: 30px;
           /*text-align: center;*/
           margin-top: 10px;
           margin-left: 13px;
           font-size: 17px;
           font-weight: bold;
           color: #353535;
         }
         .com{
           /*margin-left: 13px;*/
           /*margin-right: 13px;*/
           line-height: 44px;
           display: flex;
           .icon{
             color: #32c081;
             margin-left: 13px;
             font-size: 15px;
           }
           .one-com{
            flex: 13;
             font-size: 15px;
             font-weight: bold;
             color: #353535;
             text-align: center;
           }
           .two-com{
             flex: 32;
             font-size: 15px;
             font-weight: bold;
             color: #353535;

           }
           .three-com{
             flex: 30;
             font-size: 13px;
             color: #888888;
             text-align: left;

           }
           .four-com{
             flex: 25;
             font-size: 15px;
             font-weight: bold;
             color: #ff9933;
             text-align: center;
           }

         }
         .myline{
           margin-left: 13px;
           margin-right: 13px;
         }

       }
       .tab{
         height: 55px;
         .tab-wrapper{
           margin: 15px auto 0 auto;
           width: 171px;
           height: 40px;
           line-height: 40px;
           border-radius: 20px;
           background-color: #ffffff;
           display: flex;
           .one{
             flex: 1;
             font-size: 17px;
             font-weight: 500;
             text-align: center;
             line-height: 40px;
             color: #32c081;
           }
           .two{
             flex: 1;
             border-left: 0.5px solid #cdcdcd;
             font-size: 17px;
             font-weight: 500;
             text-align: center;
             line-height: 40px;
             color: #32c081;
           }
         }
       }


     }
     .clearfix:after{
       content: ' ';
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
     }

</style>
