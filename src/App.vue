<template>
  <div id="app">
    <van-sticky>
      <MainTitle></MainTitle>
    </van-sticky>
    <Home></Home>
  </div>
</template>
<script>
  import MainTitle from "./components/mainTitle";
  import Home from "./views/Home";
  export default {
    components: {
      Home,
      MainTitle,
    },
  };
</script>
<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
  }
</style>