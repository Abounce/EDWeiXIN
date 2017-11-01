
<template>
   <div style="background: white">
     <div class="user">
       <div class="name">
         <label for="nameinput" class="one coom" >真实姓名:</label>
         <input  id="nameinput" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" >
         <div class="three">
         <div class="weui-icon-clear " v-show="namemsg" @click="cleanNamemsg"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="card">
         <label for="cardinput" class="one coom"  >身份证号:</label>
         <input  id="cardinput" v-model="cardmsg" class="two"  placeholder="请填写就诊人身份证号">
         <div class="three">
         <div class="weui-icon-clear "  v-show="cardmsg" @click="cleanCardmsg"></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="phone">
         <label for="phoneinput" class="one coom">手机号码:</label>
         <input  id="phoneinput" v-model="phonemsg" class="two"  placeholder="请填写建卡预留手机号">
         <div class="three">
         <div class="weui-icon-clear " v-show="phonemsg" @click="cleanPhonemsg" ></div>
         </div>
         <div  class="four" style="color: #1793e6;">获取验证</div>
       </div>
       <my-line></my-line>
       <div class="auto-code">
         <label for="autoinput" class="one coom">验证码:</label>
         <input  id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="three">

         <div class="weui-icon-clear " v-show="automsg" @click="cleanAutomsg" ></div>
         </div>
       </div>
       <my-line></my-line>
       <div class="man-child">
         <div class="man">
         <input type="radio" id="one" value=1 v-model="picked">
         <label for="one">成人</label>
         </div>
         <div class="child">
         <input type="radio" id="two" value=2 v-model="picked">
         <label for="two">新生儿</label>
         </div>
       </div>
     </div>
     <div class="credentials">
       <div class="zm">
         <div class="zm-inner">
         <div class="icon iconfont icon-zengjia "></div>
         </div>
         <div class="font">上传身份证正面</div>
       </div>
       <div class="fm">
         <div class="fm-inner">
         <div class="icon iconfont icon-zengjia "></div>
         </div>
         <div class="font">上传身份证反面</div>
       </div>
     </div>
     <div class="msg">
         <div class="warpper">
           <div style="vertical-align: top" class="one"></div>&nbsp;+成人用户上传身份证照片<span>（正反面)</span>;
         </div>
       <div class="warpper">
         <div class="one"></div>&nbsp;<span>儿童</span>如果没有身份证的需上传<span>户口证户主页面和本人当页</span>；新生儿上传<span>母亲户口当页和本人出生证明</span>,身份证号码栏填写<span>母亲的身份证号</span>
       </div>
       <div class="warpper">
         <div class="one"></div>&nbsp;请上传真实有效、清晰的证件照片，并填写真实的资料信息，以免造成诊疗信息的错误；
       </div>
       <div class="warpper">
         <div class="one"></div>&nbsp;资料提交后需要医院人工审核，<span>未审核或审核未通过不能进行挂号</span>，请耐心等待。
       </div>

     </div>
     <div class="button" @click="buildCard">确定

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
  import { CheckIcon } from 'vux'
  import { TransferDom, Popup} from 'vux'
  import * as check from '../../../api/check.js'
  import myLine from '../../../common/component/myLine.vue'
  export default {
    components: {
      Popup,
      myLine
    },
    directives: {
      TransferDom
    },
     data(){
       return{
         namemsg:'',
         cardmsg:'',
         phonemsg:'',
         automsg:'',
         picked:-1,
         show10:false,
         showMsg:''
       }
     },
    methods:{
      cleanNamemsg(){
        this.namemsg=''
      },
      cleanCardmsg(){
        this.cardmsg=''
      },
      cleanPhonemsg(){
        this.phonemsg=''
      },
      cleanAutomsg(){
        this.automsg=''
      },
      buildCard(){
//         let picked=-1;
        if(!check.checkName(this.namemsg)){
//          console.log('真实姓名填写有误')
          this.show10 = true;
          this.showMsg='真实姓名填写有误';
          return ;
        }

        if (!check.checkCard(this.cardmsg)){
//          console.log('身份证号有误')
          this.show10 = true;
          this.showMsg='身份证号有误';
          return
        }
        if (!check.checkPhone(this.phonemsg)){
//          console.log('手机号输入不正确')
          this.show10 = true;
          this.showMsg='手机号填写有误';
          return
        }
//        picked= this.picked;
        if (this.picked<0){
          this.show10 = true;
          this.showMsg='请选择成人还是儿童';
          return
        }
        let params={idCard:this.cardmsg,name:this.namemsg,mobile:this.phonemsg,isChildren:this.picked
           ,idCardAUrl:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'
           ,idCardBUrl:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}
         this.$api.getCardRegister(params).then((data)=>{
//                 console.log(data)
           this.$vux.toast.text('建卡成功', 'middle')
        }).catch((err)=>{
           this.$vux.toast.text(err.data.errorMsg,'middle')
         })

      }
    },
    watch: {
      show10 (val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false
          }, 1000)
        }
      }
    }


  }
