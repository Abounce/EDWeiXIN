
<template>
      <div>
        <better-scroll class="better" ref="refbs" :data="regList">
        <ul class="better-inner">
          <li v-for="(item,index) in regList">
            <div class="wrapper">
              <div class="wrapper-info">
                <span class="name">{{item.patName}}</span>
                <span class="isUse">{{isUse(item)}}</span>
              </div>
              <my-line></my-line>
              <div class="inner">
                <span>挂号医生:</span>
                <span>{{item.doctorName}}</span>
              </div>
              <div class="inner">
                <span>挂号科室:</span>
                <span>{{item.deptName}}</span>
              </div>
              <div class="inner">
                <span>挂号时间:</span>
                <span>{{item.regDate.substring(0,10)}}</span>
              </div>
            </div>
          </li>
        </ul>
        </better-scroll>
      </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import { dateFormat } from 'vux'
  export default {
    data(){
      return{
        regList:[]
      }
    },
    methods:{
      isUse(item){
        if(item.actTreatTime){
          return '已就诊'
        }else if(item.orderstatus==='4'){
          return '已退号'
        }else {
          if (dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)>item.regDate.substring(0,10)){

            return '已过期'
          }else {
            return '未就诊'
          }
        }

      },
      getList(){
//        let params={}
        this.$api.getRegistList().then((data=>{
//           console.log(data)
            this.regList=data
//        this.$nextTick(()=>{
//          this.$refs.refbs.refresh()
//        })
        }))
      }
    },
    components:{
      myLine,
      betterScroll
    },
    mounted(){
      this.$nextTick(()=>{
          this.getList();
      })
    },
    watch:{
      '$route' (){
        this.getList();
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
 .better{
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   overflow: hidden;
   background-color: #eeeeee;
   .better-inner{
     margin-left: 9.5px;
     margin-right:10.5px;
     .wrapper{
       padding-bottom: 20px;
       margin-top: 10px;
       background: white;
       border-radius: 5px;
       .wrapper-info{
         position: relative;
         height: 44px;
         .name{
           font-weight: bold;
           line-height: 44px;
           margin-left: 10px;
           font-size: 17px;
           color: #353535;
         }
         .isUse{
           position: absolute;
           right: 10px;
           top: 13.5px;
           font-size: 17px;
           color: #13bf72;
         }
       }
     }
   }

 }
 .inner{
   font-size: 15px;

   color: #353535;
     margin-left: 10px;
     margin-top: 15px;
 }

</style>
