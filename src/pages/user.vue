<template>
  <div>
    <h1>用户</h1>
    <select name="public-choice" v-model="mwc" @change="getCouponSelected">
      <option :value="coupon.label" v-for="coupon in options">{{coupon.label}}</option>
    </select>
    <el-select v-model="gqg" placeholder="请选择" @change="getCouponSelected">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      gqg: ""
    };
  },
  created() {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    // this.couponSelected = this.couponList[0].id;
  },
  methods: {
    getCouponSelected() {
      //获取选中的优惠券
      console.log(this.gqg);
    }
  }
};
</script>