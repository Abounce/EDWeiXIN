<template>
 <div>
     <div class="tab">
       <div class="tab-man" @click="chooseman" :class="{selectleft:isman}">成人</div>
       <div class="tab-child" @click="choosechild" :class="{selectleft:ischild}">儿童/新生儿</div>
     </div>
     <div v-show="isman" class="man">
       <div class="name">
         <label for="nameinput" class="one" >真实姓名:</label>
         <input type="text" id="nameinput" v-model="namemsg" class="two" placeholder="请填写就诊人姓名" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="sex">
         <span class="one">性别:</span>
         <check-icon :value.sync="demo1" class="two"   @click.native="nan">男</check-icon>
         <check-icon :value.sync="demo2" class="three" @click.native="nv">女</check-icon>
         <check-icon :value.sync="demo3" class="four"  @click.native="baomi">保密</check-icon>
       </div>
       <div class="birthday">
         <label for="birthdayinput" class="one">出身日期:</label>
         <input type="text" id="birthdayinput" v-model="birthdaymsg" class="two"  >
         <div class="weui-icon-clear three" ></div>
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
       <div class="autocode">
         <label for="autoinput" class="one">验证码:</label>
         <input type="text" id="autoinput" v-model="automsg" class="two"  placeholder="请填写验证码">
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="visitcard" style="text-align: right">

           <span>没有就诊卡?</span> <a href="javascript:">在线建卡</a>
       </div>
       <div class="iscard">
         <label for="iscardinput" class="one">就诊卡号:</label>
         <input type="text" id="iscardinput" v-model="iscardmsg" class="two"  placeholder="请填写就诊卡号" >
         <div class="weui-icon-clear three" ></div>
       </div>
       <div class="button">
         <span>添加</span>
       </div>
     </div>
     <div v-show="ischild" class="child"></div>
       <!--<check-icon :value.sync="demo1">Do you agree? ({{ demo1 }})</check-icon>-->
 </div>
</template>

<script>
  import { CheckIcon } from 'vux'
  export default {
    data(){
      return{
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
      CheckIcon
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
        background: red;
      }
      .tab-child{
        line-height: 49px;
        text-align: center;
        flex: 1;
        background: yellow;
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
    }
    .child{
      margin-top: 10.5px;
    }
    .selectleft{
      color: #13bf72;
      /*border-bottom: 1px solid #13bf72;*/

    }

</style>
