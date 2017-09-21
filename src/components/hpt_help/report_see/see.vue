<template>
  <div>
    <group :title="(' ')">
      <x-switch :title="(' ')" v-model="value1"></x-switch>
    </group>
  </div>
</template>



<script>
  import { XSwitch, Group } from 'vux'

  export default {
    components: {
      XSwitch,
      Group
    },
    methods: {
    },
    data () {
      return {
        value1: true,
      }
    },
    watch:{
       value1(val){
         console.log(val)
       }
    }
  }
</script>
