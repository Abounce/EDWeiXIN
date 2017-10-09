<!--选择医生-->
<template>
  <div>
    <div class="user">
      <div class="doctor-img">
        <img v-lazy="topdata.photo">
      </div>
      <div class="doctor-introduce">
        <div class="doctor-name">{{topdata.docName}}</div>
        <div class="doctor-grade"><span class="grade-one">职称:</span><span class="grade-two">{{topdata.positionalName}}</span></div>
        <div class="doctor-skill"><span class="skill-one">擅长:</span><span class="skill-two">{{topdata.departName}}</span></div>
      </div>
    </div>
    <div class="order-or-introduce">
      <div class="tab-order" @click="chooseOrder(isorder,isintroduce)" :class="{selectleft:isorder}">预约</div>
      <div class="tab-introduce" @click="chooseIntroduce(isorder,isintroduce)" :class="{selectleft:isintroduce}">介绍</div>
    </div>
      <div class="order" v-show="isorder">
        <div class="see">
          <group :title="(' ')"  class="only-button">
            <x-switch :title="(' ')" v-model="value1"></x-switch>
          </group>
          <span class="only-see">只看有号</span>
        </div>

        <betterscroll class="wrapper" :scrollX="true" :data="tabs">
            <div :style="{ width:tatalwith+'px' }" class="inner">
              <ul>
                <li v-for="(tab,index) in tabs" class="liwidth" @click="setindex(index,tab.doctors)" :class="{selectleft:currentitem===index}" >
                  <div class="date">{{tab.regDate}}</div>
                  <div class="week">{{tab.weekDay}}</div>
                </li>
              </ul>
            </div>
        </betterscroll>
        <div class="showtime">
          <div class="morning"v-for="(doctor,index) in currentdoctors">
            <div class="time">{{istime(doctor)}}{{doctor.jobtimePeriod}}</div>
            <div class="price">￥{{doctor.sumFee}}</div>
            <div class="isnumber">余号{{doctor.surplusRegTot}}</div>
            <div class="yuyue" >
              <span class="yuyue-inner" @click="order(doctor)">
                  预约
              </span>
            </div>
          </div>
          <!--<div class="afternoon">-->
            <!--<div class="time">下午(8:00-12:00)</div>-->
            <!--<div class="price">￥6.00</div>-->
            <!--<div class="isnumber">余号13</div>-->
            <!--<div class="yuyue">预约</div>-->
          <!--</div>-->
          <!--<div class="night">-->
            <!--<div class="time">晚上(8:00-12:00)</div>-->
            <!--<div class="price">￥6.00</div>-->
            <!--<div class="isnumber">余号13</div>-->
            <!--<div class="yuyue">预约</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="introduce" v-show="isintroduce">
        <div class="introduce-a">学术任职</div>
        <p class="introduce-b">{{topdata.academicActivitiesString}}</p>
        <div class="introduce-c">擅长疾病</div>
        <p class="introduce-d">{{topdata.specializeDiseaseString}}</p>
      </div>

  </div>
</template>

<script>
  import betterscroll from "../../../common/component/betterscroll.vue"
  import { XSwitch, Group  } from 'vux'
  import { dateFormat } from 'vux'
  import {getnextday,getweek} from "../../../api/utils.js"
  import {getElementWidth} from"../../../api/utils.js"
 export  default {
   data(){
    return{
      value1:true,
      isorder:true,
      isintroduce:false,
      tabs:[],
      tatalwith:0,
      currentitem:0,
      currentdoctors:[],
      topdata:{}
    }
   },
   methods:{
     //预约医生
     order(doctor){
       this.$loacalstore.set('sumFee',doctor.sumFee)
       this.$loacalstore.set('jobTimePeriod',doctor.jobtimePeriod)
       this.$loacalstore.set('regDate',doctor.regDate)
       this.$loacalstore.set('regJobType',doctor.regJobType)
       this.$router.push({name:'choosedptpatient'})
     },
     //预约
     chooseOrder(isorder,isintroduce){
       this.isorder=true
       this.isintroduce=false
     },
     //介绍
     chooseIntroduce(isorder,isintroduce){
       this.isorder=false
       this.isintroduce=true

     },
     istime(doctor){
       let type = doctor.regJobType;
       if (type==="1"){
         return "上午"
       }else if(type==="2"){
         return "中午"
       }else {
         return "晚上"
       }
     },
     setindex(index,docoto){
       this.currentdoctors=docoto;
       this.currentitem=index;
     },

     getlist(){
//       let doctorId = this.$route.params.doctorId;
//       let doctorId = this.$store.state.doctorId;
       let doctorId = this.$loacalstore.get('doctorId')
       if (!doctorId){
         return
       }
//       console.log("传递过来的数据doctorId="+doctorId)
       let dateformat = dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss');

       let startDate={startDate:dateformat,doctorId:doctorId}
       this.$api.getdoctorvisit(startDate).then((data)=>{
         this.sortdata(data)
       })
     },
     sortdata(data){
//        console.log(data);
       let firstdoctors=[]
       let lastdoctors=[]
       let length = data.length;
       let firstday=data[0].regDate.substr(0,10);
       let lastday=data[data.length-1].regDate.substr(0,10)
       for(let i=0;i<length;i++){
         if(data[i].regDate.substr(0,10)===firstday){
           firstdoctors.push({
            surplusRegTot:data[i].surplusRegTot,sumFee:data[i].sumFee,doctorId:data[i].doctorId,jobtimePeriod:data[i].jobtimePeriod,regJobType:data[i].regJobType,regDate:data[i].regDate.substr(0,10)})
         }
       }
//       console.log("第一天"+firstday)
//        console.log("最后一天"+lastday)
       let istrue=true
       let newarry=[];
       let currentday=firstday;
       let firtweek = getweek(firstday);
       newarry.push({weekDay:firtweek,regDate:firstday.substr(5,10),doctors:firstdoctors});
       while(istrue){
         let nextday = getnextday(currentday);
         currentday=nextday;

         if (currentday!==lastday){
           let nextdoctors=[]
           let nextweek = getweek(currentday);
           for(let i=0;i<length;i++){
             if(data[i].regDate.substr(0,10)===currentday){
               nextdoctors.push({
                 surplusRegTot:data[i].surplusRegTot,sumFee:data[i].sumFee,doctorId:data[i].doctorId,jobtimePeriod:data[i].jobtimePeriod,regJobType:data[i].regJobType,regDate:data[i].regDate.substr(0,10)})
             }
           }

           newarry.push({weekDay:nextweek,regDate:currentday.substr(5,10),doctors:nextdoctors})

         }
         if(currentday===lastday){
           istrue=false;
         }
       }

       for(let i=0;i<length;i++){
         if(data[i].regDate.substr(0,10)===lastday){
           lastdoctors.push({
             surplusRegTot:data[i].surplusRegTot,sumFee:data[i].sumFee,doctorId:data[i].doctorId,jobtimePeriod:data[i].jobtimePeriod,regJobType:data[i].regJobType,regDate:data[i].regDate.substr(0,10)})
         }
       }
       let lastweek = getweek(lastday);
       newarry.push({weekDay:lastweek,regDate:lastday.substr(5,10),doctors:lastdoctors});
//       console.log(newarry)
       this.tabs=newarry;
       this.$nextTick(()=> {

         this.tatalwith = getElementWidth("liwidth");
         this.setindex(0,this.tabs[0].doctors)
       })
     },
     gettoplist(){
//       let doctorId = this.$store.state.doctorId;
       let doctorId = this.$loacalstore.get('doctorId')
       if (!doctorId){
         return
       }
//       console.log("----------医生的id="+doctorId)
       let start={docCode:doctorId}
      this.$api.getdoctorlist(start).then((data=>{
//             console.log(data)
        this.topdata=data[0]
      }))
     }
 },
   components: {
     XSwitch,
     Group,
     betterscroll
   },
   mounted(){
     this.$nextTick(function () {
       this.gettoplist();
       this.getlist();

     })

   },
   computed:{

   },
   watch:{
     '$route' () {
       this.gettoplist();
       this.getlist();
     }
   }
 }

