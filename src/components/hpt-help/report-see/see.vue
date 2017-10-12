
<template>
  <div>
     <div class="one" @click="aaa">点击我跳回去</div>
  </div>
</template>



<script>

  export default {
    components: {


    },
    methods: {
      aaa(){
        this.$router.push({name:'choosedptpatient'})
      }

    },
    data () {
      return {


      }
    },

  }
</script>
<style scoped lang="less" type="text/less">
</style>
