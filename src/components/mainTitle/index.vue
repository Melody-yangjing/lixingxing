<template>
  <div class="mainTitle">
    <div class="logoBox">
      <img src="../../assets/logo@2x.png" style="width:36px;" />
      <div style="width:1px;height:36px;background: #000;margin: 0 12px"></div>
      <span style="color:#002C55;font-size:12px">利星二手车</span>
    </div>
    <div class="iconBox">
      <img src="../../assets/坐标@2x.png" style="width:16px" />
      <img src="../../assets/导航@2x.png" style="width:21px;margin-left:31px" />
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
    height: 57px;
    padding: 0 24px 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

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