</script>

<style scoped lang="less" type="text/less">
 .user{
   /*background: red;*/
   height: 94px;
   border-bottom: 10px solid #cdcdcd;
   .doctor-img{
     float: left;
     display: inline-block;
     background: #ffffff;
     height: 94px;
     width: 86px;
     text-align: center;
     img{
       border-radius: 50px;
       margin-top: 15px;
       width: 56px;
       height: 56px;
       background: #ffffff;
     }

   }
   .doctor-introduce{
     float: left;
     height: 94px;
     .doctor-name{
       font-size: 17px;
       font-weight: 500;
      margin-top: 18px;
     }
     .doctor-grade{
    margin-top: 14px;
       font-size: 13px;
       .grade-one{

         color: #888888;
       }
       .grade-two{
         color: #353535;
       }
     }
     .doctor-skill{

       margin-top: 6px;
       .skill-one{

         color: #888888;
       }
       .skill-two{
         color: #353535;
       }
     }
   }
 }
  .order-or-introduce{
    display: flex;
    height: 49px;
    .tab-order{
      flex: 1;
      line-height: 49px;
      text-align: center;
    }
    .tab-introduce{
      flex: 1;
      line-height: 49px;
      text-align: center;
    }
  }
  .order{
    height: 240px;
    /*background: yellow;*/
    .see{
      position: relative;
      height: 49px;
      .only-see{
       position: absolute;
        left: 14.5px;
        top: 14.5px;
      }
      .only-button{

      }
    }
    .wrapper {
      width: 100%;
      height: 52px;
      overflow: hidden;
      /*border-bottom: 10px solid #cdcdcd ;*/
      .inner {
        ul {
          white-space: nowrap;
          font-size: 0;
          li {
            font-size: 13px;
            margin-left: 15px;
            text-align: center;
            line-height: 25px;
            display: inline-block;
          }
        }
      }
    }
    .showtime{
      .time{
        text-align: center;
        flex: 2;
      }
      .price{
        text-align: center;
        flex: 1;
      }
      .isnumber{
        text-align: center;
        flex: 1;
      }
      .yuyue{
        text-align: center;
        /*line-height:70px ;*/

        flex: 1;
      }
      .morning{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue-inner{


          padding: 6px 12px;
          border-radius: 3px;
          border: solid 1px #13bf72;
        }
      }
      .afternoon{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue{

        }
      }

      .night{
        line-height: 70px;
        height: 70px;
        display: flex;
        .yuyue{

        }
      }

    }

  }
  .introduce{
    /*height: 300px;*/
    /*background: rebeccapurple;*/
    margin-top: 15px;
    margin-left: 15px;
    .introduce-a,.introduce-c {

      font-size: 17px;
      font-weight: 500;
    }
    .introduce-b,.introduce-d{
      color: #353535;
      font-size: 14px;

    }
    .introduce-a{
      margin-top: 15px;
    }
    .introduce-c{
      margin-top: 15px;
    }

  }
 .selectleft{
   color: #13bf72;
   border-bottom: 1px solid #13bf72;

 }

</style>
