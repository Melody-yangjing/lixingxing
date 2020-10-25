<template>
  <div id="app">
    <MainTitle></MainTitle>
    <div id="scrollBox" style="overflow-y: auto;height: 100%;padding-top: 57px;box-sizing: border-box;"
      @scroll='handleScroll()'>
      <router-view>
      </router-view>
    </div>
    <div class="topBox" v-if="isShow===true">
      <div class="topItem" @click='topItemClick(0)'>
        <img src="./assets/top@2x.png">
        <span>Top</span>
      </div>
      <div class="topItem" @click='topItemClick(1)'>
        <img src="./assets/buy.png">
        <span>我要买车</span>
      </div>
      <div class="topItem" @click='topItemClick(2)'>
        <img src="./assets/sellcar.png">
        <span>我要卖车</span>
      </div>
    </div>
  </div>
</template>
<script>
  import MainTitle from "./components/mainTitle";
  export default {
    components: {
      MainTitle
    },
    data() {
      return {
        scrollBox: null,
        isShow: false
      }
    },
    methods: {
      topItemClick(type) {
        switch (type) {
          case 0:
            this.scrollBox.scrollTop = 0
            break;
          case 1:
            this.$router.push({ path: '/buy' })
            break;
          case 2:
            this.$router.push({ path: '/sell' })
            break;
          default:
            break;
        }
      },
      handleScroll() {
        const scrollBox = document.getElementById('scrollBox')
        this.scrollBox = scrollBox
        const scroll = scrollBox.scrollTop
        if (scroll > 400) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      }
    },
    watch: {
      '$route': {
        handler: function() {
          this.scrollBox.scrollTop = 0
        },
        // 深度观察监听
        deep: true
      }
    }
  };
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
  }

  .topBox {
    background-color: #012857;
    position: fixed;
    bottom: 100px;
    right: 12px;
    width: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1000;
    font-size: 9px;
    text-align: center;
  }

  .topItem {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;

    img {
      width: 30px;
    }
  }
</style>