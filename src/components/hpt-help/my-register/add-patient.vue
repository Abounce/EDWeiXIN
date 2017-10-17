<template>
 <div >
     <div class="tab">
       <div class="tab-man" @click="chooseman" :class="{selectleft:isman}">成人</div>
       <div class="tab-child" @click="choosechild" :class="{selectleft:ischild}">儿童/新生儿</div>
     </div>
     <div v-if="isman" class="man">
       <div class="name">
         <label for="nameinput" class="one" >真实姓名:</label>
         <input type="text" id="nameinput" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" >
         <div class="three">

         <div class="weui-icon-clear three" @click="clearNamemsg" v-show="namemsg" ></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="sex">
         <span class="one">性别:</span>
         <check-icon :value.sync="demo1" class="two"   @click.native="nan">男</check-icon>
         <check-icon :value.sync="demo2" class="three" @click.native="nv">女</check-icon>
         <check-icon :value.sync="demo3" class="four"  @click.native="baomi">保密</check-icon>
       </div>
       <my-line></my-line>
       <div class="birthday">
       <datetime v-model="value1"  :title="('出生日期:')" placeholder="请选择"></datetime>
       </div>
       <my-line></my-line>
       <div class="card">
         <label for="cardinput" class="one"  >身份证号:</label>
         <input type="text" id="cardinput" v-model="cardmsg" class="two"  placeholder="请填写就诊人身份证号">
         <div class="three">

         <div class="weui-icon-clear three " @click="clearCardmsg" v-show="cardmsg"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="iscard">
         <label for="iscardinput" class="one">就诊卡号:</label>
         <input type="text" id="iscardinput" v-model="iscardmsg" class="two"  placeholder="请填写就诊卡号" >
         <div class="three">

         <div class="weui-icon-clear three clear-iscardmsg" @click="clearIscardmsg" v-show="iscardmsg" ></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="phone">
         <label for="phoneinput" class="one">手机号码:</label>
         <input type="text" id="phoneinput" v-model="phonemsg" class="two"  placeholder="请填写建卡预留手机号">
         <div class="three">

         <div class="weui-icon-clear three" @click="clearPhonemsg" v-show="phonemsg"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="autocode">
         <label for="autoinput" class="one">验证码:</label>
         <input type="text" id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="three">

         <div class="weui-icon-clear three" @click="clearAutomsg" v-show="automsg"></div>
         </div>
         <span >获取验证</span>
       </div>
       <my-line></my-line>
       <div class="visitcard" style="text-align: right">

           <span class="one">没有就诊卡?</span> <span class="two" @click="buildCard">在线建卡</span>
       </div>
       <!--<my-line></my-line>-->
       <div class="button" @click="commitMan">
         <span>添加</span>
       </div>
     </div>
     <div v-if="ischild" class="child">
       <div class="name">
         <label for="nameinputa" class="one" >真实姓名:</label>
         <input type="text" id="nameinputa" v-model="namemsga" class="two" placeholder="请填写就诊人姓名" >
         <div class="three">
         <div class="weui-icon-clear three" @click="clearNamemsga" v-show="namemsga"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="sex">
         <span class="one">性别:</span>
         <check-icon :value.sync="demo4" class="two"   @click.native="nan">男</check-icon>
         <check-icon :value.sync="demo5" class="three" @click.native="nv">女</check-icon>
         <check-icon :value.sync="demo6" class="four"  @click.native="baomi">保密</check-icon>
       </div>
       <my-line></my-line>
       <div class="birthday">
         <datetime v-model="value2"  :title="('出生日期:')" placeholder="请选择"></datetime>
       </div>
       <my-line></my-line>
       <div class="card">
         <label for="cardinputa" class="one"  >患者身份证:</label>
         <input type="text" id="cardinputa" v-model="cardmsga" class="two"  placeholder="请填写就诊人身份证号">
         <div class="three">

         <div class="weui-icon-clear three"  @click="clearCardmsga" v-show="cardmsga"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="jhcard">
         <label for="jhcardinput" class="one">监护人身份证:</label>
         <input type="text" id="jhcardinput" v-model="jianhumsga" class="two"  placeholder="请填写监护人身份证">
         <div class="three">

         <div class="weui-icon-clear three" @click="clearJianhumsga" v-show="jianhumsga" ></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="iscard">
         <label for="iscardinputa" class="one">就诊卡号:</label>
         <input type="text" id="iscardinputa" v-model="iscardmsga" class="two"  placeholder="请填写就诊卡号" >
         <div class="three">

         <div class="weui-icon-clear three" @click="clearIscardmsga" v-show="iscardmsga"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="phone">
         <label for="phoneinputa" class="one">监护人手机:</label>
         <input type="text" id="phoneinputa" v-model="phonemsga" class="two"  placeholder="请填写建卡预留手机号">
         <div class="three">

         <div class="weui-icon-clear three" @click="clearPhonemsga" v-show="phonemsga"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="autocode">
         <label for="autoinputa" class="one">验证码:</label>
         <input type="text" id="autoinputa" v-model="automsga" class="two"  placeholder="请填写验证码">
         <div class="three">

         <div class="weui-icon-clear three" @click="clearAutomsga" v-show="automsga"></div>
         </div>
         <span >获取验证</span>
       </div>
       <my-line></my-line>
       <div class="bg">
       <div class="visitcard" style="text-align: right">

         <span>没有就诊卡?</span> <span style="color: #1793e6;" @click="buildCard">在线建卡</span>
       </div>
       <div class="button" @click="commitChild">
         <span>添加</span>
       </div>
       </div>
     </div>
   <div v-transfer-dom>
     <popup v-model="show10" position="top" :show-mask="false">
       <div class="position-vertical-demo">
         {{showMsg}}
       </div>
     </popup>
   </div>
 </div>
