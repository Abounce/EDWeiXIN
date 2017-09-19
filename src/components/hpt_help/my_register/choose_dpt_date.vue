<!--选择挂号日期-->
<template>
  <div>
    <betterscroll class="wrapper" :scrollX="true" :data="tabs" >
      <div class="inner" :style="{ width:tatalwith+'px' }">
        <ul >
          <li v-for="(tab,index) in tabs" class="liwidth" @click="setindex(index,tab.doctors)">
            <div class="date">{{tab.date}}</div>
            <div class="week">{{tab.week}}</div>
          </li>
        </ul>
      </div>
    </betterscroll>
    <betterscroll class="doctor" :data="currentdoctors" >
      <ul>
        <li v-for="(doctor,index) in currentdoctors">
          <div class="doctor-img">
            <img src="" alt="">
          </div>
          <div class="doctor-introduce">
            <div class="doctor-name">{{doctor.name}}</div>
            <div class="doctor-grade"><span class="grade-one">职称:</span><span class="grade-two">主任医师</span></div>
            <div class="doctor-skill"><span class="skill-one">擅长:</span><span class="skill-two">呼吸道感染</span></div>
          </div>
          <div class="right">{{doctor.ticket}}</div>
        </li>
      </ul>

    </betterscroll>
  </div>

</template>

<script>
  import { dateFormat } from 'vux'
  import betterscroll from "../../../common/component/betterscroll.vue"
  import {getElementWidth} from"../../../api/utils.js"
  export default {
    data(){
      return{
        currentdoctors:0,
        tatalwith:0,
        tabs:[{date:"08-29",week:"星期一",doctors:[{
          name:"第一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"10"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"最后一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"30"
        }]},{date:"08-29",week:"星期一",doctors:[{
          name:"第二个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"10"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"最后一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"30"
        }]},{date:"08-29",week:"星期一",doctors:[{
          name:"第一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"10"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"最后一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"30"
        }]},{date:"08-29",week:"星期一",doctors:[{
          name:"第一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"10"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"最后一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"30"
        }]},{date:"08-29",week:"星期一",doctors:[{
          name:"第一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"10"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"王凯",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"50"
        },{
          name:"最后一个",
          grade:"主任医生",
          skill:"呼吸道感染",
          ticket:"30"
        }]},
          {date:"08-29",week:"星期一",doctors:[{
            name:"第一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]},{date:"08-29",week:"星期一",doctors:[{
            name:"第一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]}
          ,{date:"08-29",week:"星期一",doctors:[{
            name:"第一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]},{date:"08-29",week:"星期一",doctors:[{
            name:"第一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]},{date:"08-29",week:"星期一",doctors:[{
            name:"第一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]},
          {date:"08-29",week:"最后一个",doctors:[{
            name:"第十个个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"10"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"王凯",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"50"
          },{
            name:"最后一个",
            grade:"主任医生",
            skill:"呼吸道感染",
            ticket:"30"
          }]}],
      }
    },
    components: {
      betterscroll
    },
    mounted(){
      this.$nextTick(function () {
        this.getlist();
        this.$nextTick(function () {

        this.tatalwith = getElementWidth("liwidth");
        })

      })
    },
    methods:{
      setindex(index,docoto){
        this.currentdoctors=docoto;
      },
      getlist(){
        let code = this.$route.params.deptCode;
        if (!code){
          return;
        }
        console.log("传过来的数据="+code);
        let dateformat = dateFormat(new Date(),'YYYY-MM-DD HH:mm:ss');
        console.log("当前时间="+dateformat);
        let startDate={startDate:dateformat};
        let deptCode={deptCode:code}
        this.$api.getdoctorvisit(startDate,deptCode).then(data=>{
          console.log(data)
        })
      }
    },
    watch:{
      '$route' () {
        this.getlist();

      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
  .wrapper{
    width: 100%;
    height: 50px;
    overflow: hidden;
    border-bottom: 10px solid #cdcdcd ;
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
    background: #ffffff;
    overflow: hidden;
    li{
      height: 105px;
      background: #ffffff;
      border: solid 0.5px #cdcdcd;
      .doctor-img{
        float: left;
        background: #ffffff;
        height: 105px;
        width: 86px;
        text-align: center;
        img{
          border-radius: 50px;
          margin-top: 23.5px;
          width: 56px;
          height: 56px;
          background: mediumvioletred;
        }


      }
      .doctor-introduce{
        float: left;
        .doctor-name{

          font-size: 17px;
          font-weight: 500;
          line-height: 52px;
        }
        .doctor-grade{
          font-size: 15px;
          .grade-one{

            color: #888888;
          }
          .grade-two{
          color: #353535;
          }
        }
        .doctor-skill{
          margin-top: 9.5px;
          .skill-one{

            color: #888888;
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
        background-color: #ff8c19;
        float: right;
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;

      }
    }

  }

</style>
