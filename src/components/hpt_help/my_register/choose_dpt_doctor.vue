<!--选择医生-->
<template>
  <div>
    <div class="user"></div>
    <div class="order-or-introduce">
      <div class="tab-order" @click="chooseorder(isorder,isintroduce)" :class="{selectleft:isorder}">预约</div>
      <div class="tab-introduce" @click="chooseintroduce(isorder,isintroduce)" :class="{selectleft:isintroduce}">介绍</div>
    </div>
      <div class="order" v-show="isorder">
        <div class="see">
          <group :title="(' ')"  class="only-button">
            <x-switch :title="(' ')" v-model="value1"></x-switch>
          </group>
          <span class="only-see">只看有号</span>
        </div>
        <div class="wrapper">
            <div>
              <ul>
                <li class="liwith"></li>
              </ul>
            </div>
        </div>
        <div class="showtime">
          <div class="morning">
            <div class="time">上午(8:00-12:00)</div>
            <div class="price">￥6.00</div>
            <div class="isnumber">余号13</div>
            <div class="yuyue" >预约</div>
          </div>
          <div class="afternoon">
            <div class="time">下午(8:00-12:00)</div>
            <div class="price">￥6.00</div>
            <div class="isnumber">余号13</div>
            <div class="yuyue">预约</div>
          </div>
          <div class="night">
            <div class="time">晚上(8:00-12:00)</div>
            <div class="price">￥6.00</div>
            <div class="isnumber">余号13</div>
            <div class="yuyue">预约</div>
          </div>
        </div>
      </div>
      <div class="introduce" v-show="isintroduce">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

  </div>
</template>

<script>
  import { XSwitch, Group  } from 'vux'
 export  default {
   data(){
    return{
      value1:true,
      isorder:true,
      isintroduce:false
    }
   },
   methods:{
     chooseorder(isorder,isintroduce){
       this.isorder=true
       this.isintroduce=false
     },
     chooseintroduce(isorder,isintroduce){
       this.isorder=false
       this.isintroduce=true

     }
 },
   components: {
     XSwitch,
     Group,
   },
   mounted(){
     this.$nextTick(function () {
       let doctorId = this.$route.params.doctorId;
       console.log("传递过来的数据doctorId="+doctorId)

     })

   }
 }

</script>

<style scoped lang="less" type="text/less">
 .user{
   background: red;
   height: 94px;
   border-bottom: 10px solid #cdcdcd;
 }
  .order-or-introduce{
    display: flex;
    height: 49px;
    .tab-order{
      flex: 1;
      line-height: 49px;
      text-align: center;
    }
    .tab-introduce{
      flex: 1;
      line-height: 49px;
      text-align: center;
    }
  }
  .order{
    height: 240px;
    /*background: yellow;*/
    .see{
      position: relative;
      height: 49px;
      .only-see{
       position: absolute;
        left: 14.5px;
        top: 14.5px;
      }
      .only-button{

      }
    }
    .wrapper{
      background: yellowgreen;
      height: 49.5px;
      width: 100%;
      overflow: hidden;
      ul{
        white-space: nowrap;
        font-size: 0;
        li{
          font-size: 13px;
          margin-left: 15px;
          text-align: center;
          line-height: 25px;
          display: inline-block;
        }
      }
    }
    .showtime{

      .time{
        text-align: center;
        flex: 2;
      }
      .price{
        text-align: center;
        flex: 1;
      }
      .isnumber{
        text-align: center;
        flex: 1;
      }
      .yuyue{
        text-align: center;
        flex: 1;
      }
      .morning{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue{

        }
      }
      .afternoon{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue{

        }
      }

      .night{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue{

        }
      }

    }

  }
  .introduce{
    height: 300px;
    background: rebeccapurple;

  }
 .selectleft{
   color: #13bf72;
   border-bottom: 1px solid #13bf72;

 }

</style>
