
<template>
  <div>
    <commm :num="outnum" @a="aa" @b="bb"></commm>
    <div>parent：{{outnum}}</div>
  </div>
</template>



<script>
import commm from './comm'
  export default {
    components: {
      commm
    },
    methods: {
      aa(){
         this.outnum++
      },
      bb(){
          this.outnum--
      }

    },
    data () {
      return {
       outnum:50

      }
    },

  }
</script>
<style scoped lang="less" type="text/less">
</style>
