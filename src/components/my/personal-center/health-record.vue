<template>
   <betterscroll class="wrapper">
        <div>

        </div>
   </betterscroll>
</template>

<script>
  import betterscroll from "../../../common/component/betterscroll.vue"
  export default {

    components: {
      betterscroll,
    }
  }
</script>

<style scoped lang="less" type="text/less">
     .wrapper{
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       overflow: hidden;
     }

</style>
