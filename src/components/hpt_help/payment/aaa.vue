<template>
  <div ref="centera">
    <ul>
      <li>1小米</li>
      <li>2小米</li>
      <li>3小米</li>
      <li>4小米</li>
      <li>5小米</li>
      <li>6小米</li>
      <li>7小米</li>
      <li>8小米</li>
      <li>9小米</li>
      <li>10小米</li>
      <li>11小米</li>
      <li>12小米</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    created(){
      this.$nextTick(function () {
        new BScroll(this.$refs.centera,{
          scrollX: true,
        })
      })
    }
  }
</script>

<style scoped lang="less" type="text/less">
  div{
    background: red;
    width: 100%;
    overflow: hidden;
    ul{
      white-space: nowrap;
      li{
        display: inline-block;
      }
    }
  }
</style>
