<template>
  <div id="app">
    <HelloWorld msg="Welcome" />
    <Reference :toChildMsg="cardNumber" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Reference from "./components/reference.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    Reference
  },
  data() {
    return {
      cardNumber: {
        gqg: 123,
        mwc: 234
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
