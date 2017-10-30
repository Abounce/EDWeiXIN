<template>
  <div>
    <div>
      <ul>
        <li v-for="(item,index) in visitList" @click="chooseItem(item)">
          <div class="wrapper">
            <div class="left-one">
              <span class="name">{{item.name}}</span>
              <span class="sex">{{item.sex===1? '男' : '女'}}</span>
            </div>
            <div class="left-two">
              <span >身份证号</span>
              <span class="card">{{item.idcartCode}}</span>
            </div>
            <div class="right-one" @click.stop="alertFrame(item)">
              <img src="../../../common/image/image@3x/editing-image-QR-code@3x.png" height="18" width="18">
              <!--<span class="icon iconfont icon-fanhui"></span>-->
            </div>
          </div>
          <my-line></my-line>
        </li>
      </ul>
    </div>
    <div class="button" @click="addVisit">
      <span>添加就诊人</span>
    </div>

    <div >
      <x-dialog class="alert-diolog" v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '90%', width: '90%', height: '80%', 'background-color': 'white'}">
        <!--<p style="color:#fff;text-align:center;" @click="showDialogStyle = false">-->
        <!--<span style="fonts-size:30px;">HELLO WORLD</span>-->
        <!--<span></span>-->
        <div>
          <br>
          <div class="name"><span>{{currentItem.name}}</span></div>
          <br>
          <br>
          <qrcode  :value='value1' type="img" ></qrcode>
          <br>
          <br>
          <barcode  :value="value2" :options="{ displayValue: false }" class="barcode"></barcode>
          <br>
          <br>
          <span>扫一扫上面的二维码快速就诊</span>
          <!--<x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>-->
        </div>
        <!--</p>-->
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import { Qrcode,XDialog, TransferDomDirective as TransferDom } from 'vux'
  import myLine from '../../../common/component/myLine.vue'

  export default {
    data(){
      return{
        visitList:[],
        showDialogStyle:false,
        value1: 'https://www.baidu.com',
        value2:'514564733',
        currentItem:{}
      }
    },
    methods:{
      //添加就诊人
      addVisit(){
        this.$router.push({name:'添加就诊人'})
      },
      //获取就诊人列表
      getVisitList(){
        this.$api.getVisitList().then((data)=>{
//           console.log(data)
          this.visitList=data;

        })
      },
      //弹出二维码
      alertFrame(item){
//        console.log('对话框启动')
        this.currentItem=item
        this.showDialogStyle=true
      },
      //编辑就诊人
      chooseItem(item){
        let params={visitCardId:item.visitCardId}
//        console.log(item.visitCardId)
        this.$api.getVisitSetDefault(params).then((data)=>{
          this.$vux.toast.text('换卡成功', 'middle')
        })
        this.$router.push({name:'管理就诊卡'})
      }
    },
    mounted(){
      this.$nextTick(()=> {
        this.getVisitList();
      })
    },
    watch:{
      '$route'(){
        this.getVisitList();
      }
    },
    components:{
      myLine,
      XDialog,
      Qrcode,
    }
  }
</script>

<style scoped lang="less" type="text/less">

  .wrapper{
    position: relative;
    height: 73.5px;
    .left-one{
      margin-left: 15.5px;
      margin-top: 15px;
      .name{
        font-size: 17px;
        color: #353535;
        font-weight: 500;
      }
      .sex{
        margin-left: 20px;
        font-size: 17px;
      }
    }
    .left-two{
      font-size: 17px;
      margin-left: 15.5px;
      margin-top: 14px;
      .card{
        margin-left: 8px;
      }
    }
    .right-one{
      position: absolute;
      top: 18px;
      right: 15px;
      img{
        vertical-align: top;
      }
      .icon{
        font-size: 17px;
        vertical-align: top;
      }
    }
  }
  .button{
    margin-top: 30.5px;
    text-align: center;
    span{
      color: white;
      padding:5% 35%;
      background-color: #13bf72;;
      border-radius: 5px;
      border: solid 1px #11ad67;
    }
  }
  .alert-diolog{

    .barcode{
      width: 210px;
      height: 89.5px;
      /*margin-left: 30px;*/

    }

  }

  .clearfix:after{
    content: ' ';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

</style>
