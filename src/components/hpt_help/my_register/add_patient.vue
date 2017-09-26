
<template>
 <div>
     <div class="tab">
       <div class="tab-man" @click="chooseman" :class="{selectleft:isman}">成人</div>
       <div class="tab-child" @click="choosechild" :class="{selectleft:ischild}">儿童/新生儿</div>
     </div>
     <div v-if="isman" class="man">
       <div class="name">
         <label for="nameinput" class="one" >真实姓名:</label>
         <input type="text" id="nameinput" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="sex">
         <span class="one">性别:</span>
         <check-icon :value.sync="demo1" class="two"   @click.native="nan">男</check-icon>
         <check-icon :value.sync="demo2" class="three" @click.native="nv">女</check-icon>
         <check-icon :value.sync="demo3" class="four"  @click.native="baomi">保密</check-icon>
       </div>
       <div class="birthday">
       <datetime v-model="value1"  :title="('出生日期:')" placeholder="请选择"></datetime>
       </div>
       <div class="card">
         <label for="cardinput" class="one"  >身份证号:</label>
         <input type="text" id="cardinput" v-model="cardmsg" class="two"  placeholder="请填写就诊人身份证号">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="phone">
         <label for="nameinput" class="one">手机号码:</label>
         <input type="text" id="phoneinput" v-model="phonemsg" class="two"  placeholder="请填写建卡预留手机号">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="iscard">
         <label for="iscardinput" class="one">就诊卡号:</label>
         <input type="text" id="iscardinput" v-model="iscardmsg" class="two"  placeholder="请填写就诊卡号" >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="autocode">
         <label for="autoinput" class="one">验证码:</label>
         <input type="text" id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="weui-icon-clear three" ></div>
         <a href="javascript:">获取验证</a>
       </div>
       <div class="visitcard" style="text-align: right">

           <span>没有就诊卡?</span> <a href="javascript:">在线建卡</a>
       </div>
       <div class="button" @click="commitMan">
         <span>添加</span>
       </div>
     </div>
     <div v-if="ischild" class="child">
       <div class="name">
         <label for="nameinputa" class="one" >真实姓名:</label>
         <input type="text" id="nameinputa" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="sex">
         <span class="one">性别:</span>
         <check-icon :value.sync="demo1" class="two"   @click.native="nan">男</check-icon>
         <check-icon :value.sync="demo2" class="three" @click.native="nv">女</check-icon>
         <check-icon :value.sync="demo3" class="four"  @click.native="baomi">保密</check-icon>
       </div>
       <div class="birthday">
         <label for="birthdayinputa" class="one">出身日期:</label>
         <input type="text" id="birthdayinputa" v-model="birthdaymsg" class="two"  >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="card">
         <label for="cardinputa" class="one"  >患者身份证:</label>
         <input type="text" id="cardinputa" v-model="cardmsg" class="two"  placeholder="请填写就诊人身份证号">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="phone">
         <label for="nameinputa" class="one">监护人手机:</label>
         <input type="text" id="phoneinputa" v-model="phonemsg" class="two"  placeholder="请填写建卡预留手机号">
         <div class="weui-icon-clear three" ></div>
       </div>


       <div class="jhcard">
         <label for="jhcardinput" class="one">监护人身份证:</label>
         <input type="text" id="jhcardinput" v-model="automsg" class="two"  placeholder="请填写监护人身份证">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="iscard">
         <label for="iscardinputa" class="one">就诊卡号:</label>
         <input type="text" id="iscardinputa" v-model="iscardmsg" class="two"  placeholder="请填写就诊卡号" >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="autocode">
         <label for="autoinputa" class="one">验证码:</label>
         <input type="text" id="autoinputa" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="weui-icon-clear three" ></div>
         <a href="javascript:">获取验证</a>
       </div>
       <div class="visitcard" style="text-align: right">

         <span>没有就诊卡?</span> <a href="javascript:">在线建卡</a>
       </div>
       <div class="button" @click="commitChild">
         <span>添加</span>
       </div>
     </div>

 </div>
</template>

