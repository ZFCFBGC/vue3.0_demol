<template>
  <div class="hello">
    <h6>{{ msg }}</h6>
    <van-button type="primary">主要按钮</van-button>
    <div>
      <input type="file" id="file" name="file" multiple="multiple" accept="image/*"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      offset: 0,
      limit: 20
    };
  },
  created() {
    this.getSystem()
    this.getData()
  },
  methods: {
    getData(){
      this.$request.get('/admin/all',{ offset: this.offset, limit: this.limit }).then(res=>{
        console.log('返回',res)
      })
    },
    getSystem() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid) {
        console.log("我是安卓系统");
      } else if (isiOS) {
         console.log("我是IOS系统");
      }
    }
  }
};
</script>
<style scoped lang="less">
  .hello{
    width:100%;
  }
</style>
