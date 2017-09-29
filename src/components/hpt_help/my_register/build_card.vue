
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
           <div class="one"></div>&nbsp;成人用户上传身份证照片<span>（正反面)</span>;
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
     <div class="button">
          <span>确定</span>
     </div>
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
@import "../../../common/iconfont/iconfont.css";
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
         border: solid 0.5px #cdcdcd;
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
    margin-top:30px;
    text-align: center;
    span{
      color: white;
      padding:5% 42%;
      background-color: #13bf72;;
      border-radius: 5px;
      border: solid 1px #11ad67;
    }
  }
</style>