<script>

  import { CheckIcon,Datetime } from 'vux'
  import * as check from '../../../api/check.js'
  export default {
    data(){
      return{
        value1: '',
        isman:true,
        ischild:false,
        demo1: false,
        demo2:false,
        demo3:false,
        namemsg:'',
        birthdaymsg:'',
        cardmsg:'',
        phonemsg:'',
        automsg:'',
        iscardmsg:'',

    }
    },
    methods:{
      commitMan(){
//        let idcartCode='5137345454545454';
//        let visitCardId='351458'
        let sex = 0;
        let mobile='';
        let name=''
        let birthday=''
      if(!check.checkName(this.namemsg)){
         console.log('真实姓名填写有误')
         return ;
      }
      if(this.demo1){
         sex=1
      }
      if(this.demo2){
        sex=2
      }
      if(this.demo3){
        sex=3
      }
      if(!sex){
        return ;
      }
      if (!check.checkCard(this.cardmsg)){
        console.log('身份证号有误')
        return
      }
      if (!check.checkPhone(this.phonemsg)){
        console.log('手机号输入不正确')
        return
      }
      let startdata={idcartCode:this.cardmsg,isChildren:2,mobile:this.phonemsg,name:this.namemsg,
        sex:sex,birthday:this.value1,visitCardId:this.iscardmsg}
      this.$api.getvisitsave(startdata).then((data)=>{
            console.log(data)
        this.$router.push({ path:'choosedptpatient' })
      })
      },
      commitChild(){
        //        let idcartCode='5137345454545454';
//        let visitCardId='351458'
        let sex = 0;
        let mobile='';
        let name=''
        let birthday=''
        if(!check.checkName(this.namemsg)){
          console.log('真实姓名填写有误')
          return ;
        }
        if(this.demo1){
          sex=1
        }
        if(this.demo2){
          sex=2
        }
        if(this.demo3){
          sex=3
        }
        if(!sex){
          return ;
        }
        if (!check.checkCard(this.cardmsg)){
          console.log('身份证号有误')
          return
        }
        if (!check.checkPhone(this.phonemsg)){
          console.log('手机号输入不正确')
          return
        }
        let startdata={idcartCode:this.cardmsg,isChildren:1,mobile:this.phonemsg,name:this.namemsg,
          sex:sex,birthday:this.value1,visitCardId:this.iscardmsg}
        this.$api.getvisitsave(startdata).then((data)=>{
          console.log(data)
          this.$router.push({ path:'choosedptpatient' })
        })

      },
      chooseman(){
        this.isman=true
        this.ischild=false
      },
      choosechild(){
        this.isman=false
        this.ischild=true
      },
      nan(){
          this.demo1 =true
          this.demo2=false
          this.demo3=false
      },
      nv(){
        this.demo1 =false
        this.demo2=true
        this.demo3=false
      },
      baomi(){
        this.demo1 =false
        this.demo2=false
        this.demo3=true
      }
    },
    components: {
      CheckIcon,
      Datetime,

    },
  }
</script>

<style scoped lang="less" type="text/less">
    .tab{
      display: flex;
      height: 49px;
      .tab-man{
        line-height: 49px;
        text-align: center;
        flex: 1;
        /*background: red;*/
      }
      .tab-child{
        line-height: 49px;
        text-align: center;
        flex: 1;
        /*background: yellow;*/
      }
    }
    .man{
      margin-top: 10.5px;
      .name{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }

      }
      .sex{
        display: flex;
        margin-top: 13px;
        height: 36px;
        .one{
          flex: 1;
          /*height: 49px;*/
          /*line-height: 49;*/
          text-align: right;
        }
        .two{

          flex: 1;
          /*line-height: 49;*/
          text-align: center;
        }
        .three{
          flex: 1;
          /*line-height: 49;*/
          text-align: center;
          /*height: 49px;*/
        }
        .four{
          /*height: 49px;*/
          flex: 1;
          /*line-height: 49;*/
          text-align: center;
        }
      }
      .birthday{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .card{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .autocode{
        height: 49px;
        display: flex;
        .one{
          flex: 28;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 30;
        }
        .three{
          flex: 8;
          line-height: 49px;
          text-align: center;
        }
        a{
          flex: 37;
          line-height: 49px;
          text-align: center;
        }
      }
      .phone{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }

      .iscard{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .visitcard{
        margin-top: 15px;

      }
      .button{
        margin-top: 30px;
        text-align: center;
        span{
          color: white;
          padding:2% 42%;
          background-color: #13bf72;;
          border-radius: 5px;
          border: solid 1px #11ad67;
        }
      }
    }
    .child{
      margin-top: 10.5px;
      .name{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }

      }
      .sex{
        display: flex;
        margin-top: 13px;
        height: 36px;
        .one{
          flex: 1;
          /*height: 49px;*/
          /*line-height: 49;*/
          text-align: right;
        }
        .two{

          flex: 1;
          /*line-height: 49;*/
          text-align: center;
        }
        .three{
          flex: 1;
          /*line-height: 49;*/
          text-align: center;
          /*height: 49px;*/
        }
        .four{
          /*height: 49px;*/
          flex: 1;
          /*line-height: 49;*/
          text-align: center;
        }
      }
      .birthday{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .card{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .phone{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .autocode{
        height: 49px;
        display: flex;
        .one{
          flex: 28;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 30;
        }
        .three{
          flex: 8;
          line-height: 49px;
          text-align: center;
        }
        a{
          flex: 37;
          line-height: 49px;
          text-align: center;
        }
      }
      .jhcard{
        height: 49px;
        display: flex;
        .one{
          flex: 35;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 60;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .iscard{
        height: 49px;
        display: flex;
        .one{
          flex: 30;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 65;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .visitcard{
        margin-top: 15px;

      }
      .button{
        margin-top: 30px;
        text-align: center;
        span{
          color: white;
          padding:2% 42%;
          background-color: #13bf72;;
          border-radius: 5px;
          border: solid 1px #11ad67;
        }
      }
    }
    .selectleft{
      color: #13bf72;
      border-bottom: 1px solid #13bf72;

    }

</style>
