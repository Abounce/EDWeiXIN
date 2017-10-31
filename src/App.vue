
<template>
  <div id="app">
    <loading v-show="$store.state.isLoading"></loading>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    </div>
</template>

<script>
  import loading from './common/component/loading.vue'
export default {
  name: 'app',
  components: {
    loading
  },
}
</script>

<style scoped lang="less" type="text/less">


</style>
