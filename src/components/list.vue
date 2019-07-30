<template>
  <div class="list">
    <div class="head_top"></div>
    <div class="list_left">
      <div class="classify" v-for="item in items" @click="goclick">{{item.name}}</div>
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
export default {
  data() {
    return {
      gqg: 1,
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
  mounted() {
    var adiv = document.getElementsByClassName("classify");
    adiv[0].className = "active classify";
    console.log("dom节点", adiv);
    window.addEventListener("scroll", this.handleScroll, true);
  },

  methods: {
    goclick(e) {
      var that = this;
      var lists = Array.from(e.target.parentElement.children);
      for (let i = 0; i < lists.length; i++) {
        lists[i].className = "classify";
      }
      e.target.className = "active classify";
      // 点击获取的当前索引值
      //1 509

      //2 1034

      //3 1393

      //4 1587

      var num = lists.indexOf(e.target);
      var data_lists = document.getElementsByClassName("data_list");
      var hs = parseInt(data_lists[num].getBoundingClientRect().top);
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      console.log("当前索引1", scrollTop, hs);
      var scolls = scrollTop - 150 + hs
      setTimeout(function() {
        that.handleScroll(num);
      }, 0);
      window.scrollTo(0, scolls);
    },
    handleScroll(gqg) {
      console.log("gqg", gqg);
      if (!gqg.isTrusted) {
        console.log(123);
        var num = gqg;
        var adiv = document.getElementsByClassName("classify");
        console.log("这里执行了吗", num);
        for (let j = 0; j < adiv.length; j++) {
          adiv[j].className = "classify";
        }
        adiv[num].className = "active classify";
      } else {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
        var data_lists = document.getElementsByClassName("data_list");
        for (let i = 0; i < data_lists.length; i++) {
          var hs = parseInt(data_lists[i].getBoundingClientRect().top - 150);

          if (parseInt(data_lists[i].getBoundingClientRect().top - 150) <= 0) {
            var num = i;
            var adiv = document.getElementsByClassName("classify");
            console.log(
              "这里的状态值",
              parseInt(data_lists[num].getBoundingClientRect().top - 150)
            );
            console.log("这里执行了吗", num);
            for (let j = 0; j < adiv.length; j++) {
              adiv[j].className = "classify";
            }
            adiv[num].className = "active classify";
          }
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
    height: 1.5rem;
    background: #555;
    position: fixed;
    left: 0;
    top: 0;
  }
  .list_left {
    position: fixed;
    left: 0;
    top: 1.5rem;
    width: 20%;
    font-size: 0.2rem;
    text-align: center;
    background: #eee;
    .classify {
      height: 0.6rem;
      line-height: 0.6rem;
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
    margin-top: 1.5rem;
    .title {
      font-size: 0.24rem;
      line-height: 0.28rem;
    }
    .box_list {
      width: 100%;
      // display: flex;
    }
    .content {
      display: inline-block;
      width: 50%;
      .biaoti {
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.24rem;
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