</template>

<script>
  import { CheckIcon,Datetime } from 'vux'
  import { TransferDom, Popup} from 'vux'
  import * as check from '../../../api/check.js'
  import myLine from '../../../common/component/myLine.vue'
  export default {
    directives: {
      TransferDom
    },
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

        value2:'',
        demo4: false,
        demo5:false,
        demo6:false,
        namemsga:'',
        birthdaymsga:'',
        cardmsga:'',
        phonemsga:'',
        automsga:'',
        iscardmsga:'',
        jianhumsga:'',

        show10:false,
        showMsg:''


    }
    },
    methods:{
      //在线建卡
      buildCard(){
        this.$router.push({name:'在线建卡'})

      },
      //成人建卡
      commitMan(){
        let sex = 0;
        let mobile='';
        let name='';
        let birthday='';
      if(!check.checkName(this.namemsg)){
//         console.log('真实姓名填写有误');
         this.show10 = true;
         this.showMsg='真实姓名填写有误';
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
      if (!check.checkCard(this.cardmsg)){
//        console.log('身份证号有误')
        this.show10 = true;
        this.showMsg='身份证号填写有误';
        return
      }
      if(!this.iscardmsg){
        this.show10 = true;
        this.showMsg='就诊卡号填写有误';
        return
      }
      if (!check.checkPhone(this.phonemsg)){
//        console.log('手机号有误');
        this.show10 = true;
        this.showMsg='手机号填写有误';
        return
      }
      let startdata={idcartCode:this.cardmsg,isChildren:2,mobile:this.phonemsg,name:this.namemsg,
        sex:sex,birthday:this.value1,visitCardId:this.iscardmsg}
      this.$api.getVisitSave(startdata).then((data)=>{
//            console.log(data)
        this.$vux.toast.text('添加成功', 'middle')
        this.$router.push({ name:'选择就诊人' })
      }).catch((err)=>{
        this.$vux.toast.text(err.data.errorMsg, 'middle')
      })
      },

      //儿童建卡
      commitChild(){
        let sex = 0;
        let mobile='';
        let name=''
        let birthday=''
        if(!check.checkName(this.namemsga)){
//          console.log('真实姓名填写有误')
          this.show10 = true;
          this.showMsg='真实姓名填写有误';
          return ;
        }
        if(this.demo4){
          sex=1
        }
        if(this.demo5){
          sex=2
        }
        if(this.demo6){
          sex=3
        }
        if (this.cardmsga){
//          console.log('患者身份证号有误')
         if(!check.checkCard(this.cardmsga)) {
          this.show10 = true;
          this.showMsg='患者身份证号有误,如果没有可以不填';
          return
         }
        }else {

        }
        if(!check.checkCard(this.jianhumsga)){
//          console.log('监护人身份证号有误')
          this.show10 = true;
          this.showMsg='监护人身份证号填写有误';
          return
        }
        if(!this.iscardmsga){
          this.show10 = true;
          this.showMsg='就诊卡号填写有误';
          return
        }
        if (!check.checkPhone(this.phonemsga)){
//          console.log('手机号输入不正确')
          this.show10 = true;
          this.showMsg='监护人手机号填写有误';
          return
        }
        let params={idcartCode:this.cardmsga,isChildren:1,mobile:this.phonemsga,name:this.namemsga,
          sex:sex,birthday:this.value2,visitCardId:this.iscardmsga,guardianIdcardCode:this.jianhumsga}
        this.$api.getVisitSave(params).then((data)=>{
//          console.log(data)
          this.$vux.toast.text('添加成功', 'middle')
          this.$router.push({ name:'选择就诊人' })
        }).catch((err)=>{
          console.log(err)
//          debugger
          this.$vux.toast.text(err.data.errorMsg, 'middle')
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
      },
      clearNamemsg(){
        this.namemsg=''
      },
      clearCardmsg(){
         this.cardmsg=''
      },
      clearIscardmsg(){
         this.iscardmsg=''
      },
      clearPhonemsg(){
         this.phonemsg=''
      },
      clearAutomsg(){
         this.automsg=''
      },

      clearNamemsga(){
        this.namemsga=''
      },
      clearCardmsga(){
        this.cardmsga=''
      },
      clearIscardmsga(){
        this.iscardmsga=''
      },
      clearPhonemsga(){
        this.phonemsga=''
      },
      clearAutomsga(){
        this.automsga=''
      },
      clearJianhumsga(){
        this.jianhumsga=''
      }

    },
    components: {
      CheckIcon,
      Datetime,
      Popup,
      myLine
    },
    watch: {
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false
          }, 1000)
        }
      },
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .tab{
      border-bottom:10px solid  #cdcdcd;
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
          flex: 25;
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

      }
      .card{
        height: 49px;
        display: flex;
        .one{
          flex: 25;
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
          flex: 25;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 40;
          width: 40%;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
        span{
          font-size: 14px;

          color: #1793e6;
          flex: 25;
          line-height: 49px;
          text-align: center;
        }
      }
      .phone{
        height: 49px;
        display: flex;
        .one{
          flex: 25;
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
          flex: 25;
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
        font-size: 14px;
       .one{
         color: #888888;
       }
        .two{
          color: #1793e6;
        }
      }
      .button{
        margin-top: 40px;
        text-align: center;
        span{
          color: white;
          padding:5% 42%;
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
          flex: 35;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 55;
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

      }
      .card{
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
          flex: 55;
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
          flex: 35;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 55;
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
          flex: 35;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 30;
          width: 30%;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
        span{
          font-size: 14px;
          color: #1793e6;
          flex: 25;
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
          flex: 55;
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
          flex: 35;
          text-align: right;
          line-height: 49px;
        }
        .two{
          border: none;
          outline: medium;
          line-height: 49px;
          flex: 55;
        }
        .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
        }
      }
      .visitcard{
        margin-top: 15px;
        font-size: 14px;
        .one{
          color: #888888;
        }
        .two{
          color: #1793e6;
        }
      }
      .button{
        margin-top: 40px;
        text-align: center;
        span{
          color: white;
          padding:5% 42%;
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
    .position-vertical-demo {
      background-color:red;
      color: #000;
      text-align: center;
      padding: 15px;
    }

</style>
