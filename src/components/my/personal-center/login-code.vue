<template>
  <div class="wrapper">
    <div class="card">
      <label for="cardinput" class="one" >新手机号码:</label>
      <input type="text" id="cardinput" v-model="phonemsg" class="two"  placeholder="请填输入新手机号码">
      <div class="three">
        <div class="weui-icon-clear three" @click="clearPhonemsg" v-show="phonemsg"></div>
      </div>
    </div>
    <div class="autocode">
      <label for="autoinput" class="one">验证码:</label>
      <input type="text" id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
      <div class="three">
        <div class="weui-icon-clear three" @click="clearAutomsg" v-show="automsg"></div>
      </div>
      <span >获取验证</span>
    </div>
    <div class="button" @click="loginED">
      <span>登录爱迪健康</span>
    </div>
  </div>
</template>

<script>
 export default {
   data(){
     return{
       phonemsg:'',
       automsg:'',
     }
   },
   methods:{
     clearPhonemsg(){
       this.phonemsg=''
     },
     clearAutomsg(){
       this.automsg=''
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
  }
  .card{
    margin-top: 30px;
    margin-left: 1px;
    margin-right: 1px;
    background: #ffffff;
    border-bottom: 0.5px solid #eeeeee;
    height: 49px;
    display: flex;
    .one{
      font-size: 16px;
      font-weight: bold;
      color: #353535;
      flex: 30;
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
  .autocode{
    margin-top: 17px;
    margin-left: 1px;
    margin-right: 1px;
    background: #ffffff;
    border-bottom: 0.5px solid #eeeeee;
    height: 49px;
    display: flex;
    .one{
      font-size: 16px;
      font-weight: bold;
      color: #353535;
      flex: 30;
      text-align: right;
      line-height: 49px;
    }
    .two{
      border: none;
      outline: medium;
      line-height: 49px;
      flex: 35;
      width: 35%;
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
</style>
