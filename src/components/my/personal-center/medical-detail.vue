<template>
 <div>
   <div class="history">
     <div class="title"><span class="icon iconfont icon-lishijilu" style="font-size: 15px; color: #888888;"></span>就诊记录</div>
     <better-scroll class="wrapper" ref="refbs">
       <ul>
         <li @click="finishOrder" v-for="(item,index) in itemList">
           <div>
             <div class="info">
               <div class="name">{{item.patName}}</div>
               <div class="isUse">{{isUse(item)}}</div>
               <div class="time">{{item.regDate.substring(0,10)}}</div>
             </div>
             <my-line></my-line>
             <div class="com">
               <span class="com-one">就诊科室:</span><span>{{item.deptName}}</span>
             </div>
             <div class="com">
               <span  class="com-one">就诊医生:</span><span>{{item.doctorName}}</span>
             </div>
             <div class="com">
               <span  class="com-one zhenduan" >诊断:</span><span class="zhenduandiv">{{item.diagnosis}}</span>
             </div>
           </div>
         </li>

       </ul>
     </better-scroll>
   </div>
 </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import betterScroll from '../../../common/component/betterscroll.vue'
  import { dateFormat } from 'vux'
  export default {
    data(){
      return{
        itemList:[]
      }
    },
    components:{
      myLine,
      betterScroll
    },
    methods:{
      //已完成预约查看
      finishOrder(){
        this.$router.push({name:'已完成预约查看'})
      },
      isUse(item){
        if(item.actTreatTime){
          return '已就诊'
        }else if(item.orderstatus==='4'){
          return '已退号'
        }else {
          if (dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)>item.regDate.substring(0,10)){
            return '未就诊'
          }else {
            return '已过期'
          }
        }
      },
      getList(){
        this.$api.getRegistList().then((data=>{
          data.forEach((item=>{
            if (item.actTreatTime||item.orderstatus==='4'|| dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss').substring(0,10)<item.regDate.substring(0,10)){
              this.itemList.push(item)
            }
          }))
          this.$nextTick(()=>{
            this.$refs.refbs.refresh()
          })
        }))
      }
    },
    mounted(){
      this.$nextTick(()=>{
         this.getList()
      })
    },
    watch:{
      '$route' () {
        this.getList();
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .history{
    .title{
      text-align: center;
      margin-top: 20px;
      font-size: 15px;
      color: #888888;
    }
    .wrapper{

      li{
        height: 185px;
        background: white;
        border-radius: 5px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 10px;
      }
      background: #cdcdcd;
      position: absolute;
      /*top:200px;*/
       top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      /*background: yellow;*/
      .info{
        position: relative;
        height: 46px;
        line-height: 46px;
        margin-left: 9.5px;

      }
      .name{
        font-size: 17px;

        color: #353535;
      }
      .time{
        font-size: 15px;
        color: #888888;
        position: absolute;
        top: 0;
        right: 20px;
      }
      .isUse{
        line-height: 18px;
        /*margin-top: 10px;*/
        text-align: center;
        position: absolute;
        top: 13.5px;
        left: 80px;
        width: 51px;
        height: 18px;
        border-radius: 9px;
        color: white;
        background-color: #e64845;
      }
      .com{
        position: relative;
        margin-left: 9.5px;
        margin-top: 14.5px;
        .com-one{
          font-size: 17px;
          color: #888888;
        }
        .zhenduan{
          margin-left:33px;
        }
        .zhenduandiv{
          position: absolute;
          top: 0;
          left:75px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; //文本行数
          overflow: hidden;

        }
      }
    }
  }
  .clearfix:after{
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
