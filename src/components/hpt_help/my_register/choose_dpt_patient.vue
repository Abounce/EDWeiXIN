
<template>
 <div>
    <div>
      <div class="personal-head clearfix">
        <div class="head-one">
           <img src="" alt="" class="image">
        </div>
        <div class="head-two">
        <span class="name">李军</span>
        <span class="job">副主任医师</span>
        </div>
      </div>
      <div class="personal-body">
        <div class="body-one"><span class="one">挂号科室</span><span class="two">普通外科</span></div>
        <div class="body-two"><span class="three">挂号费用</span><span class="four">￥6.00</span></div>
      </div>
      <div class="personal-time">
        <span class="one">就诊时间</span>
        <span class="two">2017-08-10</span>
      </div>
      <div class="personal-choose">
        <span class="one">请选择就诊人</span>
        <span class="two">添加</span>
      </div>
      <div class="personal-patient">
        <ul>
          <li></li>
        </ul>
      </div>
      <div class="personal-phone">
         <span class="one">联系电话</span>
         <span class="two">1246531515</span>
         <div class="three"></div>
      </div>
      <div class="personal-button">
        <span>确认挂号</span>
      </div>

    </div>
 </div>
</template>

<script>

</script>

<style scoped lang="less" type="text/less">
  @import "../../../common/css/variable.less";
   .personal-head{

     .head-one{
       /*display: inline-block;*/
       width: 80px;
       height: 80px;
       float: left;
     }
     .head-two{
       height: 80px;
       /*display: inline-block;*/
       float: left;
       line-height: 80px;
     .name{
       font-size: 17px;
       font-weight: 500;
       color: #353535;
     }
     .job{
       margin-left: 15px;
       font-size: 14px;
       font-weight: 500;
       color: #888888;
     }

     }
   }
   .personal-body{
     height: 64.5px;
     border-bottom: 10px solid #cdcdcd;
     .body-one{
      margin-top:15.5px;
     .one{
      margin-left: 15px;
       font-size: 16px;
       color: #888888;
     }
     .two{

       margin-left: 10px;
       font-size: 16px;
       font-weight: 500;
       color: #353535;
     }
     }
     .body-two{
       margin-top: 15.5px;
     .three{
       margin-left: 15px;
       font-size: 16px;
       color: #888888;
     }
     .four{

       margin-left: 10px;
       font-size: 16px;
       font-weight: 500;
       color: #353535;
     }
     }
   }
   .personal-time{
     height: 45px;
     line-height: 45px;
     border-bottom: 10px solid #cdcdcd;
     .one{
       margin-left: 15px;
       margin-top: 14.5px;
       font-size: 16px;
       color: #888888;
     }
     .two{
       margin-top: 14.5px;
       margin-left: 10.5px;
       font-size: 16px;
       font-weight: 500;
       color: #13bf72;
     }
   }
   .personal-choose{
     .one{
       display: inline-block;
       margin-left: 15px;
       margin-top: 15px;
       font-size: 17px;
       font-weight: 500;
       color: #353535;
     }
     .two{
       float: right;
       margin-right: 14.5px;
       margin-top: 7.5px;
       padding: 7.5px;
       border-radius: 3px;
       border: solid 1px #13bf72;
     }

   }
   .personal-phone{
    margin-top: 100px;
     height: 49px;
     line-height: 49px;
     .one{
       display: inline-block;
       margin-left: 14.5px;
       /*margin-top: 17px;*/
     }
     .two{
       display: inline-block;
       margin-left: 10px;
       /*margin-top: 17px;*/
     }
     .three{

       float: right;
       display: inline-block;
       .bgimage('Contacts');
       background-size: 26px 21.5px;
       background-position:center center
     }
   }
   .personal-button{
     margin-top: 30px;
     text-align: center;
     span{
       color: white;
       padding:2% 37%;
       background-color: #13bf72;;
       border-radius: 5px;
       border: solid 1px #11ad67;
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
