<template>
  <div class="manage">
    <head-top :toChildMsg="title"></head-top>
    <bottom-tab>
      <div class="demol">123456</div>
    </bottom-tab>
    <div class="content">
      <h2>数据统计</h2>
      <div class="datas">
        <div class="today">
          <div class="title">当日数据：</div>
          <div class="today_data"><span>新增用户</span></div>
          <div class="today_data"><span>新增订单</span></div>
          <div class="today_data"><span>新增管理员</span></div>
        </div>
        <div class="all">
          <div class="title">总共数据：</div>
          <div class="today_data"><span>注册用户</span></div>
          <div class="today_data"><span>订单总数</span></div>
          <div class="today_data"><span>管理员人数</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headTop from "../components/headTop.vue";
import bottomTab from "../components/bottomTab.vue";
import tools from "../assets/js/tools.js"
export default {
  data() {
    return {
      title: {
        id: "1",
        title: "首页"
      }
    };
  },
  components: {
    headTop,
    bottomTab
  },
  created() {},
  mounted() {
    console.log('123',tools.phonevalid(1817993047))
  },
  methods: {}
};
</script>
<style lang="less" scoped>
  .manage{
    .content{
      padding:20px;
      h2{
        text-align: center;
      }
      .datas{
        .today{
          margin-top:24px;
          display:flex;
          div{
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            margin-left:20px;
            line-height:36px;
            padding:0 16px;
          }
          .title{
            background: #FF9800;
            color:#fff;
          }
        }
        .all{
          margin-top:24px;
          display:flex;
          div{
            // width:160px;
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            margin-left:20px;
            line-height:36px;
            padding:0 16px;
          }
          .title{
            background: #20A0FF;
            color:#fff;
          }
        }
      }
    }
  }
</style>