<!--选择科室-->
<template>
   <div>
     <search
       placeholder="请输入科室名称或者医生名称"
       @result-click="resultClick"
       @on-change="getResult"
       :results="results"
       v-model="value"
       @on-focus="onFocus"
       @on-cancel="onCancel"
       @on-submit="onSubmit"
       ref="search"></search>
    <div class="main">
      <div class="docutor">
        <div class="title">挂过号的医生</div>
        <betterscroll class="titlecenter" :data="doctorpastlist" :scrollX="true" v-if="doctorpastlist.length">
          <div class="tiltleinner"  :style="{  width: horizontalwidth+'px' }">
            <ul >
             <li @click="chooseHistoryDocotor(item)"   class="liwidth" v-for="(item,index) in doctorpastlist"><span class="name">{{item.docName}}</span><span class="category">({{item.departName}})</span></li>
            </ul>
          </div>
        </betterscroll>
        <div  v-else class="titlebottom">无</div>

      </div>

      <div class="department ">
        <betterscroll class="department_left" :data="departlist">

          <ul >
            <li  v-for="(item,index) in departlist"  @click="choose(index,item.data)" :class="{selectleft:currentitem===index}">{{item.departName}}</li>
          </ul>

        </betterscroll>

        <betterscroll class="department_right" :data="departlistright" ref="right">
          <ul>
            <li @click="chooseDepartment(item)"  v-for="(item,index) in departlistright">{{item.departName}}</li>
          </ul>
        </betterscroll>
      </div>
    </div>
  </div>
</template>
<script>

  import betterscroll from "../../../common/component/betterscroll.vue"
  import {Search} from 'vux'
  import {getElementWidth} from "../../../api/utils.js"
  export default {
    data () {
      return {
        results: [],
        value: '',
        doctorpastlist:[],
        horizontalwidth:0,
        departlist:[],
        currentitem:0,
        departlistright:[],
      }
    },
    methods: {
      //选择挂过号的医生
      chooseHistoryDocotor(doctor){
//        console.log(doctor.id)
        this.$loacalstore.set('doctorId',doctor.id)
        this.$router.push({ name: '选择挂号医生' })
      },
      //选择科室
      chooseDepartment(item){
        let deptCode = item.code;
        this.$loacalstore.set('deptCode',deptCode)
        this.$router.push({ name: '选择挂号日期'})
      },
      setFocus () {
//        this.$refs.search.setFocus()
//        console.log('on setfocus')
      },
      resultClick (item) {
        var data = JSON.stringify(item);

//        window.alert('you click the result item: ' + JSON.parse(data).title)
        this.$loacalstore.set('doctorId',JSON.parse(data).mid)
        this.$router.push({name:'选择挂号医生'})

      },
      getResult (val) {
//        this.results = val ? getResult(this.value) : []
//        this.results = val ?[{title:"第一列"},{title:"第二列"},{title:"第三列"},{title:"第四列"}]: []
        if(val){
          let word={keyWord:val}
          this.$api.getDoctorList(word).then(data=>{
             var length = data.length;
            this.results=[]
             for(let i=0;i<length;i++){
               this.results.push({
                 title:data[i].docName,
                 mid:data[i].id
//                 other: i
               })

             }
          });
        }else {
          this.results=[];
        }
      },
      onSubmit () {
//        this.$refs.search.setBlur()
//        this.$vux.toast.show({
//          type: 'text',
//          position: 'top',
//          text: 'on submit'
//        })
//        console.log('on Submit')
      },
      onFocus () {
//        console.log('on focus')
      },
      onCancel () {
//        console.log('on cancel')
      },
      choose(index,departlistright){

        this.currentitem=index;
        this.departlistright=departlistright;
//        console.log('当前点击了'+this.currentitem)
//        console.log('当前点击数组'+this.departlistright)
        this.$nextTick(function () {
          this.$refs.right.refresh();
        })
      }
    },
    components: {
      Search,
      betterscroll,

    },
    mounted(){
      this.$nextTick(function () {

//            this.$loacalstore.set('user', { name:'何园鹏' })

        this.$api.getDepartList().then(data=>{
//          console.log(data)
          this.departlist=data;
          this.$nextTick(function () {
          this.choose(0,this.departlist[0].data)


          })
        });

        this.$api.getDoctorPastList().then(data=>{
//             console.log(data)
            this.doctorpastlist=data;
            this.$nextTick(function () {
            this.horizontalwidth= getElementWidth("liwidth")
           })

        });
      })

    },

  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
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
      font-size:17px;

      padding : 14px;
      font-weight: bold;
    }
    .titlecenter{
      overflow: hidden;
      width: 100%;
      .tiltleinner{

        ul{
          font-size: 0;
          white-space:nowrap;//处理块元素中的空白符和换行
          li{
            font-weight: 500;
            font-size:15px;
            margin-left: 15px;
            background-color:@color-background;
            text-align: center;
            line-height: 35px;
            display: inline-block;
            color: #9c9c9c;

          }
        }
      }
    }
    .titlebottom{
      text-align: center;
      height: 35px;
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
      font-size:17px;
    }
    .department_left{
      flex: 1 ;
      background-color:@color-background;
      li{
        color: @color-right;
        font-size: 17px;
        font-weight: bold;
        border-bottom: 1px solid @color-withe;
      }
    }
    .department_right{
      flex: 1 ;
      li{
        color: @color-right;
        font-size: 17px;
        font-weight: bold;
        border-bottom: 1px solid @color-background;
      }
    }

  }
  .selectleft{
    background:@color-withe ;
    color:@color-zsd;
  }


</style>
