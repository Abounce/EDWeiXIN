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

  import {getnextday,getweek} from "../../../api/utils.js";
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
    },
    created(){
      this.$nextTick(function () {

//      var name = this.$loacalstore.get('user').name;
//      console.log("-----------"+name)
      })
    }
  }

//  let arys1 = "2017-08-07".split('-');     //日期为输入日期，格式为 2013-3-10
//  var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
//  var  week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")//就是你要的星期几
//  var week="星期"+week1; //就是你要的星期几
//  console.log(week)


//  let str="2017-08-08 00:00:00"
//  function getnextday(str) {
//      let arys1 = str.substr(0,10).split('-');
//      let now = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
//      now.setDate(now.getDate()+1);
//      var fmt = dateFormat(now, 'YYYY-MM-DD HH:mm:ss');
//      console.log(fmt)
//  }
//  getnextday(str);
//  let str="2017-08-08 00:00:00"
//  var nextday = getnextday(str);
//  console.log(nextday)//2017-08-09 00:00:00
//  var week = getweek(nextday);
//  console.log(week)//星期三






</script>
<style scoped lang="less" type="text/less">

  </style>
