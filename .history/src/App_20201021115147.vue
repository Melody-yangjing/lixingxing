<template>
  <div id="app">
    <MainTitle></MainTitle>
    <Home></Home>
  </div>
</template>
<script>
  import MainTitle from "./components/mainTitle";
  import Home from './views/home'
  export default {
    components: {
      Home,
      MainTitle,
    }
  }

</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>