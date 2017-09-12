<template>
  <div>
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
        <ul>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩我是</span><span class="category">(儿科用用)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
          <li><span class="name">张浩</span><span class="category">(儿科)</span></li>
        </ul>

      </div>
      <div class="department ">

        <div class="department_left" ref="left">
          <ul>
            <li>左边1</li>
            <li>左边2</li>
            <li>左边3</li>
            <li>左边4</li>
            <li>左边5</li>
            <li>左边6</li>
            <li>左边7</li>
            <li>左边8</li>
            <li>左边9</li>
            <li>左边10</li>
            <li>左边11</li>
            <li>左边12</li>
            <li>左边13</li>
            <li>左边14</li>
            <li>左边15</li>
            <li>左边16</li>
            <li>左边17</li>
            <li>左边18</li>
            <li>左边19</li>
            <li>左边20</li>
            <li>左边21</li>
            <li>左边22</li>
            <li>左边23</li>
            <li>左边24</li>
            <li>左边25</li>
            <li>左边26</li>
            <li>左边27</li>
            <li>左边28</li>
            <li>左边29</li>
            <li>左边30</li>
            <li>左边31</li>
            <li>左边32</li>
            <li>左边33</li>
            <li>左边34</li>
            <li>左边35</li>
            <li>左边36</li>
            <li>左边37</li>
            <li>左边38</li>
            <li>左边39</li>
            <li>左边40</li>
            <li>左边41</li>
            <li>左边42</li>
            <li>左边43</li>
            <li>左边44</li>
            <li>左边45</li>
            <li>左边46</li>
            <li>左边47</li>
            <li>左边48</li>
            <li>左边49</li>
            <li>左边50</li>
          </ul>
        </div>

        <div  class="department_right" ref="right">
          <ul>
            <li>右边1</li>
            <li>右边2</li>
            <li>右边3</li>
            <li>右边4</li>
            <li>右边5</li>
            <li>右边6</li>
            <li>右边7</li>
            <li>右边8</li>
            <li>右边9</li>
            <li>右边10</li>
            <li>右边11</li>
            <li>右边12</li>
            <li>右边13</li>
            <li>右边14</li>
            <li>右边15</li>
            <li>右边16</li>
            <li>右边17</li>
            <li>右边18</li>
            <li>右边19</li>
            <li>右边20</li>
            <li>右边21</li>
            <li>右边22</li>
            <li>右边23</li>
            <li>右边24</li>
            <li>右边25</li>
            <li>右边26</li>
            <li>右边27</li>
            <li>右边28</li>
            <li>右边29</li>
            <li>右边30</li>
            <li>右边31</li>
            <li>右边32</li>
            <li>右边33</li>
            <li>右边34</li>
            <li>右边35</li>
            <li>右边36</li>
            <li>右边37</li>
            <li>右边38</li>
            <li>右边39</li>
            <li>右边40</li>
            <li>右边41</li>
            <li>右边42</li>
            <li>右边43</li>
            <li>右边44</li>
            <li>右边45</li>
            <li>右边46</li>
            <li>右边47</li>
            <li>右边48</li>
            <li>右边49</li>
            <li>右边50</li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {Search} from 'vux'
  import {getscreenWith,getscreenheight} from "../../../api/screenutils.js"
  export default {
    data(){
      return{
        value: '',
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
      }
    },
    components: {
      Search
    },
    created () {
      this.$nextTick(function () {
//        this.loadData()
        /* eslint-disable no-new */
        new BScroll(this.$refs.left)
        /* eslint-disable no-new */
        new BScroll(this.$refs.right)
      })
    },

  }
</script>

<style scoped lang="less" type="text/less">
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
    ul{
      overflow: hidden;
      font-size: 0;
      white-space:nowrap;//处理块元素中的空白符和换行
    }
    ul li{
      font-size: @font-size-six;
      margin-left: 15px;
      background-color:@color-background;
      text-align: center;
      line-height: 35px;
      display: inline-block;
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
</style>
