<!--选择医生-->
<template>
  <div>
    <div class="user"></div>
    <div class="order-or-introduce">
      <div class="tab-order" @click="chooseorder(isorder,isintroduce)" :class="{selectleft:isorder}">预约</div>
      <div class="tab-introduce" @click="chooseintroduce(isorder,isintroduce)" :class="{selectleft:isintroduce}">介绍</div>
    </div>
      <div class="order" v-show="isorder">
        <div class="only-see">
          <span>只看有号</span>
          <div>
          

          </div>
        </div>
        <div class="wrapper"></div>
        <div class="numbers"></div>
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
  import { XSwitch, Group } from 'vux'
 export  default {
   data(){
    return{
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

     },


 },
   components: {
     XSwitch,
     Group
   },
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
    background: yellow;
    .only-see{
      height: 49px;
    }
    .wrapper{
      height: 49.5px;
    }
    .numbers{
      height: 140px;
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
