<template>
  <div>
    <div class="wrapper">
       <div class="left-one">真实姓名</div>
       <div class="right-one">{{visit.name}}</div>
    </div>
    <my-line></my-line>
    <div class="wrapper">
      <div  class="left-one">性别</div>
      <div class="right-one">{{visit.sex===1? '男':'女'}}</div>
    </div>
    <my-line></my-line>
    <div class="wrapper">
      <div  class="left-one">年龄</div>
      <div class="right-one"></div>
    </div>
    <my-line></my-line>
    <div class="wrapper">
      <div  class="left-one">监护人身份证</div>
      <div class="right-one">{{visit.idcartCode}}</div>
    </div>
    <my-line></my-line>
    <div class="wrapper">
      <div  class="left-one">监护人手机</div>
      <div class="right-one">{{visit.mobile}}<span class="edit" @click="edit">修改</span></div>
    </div>
    <my-line></my-line>

    <ul>
      <li v-for="(item,index) in visit.visitCardIds">
        <div class="wrapper">
          <div  class="left-one">就诊卡{{index+1}}</div>
          <div class="right-one">{{item}}</div>
        </div>
        <my-line></my-line>
      </li>
    </ul>
    <div class="wrapper">
      <div  class="left-one">二维码</div>
      <div class="right-one">
        <img class="img-qr" src="../../../common/image/image@3x/editing-image-QR-code@3x.png" height="18" width="18">
        <span class="icon iconfont icon-fanhui"></span>
      </div>
    </div>
    <my-line></my-line>
    <div class="wrapper">
      <div  class="left-one">条形码</div>
      <div class="right-one">
        <img class="img-br" src="../../../common/image/image@3x/editing-image-bar-code@3x.png" height="14" width="27">
        <span class="icon iconfont icon-fanhui"></span>
      </div>
    </div>
      <div class="button" @click="unBound">
        <span>解除绑定</span>
      </div>
  </div>
</template>

<script>
  import myLine from '../../../common/component/myLine.vue'
  export default {
    data(){
      return{
        visit:{}
      }
    },
    methods:{
      //获取单个就诊人
      getVisit(visitId){
//        console.log(visitId)
        let params={visitId:visitId}
        this.$api.getVisitList(params).then((data)=>{
          this.visit=data[0]
//          console.log(data[0])
        })
      },
      //更换绑定手机号
      edit(){
        this.$loacalstore.set('visitId',this.visit.id)
        this.$router.push({name:'更换绑定手机'})
      },
      //解除绑定
      unBound(){
        let params={visitCardId:this.visit.id}
        this.$api.getVistRemoveBind(params).then((data=>{
          this.$vux.toast.text('解除绑定成功','middle')
        }))
      }
    },
    mounted(){
      this.$nextTick( ()=>{
        let visitId = this.$loacalstore.get('visitId');
        this.getVisit(visitId)

      })
    },
    components:{
      myLine
    },
    watch:{
      '$route'(){
        this.getVisit(this.visit.visitId)
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
  .wrapper{
    height: 49px;
    position: relative;
    .left-one{
       margin-left: 14.5px;
       margin-top: 17.5px;
    }
    .right-one{
       position: absolute;
       top: 0;
       right: 15px;
      .img-qr{
        vertical-align: top;
      }
      .icon{
        font-size: 17px;
        vertical-align: top;
      }
      .edit{
        color: #1793e6;
      }
    }
  }
  .button{
    margin-top: 30px;
    text-align: center;
    span{
      padding: 6% 37%;
      border-radius: 5px;
      background-color: #e64845;
      border: solid 1px #d64949;
      color: white;
    }
  }
</style>
