<template>
  <div>
    
    {{item.option["0"]?item.option["0"]:"为null时显示的东西"}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      item:{
        option:{
          0:123
        }
      }
    }
  }
}
</script>