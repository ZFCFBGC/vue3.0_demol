<template>
  <div class="gqg_scroller">
    <div class="main">
      <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
        <h2>测试vue-scoller</h2>
        <div
          v-for="(item, index) in items"
          class="row"
          :class="{'grey-bg': index % 2 == 0}"
        >{{ item }}</div>
      </scroller>
    </div>
  </div>
</template>
<script>
// 存在的bug
//1. 做的功能中左右切换使用的是同一个scroller，当一个数据加载完毕，切换到另外一个，不可以上拉获取数据
//bug解决：在切换tab页的时候调用this.$refs.my_scroller.finishInfinite(false)finishInfinite函数为scroller实例的方法，当参数为false时，上拉获取数据可以重新调用。当参数为true，上拉获取数据回调函数停止使用,下拉下部不再显示loading，会显示‘’暂无更多数据
// 2.下拉刷新，刷新完毕，loading动画一直存在不消失
//bug解决需要手动调用finishPullToRefresh。停止下拉刷新。调用方式：this.$refs.my_scroller.finishPullToRefresh();
export default {
  data() {
    return {
      gqg: "测试",
      isMore: false,
      items: [],
      top: "",
      bottom: ""
    };
  },
  created() {
    this.isMore = true;
  },
  mounted() {
    for (var i = 1; i <= 20; i++) {
      this.items.push(i + " - keep walking, be 2 with you.");
    }
    this.top = 1;
    this.bottom = 20;
  },
  methods: {
    // 下拉刷新
    refresh(done) {
      var self = this;
      setTimeout(function() {
        var start = self.top - 1;
        for (var i = start; i > start - 10; i--) {
          self.items.splice(0, 0, i + " - keep walking, be 2 with you.");
        }
        self.top = self.top - 10;
        done();
      }, 1500);
    },
    /**
     * 上拉获取
     */
    infinite(done) {
      var self = this;
      if (self.bottom >= 40) {
        setTimeout(() => {
          done(true);
        }, 0);
        return;
      }
      setTimeout(function() {
        var start = self.bottom + 1;
        for (var i = start; i < start + 10; i++) {
          self.items.push(i + " - keep walking, be 2 with you.");
        }
        self.bottom = self.bottom + 10;
        done();
      }, 1500);
    }
  }
};
</script>
<style lang="less" scoped>
.gqg_scroller {
  width: 100%;
}
.main {
  width: 100%;
  height: 360px;
  position: relative;
}
.row {
  width: 100%;
  height: 50px;
  padding: 10px 0;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #444;
  background-color: #fff;
}

.grey-bg {
  background-color: #eee;
}
</style>