</script>

<style scoped lang="less" type="text/less">
@import "../../../common/iconfont/iconfont.css";
   .user{
     /*margin-top: 10px;*/
     .name{
       display: flex;
       height: 49px;
       .one{
         text-align: right;
         flex: 25;
         line-height: 49px;
       }
       .two{
         border: none;
         outline: medium;
          flex: 65;
       }
       .three{
          flex: 10;
          line-height: 49px;
          text-align: center;
       }
     }
     .card{
       display: flex;
       height: 49px;
       .one{
         flex: 25;
         text-align: right;
         line-height: 49px;
       }
       .two{
         border: none;
         outline: medium;
         flex: 65;
       }
       .three{
         flex: 10;
         line-height: 49px;
         text-align: center;
       }


     }
     .phone{
       display: flex;
       height: 49px;
       .one{
         flex: 25;
         text-align: right;
         line-height: 49px;
       }
       .two{
         width: 45%;
         border: none;
         outline: medium;
         flex: 45;
       }
       .three{
         flex: 5;
         line-height: 49px;
         text-align: center;
       }
       .four{
         flex: 25;
         text-align: center;
         line-height: 49px;

       }
     }
     .auto-code{
       height: 49px;
       display: flex;
       .one{
         text-align: right;
         flex: 25;
         line-height: 49px;
       }
       .two{
         border: none;
         outline: medium;
         flex: 65;
       }
       .three{
         flex: 10;
         line-height: 49px;
         text-align: center;
       }
     }
     .man-child{
       height: 49px;
       display: flex;
       .man{
         font-size: 16px;
         font-weight: bold;
         line-height: 49px;
         flex: 1;
         text-align: center;
       }
       .child{
         font-size: 16px;
         font-weight: bold;
         line-height: 49px;
         flex: 1;
         text-align: center;
       }
     }
   }
   .credentials{
     .font{
       font-size: 14px;
      margin-top: 12px;
       color: #888888;
     }
     display: flex;
     .icon{
       font-size: 73px;
       color: #cdcdcd;
     }
     .zm{

       text-align: center;
       flex: 1;
       .zm-inner{
         padding-top: 27px;
         margin: 0 auto;
         text-align: center;
         width: 145.5px;
         height: 115px;
         border-radius: 5px;
         border: solid 0.5px #cdcdcd;
       }
       .font{
         font-size: 14px;
         font-weight: bold;
         color: #888888;
       }
     }
     .fm{
       text-align: center;
       flex: 1;
       .fm-inner{
         padding-top: 27px;
         margin: 0 auto;
         text-align: center;
         width: 145.5px;
         height: 115px;
         border-radius: 5px;
         border: solid 0.5px #eeeeee;
       }
       .font{
         font-size: 14px;
         font-weight: bold;
         color: #888888;
       }

     }

   }
   .msg{
    .warpper{
      margin-left: 15px;
      margin-top: 20px;
      font-size: 15px;
      .one{
        display: inline-block;
        width: 9px;
        height: 9px;
        background-color: #cdcdcd;
        border-radius: 50%;
      }
      span{
        color: red;
      }
    }
  }

  .button{
    margin: 10px auto 0 auto;
    width: 345px;
    height: 44px;
    border-radius: 5px;
    background-color: #13bf72;
    color: white;
    text-align: center;
    line-height: 44px;
    border: solid 1px #11ad67;
    font-weight: bold;
    span{

      color: white;
      padding:5% 42%;
      background-color: #13bf72;;
      border-radius: 5px;
      border: solid 1px #11ad67;
    }
  }
.position-vertical-demo {
  background-color:red;
  color: #000;
  text-align: center;
  padding: 15px;
}
.coom{
  font-size: 16px;
  color: #353535;
  font-weight: bold;
}
</style>
