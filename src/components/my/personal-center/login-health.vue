<template>
    <div class="wrapper">
      <div class="phone">
         <span class="one">+86</span> <input type="text" class="input two" placeholder="输入手机号">
      </div>
      <div class="password">
         <span class="icon iconfont icon-mima one"></span> <input type="text" class="input two" placeholder="输入密码">
      </div>
      <div class="check">
        <input type="checkbox" id="jack" style="color:#13bf72;">
        <label for="jack" class="label">《用户服务协议》</label>
         <span class="yanzhen" @click="loginCode">验证码登录</span>
      </div>
      <div class="button" @click="loginED">
         登录爱迪健康
      </div>
    </div>
</template>

<script>
  export default {
      methods:{

        loginCode(){
           this.$router.push({name:'验证码登录'})
        },
        loginED(){
          this.$router.push({name:'健康档案'})
        }

      }
  }
</script>

<style scoped lang="less" type="text/less">
     .wrapper{
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       background: #eeeeee;
       .phone{
         background: #ffffff;
         margin-left: 15px;
         margin-right: 15px;
         margin-top: 30px;
         line-height: 50px;
         display: flex;
         .one{
           border-right: 1px solid #cdcdcd;
           flex: 1;
           text-align: center;
         }
         .two{
           flex: 6;
         }
       }
       .password{
         background: #ffffff;
         margin-left: 15px;
         margin-right: 15px;
         margin-top: 17px;
         line-height: 50px;
         display: flex;
         .one{
           border-right: 1px solid #cdcdcd;
           flex: 1;
           color: #cdcdcd;
           text-align: center;

         }
         .two{
           flex: 6;

         }


       }
       .check{
         /*background: #ffffff;*/
         margin-left: 15px;
         margin-right: 15px;
         margin-top: 17px;
         position: relative;
         .yanzhen{
          position: absolute;
           top: 0;
           right: 15px;
           font-size: 15px;
           font-weight: bold;
           color: #353535;
           text-align: center;
         }
         .label{
           font-size: 15px;
           font-weight: bold;
           line-height: 1.38;
           color: #13bf72;
           text-align: center;
         }
       }
       .button{
         text-align: center;
         line-height: 45px;
         font-weight: bold;
         border-radius: 5px;
         color: #ffffff;
         border: solid 1px #11ad67;
         margin-right: 15px;
         margin-left: 15px;
         margin-top: 30px;
         background: #13bf72;
       }

     }
     .input{
           border: none;
          outline: medium;
     }
</style>

