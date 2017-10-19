
<template>
  <div>
      <better-scroll class="wrapper" ref="refbs" >
        <ul>
          <li v-for="(item,index) in doctorList">
            <div class="inner">
                <div class="head-wrapper">
                 <img v-lazy="item.photo" class="head">
                </div>
                <div class="info">
                  <div class="one">
                    <span>{{item.docName}}</span>
                    <span>{{item.positionalName}}</span>
                  </div>
                  <div class="two">
                    <span>科室:</span>
                    <span>{{item.departName}}</span>
                  </div>
                  <!--<div class="three">-->
                    <!--<span>2017-10-11</span>-->
                    <!--<span>17:00:00</span>-->
                  <!--</div>-->
                </div>
                <div class="button" @click="order">再次预约</div>
            </div>
            <my-line></my-line>
          </li>
        </ul>
      </better-scroll>
      <is-reg v-show="!doctorList"></is-reg>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import isReg from '../../../common/component/is-reg.vue'
  export default {
    data(){
      return{
      doctorList:[]
      }
    },
    mounted(){
      this.$nextTick(()=>{
            this.getList()
      })
    },
    methods:{
      order(){
        this.$router.push({name:'预约挂号'})
      },
      getList(){
        this.$api.getDoctorPastList().then((data)=>{
          this.doctorList=data
          this.$nextTick(()=>{
             this.$refs.refbs.refresh();
          })
        })
      }
    },
    components:{
      myLine,
      betterScroll,
      isReg
    },
    watch:{
      '$route' (){
        this.getList()
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">

 .wrapper{
   /*display: none;*/
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow: hidden;
   .inner{
     position: relative;
     height: 95px;
     .head-wrapper{
       float: left;
       width: 86px;
       /*background: yellow;*/
       text-align: center;
       height: 95px;
       .head{
         margin-top: 17px;
         width: 56px;
         height: 56px;
         border-radius: 50%;
         /*background: red;*/
       }
     }
     .info{
       float: left;
       .one{
         margin-top: 16.5px;
       }
       .two{
         margin-top: 14.5px;
       }
       .three{
         margin-top: 9px;
       }
     }
     .button{
       position: absolute;
       top: 19px;
       right: 15px;
       font-size: 14px;
       color: #13bf72;
     }
   }
 }

</style>
