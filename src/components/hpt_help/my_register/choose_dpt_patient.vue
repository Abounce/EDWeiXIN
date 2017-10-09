
<template>
 <div>
    <div>
      <div class="personal-head clearfix">
        <div class="head-one">
           <img v-lazy="doctors.photo" class="image">
        </div>
        <div class="head-two">
        <span class="name">{{doctors.docName}}</span>
        <span class="job">{{doctors.positionalName}}</span>
        </div>
      </div>
      <div class="personal-body">
        <div class="body-one"><span class="one">挂号科室</span><span class="two">{{doctors.departName}}</span></div>
        <div class="body-two"><span class="three">挂号费用</span><span class="four">￥{{sumfree}}</span></div>
      </div>
      <div class="personal-time">
        <span class="one">就诊时间</span>
        <span class="two">{{rgd}}&nbsp;{{istime(rgjt)}}{{jp}}</span>
      </div>
      <div class="personal-choose">
        <span class="one">请选择就诊人</span>
        <span class="two" @click="addPatient">添加</span>
      </div>
      <div class="personal-patient">
        <ul>
          <li v-for="(item,index) in vistitlist">
            <div class="vist">
                <div class="vistname">{{item.name}}({{item.isChildren===1?"儿童":"成年"}})</div>
                <div class="vistnumber">{{item.idcartCode}}</div>
                <!--<div class="isgx">{{item.isChildren===1?"儿童":"成年"}}</div>-->
              <check-icon :value.sync="demo5" class="isgx" @click.native="nv"  >女</check-icon>
            </div>
          </li>
        </ul>
      </div>
      <div class="personal-phone">
         <span class="one">联系电话</span>
         <span class="two">{{doctors.mobilephone}}</span>
         <div class="three"></div>
      </div>
      <div class="personal-button" @click="register">
        <span>确认挂号</span>
      </div>
    </div>
 </div>
</template>

<script>
  import { CheckIcon} from 'vux'
   export default {
     data(){
       return{
         doctors:{},
         vistitlist:[],
         sumfree:'',
         rgjt:'',
         jp:'',
         rgd:'',
         demo5:false,

       }
     },
     watch:{
         '$route' () {
           this.getlist();
//           debugger
         },
//         '$store'(){
//           this.getlist();
//         }
     },
     mounted(){
         this.$nextTick(()=>{
           this.getlist();
         })
     },
     methods:{
       nv(){

       },
       //确认挂号
       register(){

       },
       //添加就诊人
       addPatient(){
         this.$router.push({name:'添加就诊人'})
       },
       istime(type){
//         let type = doctor.regJobType;
         if (type==="1"){
           return "上午"
         }else if(type==="2"){
           return "中午"
         }else {
           return "晚上"
         }
       },
       getvisit: function () {
         let openId='ogFdDwHpeOX5dGGvjptmed1pbkMo'
         let startdata={openId:openId}
         this.$api.getvisitlist(startdata).then((data=>{
//             console.log(data.length)

           this.vistitlist=data
         }))
       },
       getlist(){




         let doctorId = this.$loacalstore.get('doctorId');
         if (!doctorId){
           return
         }
         let sumFee = this.$loacalstore.get('sumFee');
         if (!sumFee){
           return
         }
         this.sumfree=sumFee;

         let rgjt = this.$loacalstore.get('regJobType');
         if (!rgjt){
           return
         }
         this.rgjt=rgjt
         let jp =  this.$loacalstore.get('jobTimePeriod');
         if (!jp){
           return
         }
         this.jp=jp
         let rgd = this.$loacalstore.get('regDate');
         if (!rgd){
           return
         }
         this.rgd=rgd


         console.log("传过来费用为"+sumFee)
//         console.log("病人界面的id"+doctorId)
         this.getdoctor(doctorId)
         this.getvisit()
       },
       getdoctor: function (doctorId) {
         let startdata={docCode:doctorId}
         this.$api.getdoctorlist(startdata).then((data=>{
//            console.log(data)
            this.doctors=data[0];
         }))

       }
     },
     components: {
       CheckIcon,
     },
   }
</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
   .personal-head{

     .head-one{
       /*display: inline-block;*/
       width: 80px;
       height: 80px;
       float: left;
       /*background: red;*/
      img{
        border-radius: 50px;
        margin-top: 15px;
        margin-left: 15px;
        width: 50px;
        height: 50px;
      }
     }
     .head-two{
       height: 80px;
       /*display: inline-block;*/
       float: left;
       line-height: 80px;
     .name{
       font-size: 17px;
       font-weight: 500;
       color: #353535;
     }
     .job{
       margin-left: 15px;
       font-size: 14px;
       font-weight: 500;
       color: #888888;
     }

     }
   }
   .personal-body{
     height: 64.5px;
     border-bottom: 10px solid #eeeeee;
     .body-one{
      margin-top:15.5px;
     .one{
      margin-left: 15px;
       font-size: 16px;
       color: #888888;
     }
     .two{

       margin-left: 10px;
       font-size: 16px;
       font-weight: 500;
       color: #353535;
     }
     }
     .body-two{
       margin-top: 15.5px;
     .three{
       margin-left: 15px;
       font-size: 16px;
       color: #888888;
     }
     .four{

       margin-left: 10px;
       font-size: 16px;
       font-weight: 500;
       color: #353535;
     }
     }
   }
   .personal-time{
     height: 45px;
     line-height: 45px;
     border-bottom: 10px solid #eeeeee;
     .one{
       margin-left: 15px;
       margin-top: 14.5px;
       font-size: 16px;
       color: #888888;
     }
     .two{
       margin-top: 14.5px;
       margin-left: 10.5px;
       font-size: 16px;
       font-weight: 500;
       color: #13bf72;
     }
   }
   .personal-choose{
     .one{
       display: inline-block;
       margin-left: 15px;
       margin-top: 15px;
       font-size: 17px;
       font-weight: 500;
       color: #353535;
     }
     .two{
       float: right;
       margin-right: 14.5px;
       margin-top: 7.5px;
       padding: 7.5px;
       border-radius: 3px;
       border: solid 1px #13bf72;
     }

   }
    .personal-patient{
      margin-top: 15px;
/*36 50 12*/
      .vist{
        height: 50px;
        display: flex;
        .vistname{
          text-align: center;
          flex: 36;
        }
        .vistnumber{
          text-align: center;
          flex: 50;
        }
        .isgx{
          text-align: left;
          flex: 12;
        }
      }

    }
   .personal-phone{
    /*margin-top: 50px;*/
     height: 49px;
     line-height: 49px;
     .one{
       display: inline-block;
       margin-left: 14.5px;
       /*margin-top: 17px;*/
     }
     .two{
       display: inline-block;
       margin-left: 10px;
       /*margin-top: 17px;*/
     }
     .three{

       float: right;
       display: inline-block;
       .bgimage('Contacts');
       background-size: 26px 21.5px;
       background-position:center center
     }
   }
   .personal-button{
     margin-top: 30px;
     text-align: center;
     span{
       color: white;
       padding:2% 37%;
       background-color: #13bf72;;
       border-radius: 5px;
       border: solid 1px #11ad67;
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
