<template>
  <div>
     <head-top :toChildMsg='title'></head-top>
  </div>
</template>
<script>
import headTop  from '../components/headTop.vue'
export default {
  data(){
      return {
        title:{
          id:'2-1',
          title:'首页 / 添加数据 / 添加商品'
        }
      }
    },
    components: {
    		headTop,
  	},
}
</script>
<style lang="less" scoped>
  
</style>