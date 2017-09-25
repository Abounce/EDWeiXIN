<template>
 <div>
     <div class="tab">
       <div class="tab-man" @click="chooseman" :class="{selectleft:isman}">成人</div>
       <div class="tab-child" @click="choosechild" :class="{selectleft:ischild}">儿童/新生儿</div>
     </div>
     <div v-show="isman" class="man"></div>
     <div v-show="ischild" class="child"></div>
 </div>
</template>

<script>
  export default {
    data(){
      return{
        isman:true,
        ischild:false
      }
    },
    methods:{
      chooseman(){
        this.isman=true
        this.ischild=false
      },
      choosechild(){
        this.isman=false
        this.ischild=true
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .tab{
      display: flex;
      height: 49px;
      .tab-man{
        line-height: 49px;
        text-align: center;
        flex: 1;
        background: red;
      }
      .tab-child{
        line-height: 49px;
        text-align: center;
        flex: 1;
        background: yellow;
      }
    }
    .man{
      margin-top: 10.5px;
    }
    .child{
      margin-top: 10.5px;
    }
    .selectleft{
      color: #13bf72;
      /*border-bottom: 1px solid #13bf72;*/

    }

</style>
