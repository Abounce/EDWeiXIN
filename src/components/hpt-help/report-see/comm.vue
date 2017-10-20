<template>
  <div>
    <span @click="add">+</span>
    <span>{{num}}</span>
    <span @click="decrease">-</span>
  </div>
</template>

<script>
  export default {
    props:['num'],
    data(){
      return{
//        num:0
      }
    },

    methods:{
      add(){
//        this.num++
        this.$emit('a')
      },
      decrease(){
//        this.num--
        this.$emit('b')
      }

    }
  }
</script>

<style scoped lang="less" type="text/less">

</style>
