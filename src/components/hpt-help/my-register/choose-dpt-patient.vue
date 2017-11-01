
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
      <my-line></my-line>

      <div class="personal-body">
        <div class="body-one"><span class="one">挂号科室</span><span class="two">{{doctors.departName}}</span></div>
        <div class="body-two"><span class="three">挂号费用</span><span class="four">￥{{sumfree|changePrice}}</span></div>
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
          <li v-for="(item,index) in vistitlist" @click="chooseItem(index)">
            <div class="vist">
                <div class="vistname">{{item.name}}({{item.isChildren===1?"儿童":"成年"}})</div>
                <div class="vistnumber">{{item.idcartCode}}</div>
                <!--<div class="isgx">{{item.isChildren===1?"儿童":"成年"}}</div>-->
                <check-icon :value.sync="item.isIcon" class="isgx" @click.native="nv(item)"  ></check-icon>
            </div>
            <my-line></my-line>

          </li>
        </ul>
      </div>

      <div class="personal-phone">
         <span class="one">联系电话</span>
         <span class="two">{{doctors.mobilephone}}</span>
         <div class="three icon iconfont icon-tongxunlu"></div>
      </div>
      <div class="personal-button" @click="register">
        <span>确认挂号</span>
      </div>
    </div>
 </div>
</template>

<script>
  import { CheckIcon} from 'vux'
  import myLine from '../../../common/component/myLine.vue'
   export default {
     filters: {
       changePrice: function (value) {
         return  value.toFixed(2)
       }
     },
     data(){
       return{
         doctors:{},
         vistitlist:[],
         sumfree:0,
         rgjt:'',
         jp:'',
         rgd:'',
//         demo5:false,
         currentItem:0,
         currentIndex:0,
         currentTrue:{}


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
       chooseItem(index){
         this.currentItem=index
       },
       nv(itemdata){
//         this.demo5=false
         this.vistitlist.forEach((item=>{
           item.isIcon=false
         }))
         itemdata.isIcon=true
         this.currentTrue=itemdata
       },
       //确认挂号
       register(){
         let params={orderType:1,orderChannel:1,orderTitle:'挂号',orderMoney:this.sumfree,cardNo:this.currentTrue.visitCardIds[0],regJobType:this.rgjt
         ,deptId:this.doctors.deptCode,deptName:this.doctors.departName,doctorId:this.doctors.id,doctorName:this.doctors.docName,registerType:1,regData:this.rgd}
         this.$api.getRegistSub(params).then((data=>{
           this.$vux.toast.text('挂号成功', 'middle')
         })).catch((err)=>{
           this.$vux.toast.text(err.data.errorMsg,'middle')
         })

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
         this.$api.getVisitList(startdata).then((data=>{
//             console.log(data.length)
           data.forEach(item=>{
               item.isIcon=false;
           });

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


//         console.log("传过来费用为"+sumFee)
//         console.log("病人界面的id"+doctorId)
         this.getdoctor(doctorId)
         this.getvisit()
       },
       getdoctor: function (doctorId) {
         let startdata={docCode:doctorId}
         this.$api.getDoctorList(startdata).then((data=>{
//            console.log(data)
            this.doctors=data[0];
         }))

       }
     },
     components: {
       CheckIcon,
       myLine
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
       font-weight: bold;
       color:@color-zynr;
     }
     .job{
       margin-left: 15px;
       font-size: 14px;
       font-weight: 500;
       color: @color-fznr;
     }

     }
   }
   .personal-body{
     height: 64.5px;
     border-bottom: 10px solid @color-background;
     .body-one{
       font-size: 16px;
       color: @color-fznr;
      margin-top:15.5px;
     .one{
      margin-left: 15px;
       font-size: 16px;
       color: @color-fznr;
     }
     .two{

       margin-left: 10px;
       font-size: 16px;
       font-weight: bold;
       color: @color-zynr;
     }
     }
     .body-two{
       margin-top: 15.5px;
     .three{
       margin-left: 15px;
       font-size: 16px;
       color: @color-fznr;
     }
     .four{

       margin-left: 10px;
       font-size: 16px;
       font-weight: bold;
       color: @color-zynr;
     }
     }
   }
   .personal-time{
     height: 45px;
     line-height: 45px;
     border-bottom: 10px solid @color-background;
     .one{
       margin-left: 15px;
       margin-top: 14.5px;
       font-size: 16px;
       color:@color-fznr;
     }
     .two{
       margin-top: 14.5px;
       margin-left: 10.5px;
       font-size: 16px;
       font-weight: 500;
       color: @color-zsd;
     }
   }
   .personal-choose{
     .one{
       display: inline-block;
       margin-left: 15px;
       margin-top: 15px;
       font-size: 17px;
       font-weight: bold;
       color: @color-zynr;

     }
     .two{
       float: right;
       margin-right: 14.5px;
       margin-top: 7.5px;
       padding: 7.5px;
       border-radius: 3px;
       border: solid 1px @color-zsd;
     }

   }
    .personal-patient{
      margin-top: 15px;
/*36 50 12*/
      .vist{
        height: 50px;
        display: flex;
        .vistname{
          line-height: 50px;
          text-align: center;
          flex: 36;
          font-size: 15px;
          font-weight: bold;
          color:@color-zynr;
        }
        .vistnumber{
          font-size: 15px;
          font-weight: bold;
          color: #1793e6;
          line-height: 50px;
          text-align: center;
          flex: 50;
        }
        .isgx{
          line-height: 50px;
          text-align: left;
          flex: 12;
        }
      }

    }
   .personal-phone{
     font-size: 16px;
     font-weight: bold;

     color:@color-zynr;
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
       margin-right: 15px;
       font-size: 25px;
       /*display: inline-block;*/
       color: @color-fgx;
     }
   }
   .personal-button{
     margin-top: 30px;
     text-align: center;
     span{
       color: @color-withe;
       padding:2% 37%;
       background-color: @color-zsd;
       border-radius: 5px;
       border: solid 1px @color-zsd;
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
