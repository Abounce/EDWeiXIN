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
      </div>
      <div class="department ">

        <scroller lock-x   class="department_left">

          <ul>
            <li  v-for="(tab,index) in tabs"  @click="choose(tab.type,tab.dpt_data)">{{tab.dpt_name}}</li>
          </ul>

        </scroller>
        <div></div>
        <scroller lock-x    class="department_right">

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

  .main{
    position: absolute;
    right: 0;
    left: 0;
    top: 50px;
  }
  .docutor{

    height: 100px;
    background: red;
  }
  .department{

    display: flex;

    .department_left{
      flex: 1 1 auto
    }
    .department_right{
      flex: 1 1 auto;
    }
  }
</style>
