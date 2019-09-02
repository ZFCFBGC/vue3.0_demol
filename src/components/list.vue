<template>
  <div class="list">
    <div class="head_top"></div>
    <div class="list_left">
      <div
        class="classify"
        v-for="(item,index) in items"
        :class="act==index?'active':''"
        @click="goclick(index)"
      >{{item.name}}</div>
    </div>
    <div class="list_right">
      <div class="data_list" v-for="item in lists">
        <h2 class="title">{{item.class}}</h2>
        <div class="box_list">
          <div class="content" v-for="lis in item.list">
            <div class="biaoti">{{lis.title}}</div>
            <div class="images">
              <img :src="lis.src" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import getBoundingClientRect from '../assets/js/getBoundingClient.js'
export default {
  data() {
    return {
      gqg: 1,
      act: 0,
      items: [
        { name: "分类1" },
        { name: "分类2" },
        { name: "分类3" },
        { name: "分类4" },
        { name: "分类5" },
        { name: "分类6" },
        { name: "分类7" },
        { name: "分类8" }
      ],
      lists: [
        {
          class: "分类1",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类2",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类3",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类4",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类5",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类6",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类7",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        },
        {
          class: "分类8",
          list: [
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") },
            { title: "1", src: require("../assets/imgs/default.jpg") },
            { title: "2", src: require("../assets/imgs/default.jpg") }
          ]
        }
      ]
    };
  },
  computed: {
    w: function() {
      var h = window
        .getComputedStyle(window.document.documentElement)
        ["font-size"].replace(/px/, "");
      var gh = (h * 300) / 75;
      return gh;
    },
    top:function(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop || 0;
      return scrollTop
    }
  },
  mounted() {
    console.log('兼容性测试',getBoundingClientRect)
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    goclick(idx) {
      var that = this;
      that.act = idx;
      var data_lists = document.getElementsByClassName("data_list");
      console.log('测试',getBoundingClientRect(data_lists[that.act]))
      var hs = parseInt(data_lists[that.act].getBoundingClientRect().top);
      var scolls = that.top - that.w + hs;
      window.scrollTo(0, scolls);
    },
    handleScroll() {
      var that = this;
      var data_lists = document.getElementsByClassName("data_list");
      for (let i = 0; i < data_lists.length; i++) {
        var hs = parseInt(data_lists[i].getBoundingClientRect().top - that.w);
        if (parseInt(data_lists[i].getBoundingClientRect().top - that.w) <= 0) {
          var num = i;
          var adiv = document.getElementsByClassName("classify");
          that.act = num;
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>
<style lang="less">
.list {
  width: 100%;
  .head_top {
    width: 100%;
    height: 300/75rem;
    background: #555;
    position: fixed;
    left: 0;
    top: 0;
  }
  .list_left {
    position: fixed;
    left: 0;
    top: 300/75rem;
    width: 20%;
    font-size: 40/75rem;
    text-align: center;
    background: #eee;
    .classify {
      height: 120/75rem;
      line-height: 120/75rem;
      border-bottom: 1px solid #ddd;
    }
    .active {
      background: #fff;
      border-right: 2px solid #3190e8;
    }
  }
  .list_right {
    margin-left: 20%;
    width: 80%;
    background: #fff;
    overflow: hidden;
    padding-left: 0.1rem;
    margin-top: 300/75rem;
    .title {
      font-size: 48/75rem;
      line-height: 56/75rem;
    }
    .box_list {
      width: 100%;
    }
    .content {
      display: inline-block;
      width: 50%;
      .biaoti {
        font-size: 32/75rem;
        text-align: center;
        line-height: 48/75rem;
      }
      .images {
        padding: 2%;
        img {
          display: block;
          width: 96%;
        }
      }
    }
  }
}
</style>