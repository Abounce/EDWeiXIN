<template>
   <div class="wrapper">
     <div class="head">
       <img src="../image/image@3x/doctor@3x.png" height="274" width="170"/>
     </div>
     <div class="text">您目前还没有挂过号哦</div>
   </div>
</template>

<script>

</script>

<style scoped lang="less" type="text/less">
  .wrapper{
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .head{
      width: 274px;
      height: 170px;
      text-align: center;
    }
    .text{

      opacity: 0.8;
      font-size: 16px;
      color: rgba(136, 136, 136, 0.8);
    }
  }
</style>
