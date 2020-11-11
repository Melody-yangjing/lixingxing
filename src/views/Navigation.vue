<template>
  <div>
    <div class="navBox">
      <div class="navItem" @click='$router.push({path:"/buy"})'>买车</div>
      <div class="navItem" @click='$router.push({path:"/sell"})'>卖车</div>
      <div class="navItem" @click='$router.push({path:"/auth"})'>奔驰官方认证</div>
      <div class="navItem" @click='$router.push({path:"/about"})'>关于我们</div>
    </div>
    <Bottom style="position: absolute;bottom: 0;"></Bottom>
  </div>


</template>
<script>
  import Bottom from "../components/bottom";
  export default {
    components: {
      Bottom
    }
  }
</script>
<style lang="scss">
  .navBox {
    padding: 0 20px;

    .navItem {
      font-weight: 700;
      padding: 0 6px;
      height: 58px;
      line-height: 58px;
      font-size: 16px;
      color: #012857;
      border-bottom: 1px solid #ccc
    }
  }
</style>