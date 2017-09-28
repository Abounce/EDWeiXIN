<template>
   <div>
     <div class="user">
       <div class="name">
         <label for="nameinput" class="one" >真实姓名:</label>
         <input  id="nameinput" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="card">
         <label for="cardinput" class="one"  >身份证号:</label>
         <input  id="cardinput" v-model="cardmsg" class="two"  placeholder="请填写就诊人身份证号">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="phone">
         <label for="phoneinput" class="one">手机号码:</label>
         <input  id="phoneinput" v-model="phonemsg" class="two"  placeholder="请填写建卡预留手机号">
         <div class="weui-icon-clear three" ></div>
         <div  class="four">获取验证</div>
       </div>
       <div class="auto-code">
         <label for="autoinput" class="one">验证码:</label>
         <input  id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="man-child">
         <div class="man">
         <input type="radio" id="one" value="1" v-model="picked">
         <label for="one">成人</label>
         </div>
         <div class="child">
         <input type="radio" id="two" value="2" v-model="picked">
         <label for="two">新生儿</label>
         </div>
       </div>
     </div>
     <div class="credentials">
       <div></div>
       <div></div>
     </div>
     <div class="msg"></div>
     <div class="button"></div>
   </div>
</template>

<script>
  import { CheckIcon } from 'vux'
  export default {
     data(){
       return{
         namemsg:'',
         cardmsg:'',
         phonemsg:'',
         automsg:'',
         picked:''
       }
     },

  }
</script>

<style scoped lang="less" type="text/less">
   .user{
     margin-top: 10px;
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
         line-height: 49px;
         flex: 1;
         text-align: center;
       }
       .child{
         line-height: 49px;
         flex: 1;
         text-align: center;
       }
     }
   }
</style>
