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
        <betterscroll class="titlecenter" :data="toptitles" :scrollX="true">
          <div class="tiltleinner"  :style="{  width:tatalheightz+'px' }">
            <ul  class="ulwidth">
             <li  v-for="(tab,index) in toptitles"><span class="name">{{tab.name}}</span><span class="category">({{tab.category}})</span></li>
            </ul>
          </div>
        </betterscroll>
      </div>
      <div class="department ">
        <betterscroll class="department_left" :data="tabs">

          <ul >
            <li  v-for="(tab,index) in tabs"  @click="choose(tab.type,tab.dpt_data)" :class="{selectleft:currenttype===index}">{{tab.dpt_name}}</li>
          </ul>

        </betterscroll>

        <betterscroll class="department_right" :data="currenttabconts" ref="right">
          <ul>
            <li v-for="(item,index) in currenttabconts">{{item}}</li>
          </ul>
        </betterscroll>
      </div>
    </div>
  </div>
</template>
<script>
  import betterscroll from "../../common/betterscroll.vue"
  import {Search} from 'vux'
  import {getscreenWith,getscreenheight} from "../../../api/screenutils.js"
  export default {
    data () {
      return {
        tatalheightz:0,
        istrue:true,
        toptitles:[{
          name:'王凯',
          category:"儿科"
        },
          {
            name:'王凯',
            category:"儿科"
          },{
            name:'王凯',
            category:"儿科"
          },{
            name:'王凯',
            category:"儿科"
          }
          ,{
            name:'王凯',
            category:"儿科"
          },{
            name:'王凯',
            category:"儿科"
          },{
            name:'王凯',
            category:"儿科"
          }],
        currenttype:'',
        currenttabconts:[],
        value: '',
        tabs:[{
          dpt_name:"内科",
          type:0,
          dpt_data:["呼吸内科","消化内科","神经内科","心血管内科","内分泌科","免疫科","消化内科","神经内科","" +
          "心血管内科","内分泌科","免疫科","消化内科","神经内科","心血管内科","内分泌科","免疫科","消化内科","神经内科"
            ,"心血管内科","内分泌科","免疫科","消化内科","神经内科","心血管内科","内分泌科","免疫科"]
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
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科"
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
          },  {
            dpt_name:"中医科",
            type:5,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          },
          {
            dpt_name:"中医科",
            type:6,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          },  {
            dpt_name:"中医科",
            type:7,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          }
          ,  {
            dpt_name:"中医科",
            type:8,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          },
          {
            dpt_name:"中医科",
            type:9,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          },
          {
            dpt_name:"中医科",
            type:10,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科"]
          },
          {
            dpt_name:"中医科",
            type:11,
            dpt_data:["呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸儿科","呼吸中医科","呼吸中医科","呼吸中医科","呼吸中医科"]
          },
          {
            dpt_name:"儿科",
            type:12,
            dpt_data:["呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科",
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科"
              ,"呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科",
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科"
              ,"呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科",
              "呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","呼吸儿科","末尾"]
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
        this.$nextTick(function () {
          this.$refs.right.refresh();
        })
      }
    },
    components: {
      Search,
      betterscroll
    },
    created(){
       this.choose(0,this.tabs[0].dpt_data)

    },
    mounted(){
      this.$nextTick(function () {
        let itemwidth = document.getElementsByClassName("ulwidth")[0].firstChild.clientWidth;
        console.log('宽度为'+itemwidth)
        let tatalheight=0;
        let nums=this.toptitles.length;
        tatalheight=itemwidth*nums
        console.log('总宽度为'+tatalheight)
        this.tatalheightz=tatalheight+100

      })
    },


  }
</script>

<style scoped lang="less" type="text/less" >
@import "../../../common/css/variable.less";

  .main{
    position: absolute;
    right: 0;
    left: 0;
    top: 52px;
    bottom: 0;
  }
  .docutor{
    height: 90px;
    background:@color-withe;
    .title{
      font-size:@font-size-five;
      padding : 14px;
    }
    .titlecenter{
      overflow: hidden;
      width: 100%;
      .tiltleinner{
        ul{
          font-size: 0;
          white-space:nowrap;//处理块元素中的空白符和换行
          li{
            font-size: @font-size-six;
            margin-left: 15px;
            background-color:@color-background;
            text-align: center;
            line-height: 35px;
            display: inline-block;
          }
        }
      }
    }



  }
  .department{
    border-top: 10px solid @color-background;
    top:100px;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    overflow:hidden;
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
  .selectleft{
    background:@color-withe ;
  }


</style>
