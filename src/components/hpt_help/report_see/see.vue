<template>
  <div>
    <scroll ref="scroll"
            :data="items"

            :stop="stop"
            :pullDownRefresh="pullDownRefresh"

            @pullingDown="onPullingDown"
           >
    </scroll>
    </div>
</template>
<script>
  import Scroll from "../../../common/component/scroll.vue"
  const _data = [
    '我是第 1 行',
    '我是第 2 行',
    '我是第 3 行',
    '我是第 4 行',
    '我是第 5 行',
    '我是第 6 行',
    '我是第 7 行',
    '我是第 8 行',
    '我是第 9 行',
    '我是第 10 行',
    '我是第 11 行',
    '我是第 12 行',
    '我是第 13 行',
    '我是第 14 行',
    '我是第 15 行',
    '我是第 16 行',
    '我是第 17 行',
    '我是第 18 行',
    '我是第 19 行',
    '我是第 20 行'
  ]
  export default {
    data() {
      return {
        stop:200,
        pullDownRefresh:true,
        items: _data,
      }
    },
    mounted(){
      this.$nextTick(function () {

      })
    },
    components: {
      Scroll,
    },
    methods:{
      onPullingDown() {
        // 模拟更新数据
        console.log('pulling down and load data')
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift(new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      },
    }



  }
</script>
<style scoped lang="less" type="text/less">

  </style>
