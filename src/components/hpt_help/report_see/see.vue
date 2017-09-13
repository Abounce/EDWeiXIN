<template>

  <div class="wrapper" ref="wrapper">
    <div class="scroller" >
      <ul>
        <li>Cell 1</li>
        <li>Cell 2</li>
        <li>Cell 3</li>
        <li>Cell 4</li>
        <li>Cell 5</li>
        <li>Cell 6</li>
        <li>Cell 7</li>
        <li>Cell 8</li>
        <li>Cell 9</li>
        <li>Cell 10</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created(){
      this.$nextTick(function () {
        new BScroll(this.$refs.wrapper, { scrollX: true});
      })
    }
  }
</script>

<style scoped lang="less" type="text/less">
   .wrapper{
     width: 100%;
     overflow: hidden;
     .scroller{
         width: 1000px;
       ul{
         white-space: nowrap;
         li{
           height: 90px;
           width: 90px;
           display: inline-block;
         }
       }
     }
   }


</style>
