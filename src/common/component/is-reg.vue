<template>
   <div class="wrapper">
     <div class="head">
       <img src="../image/image@3x/doctor@3x.png" height="170" width="274"/>
     </div>
     <div class="text">您目前还没有挂过号哦!</div>
   </div>
</template>

<script>

</script>

<style scoped lang="less" type="text/less">
  .wrapper{
    z-index:50;
    /*background: red;*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .head{
      margin-top: 76.5px;
      text-align: center;
    }
    .text{
      /*opacity: 0.8;*/
      text-align: center;
      font-size: 16px;
      color: rgba(136, 136, 136, 0.8);
    }
  }
</style>
