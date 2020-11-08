<template>
  <div class="mainTitle">
    <div class="logoBox">
      <img src="../../assets/logo@2x.png" style="width:36px;" @click='$router.push({path:"/home"})' />
      <div style="width:1px;height:36px;background: #000;margin: 0 12px"></div>
      <span style="color:#002C55;font-size:12px" @click='$router.push({path:"/home"})'>利星二手车</span>
    </div>
    <div class="iconBox">
      <img src="../../assets/坐标@2x.png" style="width:16px" @click='$router.push({path:"/city"})' />
      <img src="../../assets/导航@2x.png" style="width:21px;margin-left:31px"
        @click='$router.push({path:"/navigation"})' />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    created() { },
    mounted() { },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .mainTitle {
    box-sizing: border-box;
    z-index: 200;
    width: 100%;
    position: fixed;
    top: 0;
    height: 57px;
    padding: 0 24px 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    border-bottom: 1px solid #E8E8E8;

    .logoBox {
      display: flex;
      align-items: center;
    }

    .iconBox {
      display: flex;
      align-items: center;
    }
  }
</style>