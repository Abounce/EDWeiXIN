<!--选择挂号日期-->
<template>
  <div>
    <betterscroll class="wrapper" :scrollX="true" :data="tabs" >
      <div class="inner" :style="{ width:tatalwith+'px' }">
        <ul>
          <li v-for="(tab,index) in tabs" class="liwidth" @click="setindex(index,tab.doctors)" :class="{selectleft:currentitem===index}">
            <div class="date">{{tab.regDate}}</div>
            <div class="week">{{tab.weekDay}}</div>
          </li>
        </ul>
      </div>
    </betterscroll>
    <betterscroll class="doctor" :data="currentdoctors" >
      <ul>
        <li v-for="(doctor,index) in currentdoctors" @click="chooseDoctor(doctor.doctorId)">
          <div class="doctor-img">
            <img v-lazy="doctor.photo">
          </div>
          <div class="doctor-introduce">
            <div class="doctor-name">{{doctor.docName}}</div>
            <div class="doctor-grade"><span class="grade-one">职称:</span><span class="grade-two">{{doctor.positionalTitle}}</span></div>
            <div class="doctor-skill"><span class="skill-one">擅长:</span><span class="skill-two">{{doctor.deptName}}</span></div>
          </div>
          <div class="right" :class="{righthuse:isActive(doctor)}">{{doctor.surplusRegTot}}</div>
        </li>
      </ul>

    </betterscroll>
  </div>

</template>

<script>
  import { dateFormat } from 'vux'
  import {getnextday,getweek} from "../../../api/utils.js"
  import betterscroll from "../../../common/component/betterscroll.vue"
  import {getElementWidth} from "../../../api/utils.js"
  export default {

    beforeRouteUpdate (to, from, next) {
      this.getlist();
    },
    data(){
      return{
        currentitem:0,
        currentdoctors:[],
        tatalwith:0,
        tabs:[]

      }
    },
    components: {
      betterscroll
    },
    mounted(){
      this.$nextTick(function () {
        this.getlist();


      })
    },
    methods:{
      isActive(doctor){
        if(doctor.surplusRegTot===0) {
          return true
        }else {
          return false
        }
      },
      //选择医生
      chooseDoctor(doctorId){
        this.$loacalstore.set('doctorId',doctorId)
        this.$router.push({ name: '选择挂号医生'});
      },
      setindex(index,docoto){
        this.currentdoctors=docoto;
        this.currentitem=index;
      },
      getlist(){

        let code =    this.$loacalstore.get('deptCode')
        if (!code){
          return;
        }

        let dateformat = dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss');

        let startDate={startDate:dateformat,deptCode:code}
        this.$api.getDoctorVisit(startDate).then(data=>{

          this.sortdata(data)

        })
      },
      sortdata(data){
        let firstdoctors=[]
        let lastdoctors=[]
        let length = data.length;
        let firstday=data[0].regDate.substr(0,10);
        let lastday=data[data.length-1].regDate.substr(0,10)
        for(let i=0;i<length;i++){
           if(data[i].regDate.substr(0,10)===firstday){
             firstdoctors.push({photo:data[i].photo,docName:data[i].docName,positionalTitle:data[i].positionalTitle,deptName:data[i].deptName,surplusRegTot:data[i].surplusRegTot,doctorId:data[i].doctorId})
           }
        }

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
               nextdoctors.push({photo:data[i].photo,docName:data[i].docName,positionalTitle:data[i].positionalTitle,deptName:data[i].deptName,surplusRegTot:data[i].surplusRegTot,doctorId:data[i].doctorId})
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
            lastdoctors.push({photo:data[i].photo,docName:data[i].docName,positionalTitle:data[i].positionalTitle,deptName:data[i].deptName,surplusRegTot:data[i].surplusRegTot,doctorId:data[i].doctorId})
          }
        }
        let lastweek = getweek(lastday);
       newarry.push({weekDay:lastweek,regDate:lastday.substr(5,10),doctors:lastdoctors});
//       console.log(newarry)
          this.tabs=newarry;
          this.$nextTick(function () {
          this.tatalwith = getElementWidth("liwidth");
          this.setindex(0,this.tabs[0].doctors)
        })
      }
    },
    watch:{
      '$route' () {
        this.getlist();
      },
      '$store'(){
        this.getlist();
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
  .wrapper{
    width: 100%;
    height: 52px;
    overflow: hidden;
    border-bottom: 10px solid @color-background;

    .inner{

      ul{
        white-space: nowrap;
        font-size: 0;

        li{
          font-size: 13px;
          margin-left: 15px;
          text-align: center;
          line-height: 25px;
          display: inline-block;

          .date{
            height: 25px;

          }
          .week{
            height: 25px;

          }
        }
      }
    }
  }
  .doctor{

    position: absolute;
    top:60px;
    left: 0;
    bottom: 0;
    right: 0;
    background: @color-withe;
    overflow: hidden;
    li{
      height: 105px;
      background: @color-withe;
      border: solid 0.5px @color-background;
      .doctor-img{
        float: left;
        background:@color-withe;
        height: 105px;
        width: 86px;
        text-align: center;
        img{
          border-radius: 50px;
          margin-top: 23.5px;
          width: 56px;
          height: 56px;
          background: @color-withe;
        }


      }
      .doctor-introduce{
        float: left;
        .doctor-name{

          font-size: 17px;
          font-weight: bold;
          line-height: 52px;
        }
        .doctor-grade{
          font-size: 15px;
          .grade-one{

            color: @color-center;
          }
          .grade-two{
          color: @color-right;
          }
        }
        .doctor-skill{
          margin-top: 9.5px;
          font-size: 15px;
          .skill-one{

            color: @color-center;
          }
          .skill-two{
            color: #353535;
          }
        }
      }
      .right{
        line-height: 24px;
        text-align: center;
        margin-top: 18px;
        margin-right: 14.5px;
        width: 54px;
        height: 24px;
        border-radius: 12px;
        background-color:@color-jgts;
        float: right;
        font-size: 14px;
        font-weight: 500;
        color: @color-withe;
      }
      .righthuse{
        background-color: @color-fgx;
      }

    }

  }
  .selectleft{
    color: #13bf72;
    border-bottom: 1px solid #13bf72;



  }

</style>
