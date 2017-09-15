<template>
<div>
  <betterscroll class="wrapper" :scrollX="true" :data="tabss" >
    <div class="inner" :style="{ width:tatalwith+'px' }">
      <ul >
        <li v-for="(tab,index) in tabss" class="liwidth" @click="setindex(index,tab.doctors)">

          <div class="date">{{tab.date}}</div>
          <div class="week">{{tab.week}}</div>
        </li>
      </ul>
    </div>
  </betterscroll>
</div>

</template>

<script>
  import betterscroll from "./betterscroll.vue"
  import {getElementWidth}  from"../../api/utils.js"
  export default {
    data(){
      return{
        tatalwith:0,
      }
    },
    props:{
      tabss:null,

    },
    components: {
      betterscroll
    },
    mounted(){
      this.$nextTick(function () {
        let liwidths = getElementWidth("liwidth");
        this.tatalwith=liwidths;
      })
    },
    methods:{
      setindex(index,docoto){
        this.$emit("setdoctor",index,docoto)
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
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
</style>
