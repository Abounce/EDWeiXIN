<template>
<div>
  <div class="country">
    <label for="countryinput" class="one">国家和地区:</label>
    <input type="text" id="countryinput" v-model="countrymsg" class="two"  >
    <span class="three">中国大陆+86<span class="icon iconfont icon-fanhui "></span></span>
  </div>
  <my-line></my-line>
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
  <div class="button" @click="edit">
    <span>确认修改</span>
  </div>
</div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  import { CheckIcon } from 'vux'
  import * as check from '../../../api/check.js'
  export default {
    data(){
      return{
        phonemsg:'',
        automsg:'',
        countrymsg:'',
        visitId:''
      }
    },
    methods:{
      edit(){
        if (!check.checkPhone(this.phonemsg)){
          console.log('手机号输入不正确')
          return
        }
        let params={mobile:this.phonemsg,id:this.visitId}
      this.$api.getVisitUpdata(params).then((data)=>{
        this.$vux.toast.text('修改手机号成功','middle')

      })
      },
      clearPhonemsg(){
        this.phonemsg=''
      },
      clearAutomsg(){
        this.automsg=''
      }

    },
    mounted(){
      this.$nextTick(()=>{
        this.visitId = this.$loacalstore.get('visitId');
      })
    },
    components:{
      myLine
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .country{
    height: 49px;
    display: flex;
    .one{
      flex: 30;
      text-align: right;
      line-height: 49px;
      font-size: 16px;
      font-weight: bold;
      color: #353535;
    }
    .two{
      border: none;
      outline: medium;
      line-height: 49px;
      width: 35%;
      flex: 35;
    }
    .three{
      flex: 35;
      line-height: 49px;
      text-align: center;
      color: #888888;
    }
  }
  .card{
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
    margin-top: 60px;
    text-align: center;
    span{
      font-weight: bold;
      padding: 6% 37%;
      border-radius: 5px;
      background-color: #13bf72;
      border: solid 1px #11ad67;
      color: white;
    }
  }
</style>
