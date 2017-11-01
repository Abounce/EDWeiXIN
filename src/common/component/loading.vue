<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
  </div>
</template>
<script >

  export default {

  }

</script>
<style scoped lang="less" type="text/less">
  .mf-loading-container{
    img{
      position: absolute;
      /*margin: 0 auto;*/
      top: 0;
      left: 45%;
      width: 40px;
      height: 40px;
      display: block;
      z-index: 1000;
    }

  }
</style>
