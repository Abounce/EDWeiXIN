<template>
  <div >
    <search
      placeholder="请输入科室或者医生名称"
      v-model="value"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div class="main">
      <div class="docutor">
        <div class="title">挂过号的医生</div>
        <scroller lock-y>
        <ul>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩我是</span><span class="category">(儿科用用)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
        </ul>
        </scroller>
      </div>
      <div class="department ">

        <scroller lock-x  height="-152" class="department_left">

          <ul>
            <li  v-for="(tab,index) in tabs"  @click="choose(tab.type,tab.dpt_data)">{{tab.dpt_name}}</li>
          </ul>

        </scroller>
        <div></div>
        <scroller lock-x  height="-152" class="department_right">

          <ul>
            <li v-for="(item,index) in currenttabconts">{{item}}</li>
          </ul>

        </scroller>
      </div>
    </div>
  </div>
</template>
<script>
  import { Search ,Scroller } from 'vux'
  export default {

    data () {
      return {
        currenttype:'',
        currenttabconts:[],
        value: '',
        tabs:[{
          dpt_name:"内科",
          type:0,
          dpt_data:["呼吸内科","消化内科","神经内科","心血管内科","内分泌科","免疫科"]
        },
          {
            dpt_name:"外科",
            type:1,
            dpt_data:["呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科","呼吸外科"]
          },
          {
            dpt_name:"儿科",
            type:2,
            dpt_data:["呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科",
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科"
              ,"呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科",
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科"]
          },
          {
            dpt_name:"五官科",
            type:3,
            dpt_data:["呼吸五官科","呼吸五官科","呼吸五官科科","呼吸五官科","呼吸五官科","呼吸五官科"]
          },
          {
            dpt_name:"中医科",
            type:4,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          }
        ]

      }
    },
    methods: {
      onSubmit () {
        console.log('on submit')
      },
      onFocus () {
        console.log('on onfocus')
      },
      onCancel () {
        console.log('on cancel')
      },
      choose(type,tabcontents){
        this.currenttype=type;
        this.currenttabconts=tabcontents;
        console.log('当前点击了'+this.currenttype)
        console.log('当前点击数组'+this.currenttabconts)
      }
    },
    components: {
      Search,
      Scroller
    },
    created(){
      this.choose(0,this.tabs[0].dpt_data)
    }

  }
</script>

<style scoped lang="less" type="text/less" >
@import "../../../common/css/variable.less";

  .main{
    position: absolute;
    right: 0;
    left: 0;
    top: 52px;

  }
  .docutor{
    height: 90px;
    background:@color-withe;
    /*overflow: hidden;*/
    .title{
      font-size:@font-size-five;
      padding : 14px;
    }
    ul{
      white-space:nowrap;//处理块元素中的空白符和换行
    }
    ul li{
      background-color:@color-background;
      text-align: center;
      line-height: 35px;
      display: inline-block;
    }

  }
  .department{
    border-top: 10px solid @color-background;
    display: flex;
    li{
      padding: 15px;
      text-align: center;
      font-size:@font-size-five;
    }
    .department_left{
      flex: 1 ;
      background-color:@color-background;
      li{
        border-bottom: 1px solid @color-withe;
      }
    }
    .department_right{
      flex: 1 ;
      li{
        border-bottom: 1px solid @color-fgx;
      }
    }

  }
</style>
