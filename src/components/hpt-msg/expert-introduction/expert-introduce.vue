
<template>
   <div>
     <betterscroll class="wrapper">
       <ul>
         <li v-for="(doctor,index) in tabs" @click="chooseExpert(doctor.id)">
           <div>

           <div class="clearfix introduce">
           <div class="doctor-img">
             <img v-lazy="doctor.photo">
           </div>
           <div class="doctor-introduce">
             <div class="doctor-name">{{doctor.docName}}</div>
             <div class="doctor-grade"><span class="grade-one">职称:</span><span class="grade-two">{{doctor.positionalTitle}}</span></div>
             <div class="doctor-skill"><span class="skill-one">擅长:</span><span class="skill-two">{{doctor.deptName}}</span></div>
           </div>
           </div>
           <div class="detail">{{doctor.practiceExperienceString}}</div>
           </div>
         </li>
       </ul>
     </betterscroll>
   </div>
</template>

<script>
  import betterscroll from '../../../common/component/betterscroll.vue'
 export default {
   components:{
     betterscroll
   },
   data(){
     return{
        tabs:[]
     }

   },
   mounted(){
  this.getlist();
   },
   methods:{
    getlist(){
      let start={isExpert:1}
      this.$api.getDoctorList(start).then((data)=>{
//            console.log(data)
        this.tabs=data;
      })
     },
     chooseExpert(doctorId){
//      console.log("doctorId"+doctorId)
       this.$loacalstore.set('doctorId',doctorId)
       this.$router.push({ name:'专家详情'})
     }
   }
 }

</script>

<style scoped lang="less" type="text/less">
 .wrapper{
   background: #cdcdcd;
   position: absolute;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   overflow: hidden;
   ul{
     li{
        border-radius: 5px;
       padding: 9.5px;
       background: white;
       margin: 10px;
       .introduce{
         border-bottom: solid 0.5px #eeeeee;
       .doctor-img{
         float: left;
         display: inline-block;
         background: #ffffff;
         height: 75.5px;
         width: 76.5px;
         text-align: center;
         img{
           border-radius: 50px;
           margin-top: 10px;
           margin-left: 9.5px;
           width: 56px;
           height: 56px;
           background: #ffffff;
         }

       }
       .doctor-introduce{
         float: left;
         height: 75.5px;
         .doctor-name{
           font-size: 17px;
           font-weight: 500;
           margin-top: 9.5px;
         }
         .doctor-grade{
           margin-top: 9.5px;
           font-size: 14px;
           .grade-one{

             color: #888888;
           }
           .grade-two{
             color: #353535;
           }
         }
         .doctor-skill{
           font-size: 14px;
           margin-top: 4.5px;
           .skill-one{
             color: #888888;
           }
           .skill-two{
             color: #353535;
           }
         }
       }
       }
       .detail{
         margin-top: 2px;
         height: 100px;
         /*background: red;*/
       }
     };
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
